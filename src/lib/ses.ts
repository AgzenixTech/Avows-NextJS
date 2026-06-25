import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import { serverEnv } from "@/lib/env";
import type { FormEmailPayload, FormType } from "@/lib/forms/types";

const globalForSes = globalThis as unknown as { __avowsSesClient?: SESv2Client };

function getClient(): SESv2Client {
  if (!globalForSes.__avowsSesClient) {
    const { region, accessKeyId, secretAccessKey } = serverEnv.ses;
    globalForSes.__avowsSesClient = new SESv2Client({
      region,
      credentials:
        accessKeyId && secretAccessKey
          ? { accessKeyId, secretAccessKey }
          : undefined,
    });
  }
  return globalForSes.__avowsSesClient;
}

export function isSesConfigured(): boolean {
  return Boolean(serverEnv.ses.fromEmail && serverEnv.ses.toEmail);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function subjectFor(formType: FormType, payload: FormEmailPayload): string {
  switch (formType) {
    case "career":
      return `New career application: ${payload.name} (${payload.metadata.position ?? "—"})`;
    case "partner":
      return `New partner enquiry from ${payload.company ?? payload.name}`;
    case "home-contact":
      return `New homepage contact enquiry from ${payload.name}`;
    default:
      return `New contact enquiry from ${payload.name}`;
  }
}

function headingFor(formType: FormType): string {
  switch (formType) {
    case "career":
      return "New career application";
    case "partner":
      return "New partner enquiry";
    case "home-contact":
      return "New homepage contact enquiry";
    default:
      return "New contact enquiry";
  }
}

function buildTextBody(payload: FormEmailPayload): string {
  const lines = [`Form: ${payload.formType}`, `Name: ${payload.name}`, `Email: ${payload.email}`];

  if (payload.phone) lines.push(`Phone: ${payload.phone}`);
  if (payload.company) lines.push(`Company: ${payload.company}`);

  for (const [key, value] of Object.entries(payload.metadata)) {
    if (value) lines.push(`${key}: ${value}`);
  }

  if (payload.message) {
    lines.push("", "Message:", payload.message);
  }

  if (payload.resumeFilename) {
    lines.push("", `Resume attached: ${payload.resumeFilename}`);
  }

  lines.push("", `Submission #${payload.submissionId}`);
  return lines.join("\n");
}

function buildHtmlBody(payload: FormEmailPayload): string {
  const rows: string[] = [
    `<tr><td style="padding:4px 12px 4px 0;"><strong>Form</strong></td><td>${escapeHtml(payload.formType)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(payload.name)}</td></tr>`,
    `<tr><td style="padding:4px 12px 4px 0;"><strong>Email</strong></td><td>${escapeHtml(payload.email)}</td></tr>`,
  ];

  if (payload.phone) {
    rows.push(
      `<tr><td style="padding:4px 12px 4px 0;"><strong>Phone</strong></td><td>${escapeHtml(payload.phone)}</td></tr>`,
    );
  }
  if (payload.company) {
    rows.push(
      `<tr><td style="padding:4px 12px 4px 0;"><strong>Company</strong></td><td>${escapeHtml(payload.company)}</td></tr>`,
    );
  }

  for (const [key, value] of Object.entries(payload.metadata)) {
    if (!value) continue;
    const label = key.charAt(0).toUpperCase() + key.slice(1);
    rows.push(
      `<tr><td style="padding:4px 12px 4px 0;"><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`,
    );
  }

  const messageBlock = payload.message
    ? `<p style="font-family:Poppins,Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap;">${escapeHtml(payload.message)}</p>`
    : "";

  const resumeNote = payload.resumeFilename
    ? `<p style="font-family:Poppins,Arial,sans-serif;font-size:14px;color:#333;"><strong>Resume:</strong> ${escapeHtml(payload.resumeFilename)} (attached)</p>`
    : "";

  return `
    <h2 style="font-family:Poppins,Arial,sans-serif;color:#0b1f3a;">${headingFor(payload.formType)}</h2>
    <table style="font-family:Poppins,Arial,sans-serif;font-size:14px;color:#333;border-collapse:collapse;">
      ${rows.join("")}
    </table>
    ${messageBlock}
    ${resumeNote}
    <p style="font-family:Poppins,Arial,sans-serif;font-size:12px;color:#999;">Submission #${payload.submissionId}</p>
  `;
}

function buildRawMime(params: {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachment?: { filename: string; content: Buffer; contentType: string };
}): Buffer {
  const boundary = `----AvowsForm${Date.now()}`;
  const altBoundary = `----AvowsAlt${Date.now()}`;

  const headers = [
    `From: ${params.from}`,
    `To: ${params.to}`,
    `Reply-To: ${params.replyTo}`,
    `Subject: ${params.subject}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    `Content-Type: multipart/alternative; boundary="${altBoundary}"`,
    "",
    `--${altBoundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    params.text,
    "",
    `--${altBoundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: 7bit",
    "",
    params.html,
    "",
    `--${altBoundary}--`,
  ];

  if (params.attachment) {
    const base64 = params.attachment.content.toString("base64");
    const wrapped = base64.replace(/.{1,76}/g, "$&\n").trim();
    headers.push(
      `--${boundary}`,
      `Content-Type: ${params.attachment.contentType}; name="${params.attachment.filename}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${params.attachment.filename}"`,
      "",
      wrapped,
    );
  }

  headers.push(`--${boundary}--`, "");
  return Buffer.from(headers.join("\r\n"), "utf-8");
}

function resumeContentType(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".doc")) return "application/msword";
  if (lower.endsWith(".docx")) {
    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }
  return "application/octet-stream";
}

export async function sendFormEmail(payload: FormEmailPayload): Promise<void> {
  const { fromEmail, toEmail, replyToEmail, configurationSet } = serverEnv.ses;

  if (!fromEmail || !toEmail) {
    throw new Error(
      "Amazon SES is not configured. Set SES_FROM_EMAIL and SES_TO_EMAIL.",
    );
  }

  const subject = subjectFor(payload.formType, payload);
  const text = buildTextBody(payload);
  const html = buildHtmlBody(payload);
  const replyTo = replyToEmail ?? payload.email;

  const hasAttachment = Boolean(payload.resumeData && payload.resumeFilename);

  if (hasAttachment && payload.resumeData && payload.resumeFilename) {
    const raw = buildRawMime({
      from: fromEmail,
      to: toEmail,
      replyTo,
      subject,
      text,
      html,
      attachment: {
        filename: payload.resumeFilename,
        content: payload.resumeData,
        contentType: resumeContentType(payload.resumeFilename),
      },
    });

    await getClient().send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [replyTo],
        ConfigurationSetName: configurationSet,
        Content: { Raw: { Data: raw } },
      }),
    );
    return;
  }

  await getClient().send(
    new SendEmailCommand({
      FromEmailAddress: fromEmail,
      Destination: { ToAddresses: [toEmail] },
      ReplyToAddresses: [replyTo],
      ConfigurationSetName: configurationSet,
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: text, Charset: "UTF-8" },
            Html: { Data: html, Charset: "UTF-8" },
          },
        },
      },
    }),
  );
}

/** @deprecated Use sendFormEmail */
export const sendContactEmail = sendFormEmail;
