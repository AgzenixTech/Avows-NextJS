import { handleFormSubmission } from "@/lib/forms/handle-submission";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** @deprecated Prefer POST /api/forms with formType in the body. */
export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body = (await request.json()) as Record<string, unknown>;
    if (!body.formType) {
      body.formType = "contact";
    }
    return handleFormSubmission(
      new Request(request.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    );
  }

  return handleFormSubmission(request);
}
