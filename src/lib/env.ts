/**
 * Centralised, server-only environment configuration.
 *
 * IMPORTANT: none of these values (except the reCAPTCHA *site* key, which is
 * public by design) are ever shipped to the browser. They are only read inside
 * server-side code (route handlers / lib modules), so SES credentials, the DB
 * connection string and the reCAPTCHA secret stay on the server.
 */

function optional(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() !== "" ? value.trim() : undefined;
}

function withDefault(name: string, fallback: string): string {
  return optional(name) ?? fallback;
}

export const serverEnv = {
  database: {
    // Either a full connection string or discrete PG* vars are supported.
    url: optional("DATABASE_URL"),
    host: optional("PGHOST"),
    port: Number(withDefault("PGPORT", "5432")),
    user: optional("PGUSER"),
    password: optional("PGPASSWORD"),
    database: optional("PGDATABASE"),
    // Set PGSSL=true for managed providers (RDS, Supabase, Neon, etc.)
    ssl: optional("PGSSL") === "true",
  },
  ses: {
    region: withDefault("AWS_REGION", "ap-southeast-1"),
    accessKeyId: optional("AWS_ACCESS_KEY_ID"),
    secretAccessKey: optional("AWS_SECRET_ACCESS_KEY"),
    // "From" must be a verified SES identity. Supports "Name <email>" format.
    fromEmail: optional("SES_FROM_EMAIL"),
    // Where contact submissions are delivered.
    toEmail: optional("SES_TO_EMAIL"),
    // Optional reply-to (usually the visitor's email is used at runtime).
    replyToEmail: optional("SES_REPLY_TO_EMAIL"),
    // Optional SES configuration set (for dedicated IP pools / event tracking).
    configurationSet: optional("SES_CONFIGURATION_SET"),
  },
  recaptcha: {
    // NEXT_PUBLIC_* is intentionally public (the site key always is).
    siteKey: optional("NEXT_PUBLIC_RECAPTCHA_SITE_KEY"),
    // Secret key NEVER has the NEXT_PUBLIC_ prefix => never sent to the client.
    secretKey: optional("RECAPTCHA_SECRET_KEY"),
  },
  rateLimit: {
    max: Number(withDefault("CONTACT_RATE_LIMIT_MAX", "5")),
    windowMs: Number(withDefault("CONTACT_RATE_LIMIT_WINDOW_MS", "600000")),
  },
} as const;
