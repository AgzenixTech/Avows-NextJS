import { Pool } from "pg";
import { serverEnv } from "@/lib/env";
import type { FormSubmissionRecord } from "@/lib/forms/types";

const globalForPg = globalThis as unknown as {
  __avowsPgPool?: Pool;
  __avowsSchemaReady?: Promise<void>;
};

function createPool(): Pool {
  const { database } = serverEnv;

  if (!database.url && !database.host) {
    throw new Error(
      "PostgreSQL is not configured. Set DATABASE_URL or PGHOST/PGUSER/PGPASSWORD/PGDATABASE.",
    );
  }

  const ssl = database.ssl ? { rejectUnauthorized: false } : undefined;

  if (database.url) {
    return new Pool({ connectionString: database.url, ssl, max: 5 });
  }

  return new Pool({
    host: database.host,
    port: database.port,
    user: database.user,
    password: database.password,
    database: database.database,
    ssl,
    max: 5,
  });
}

export function getPool(): Pool {
  if (!globalForPg.__avowsPgPool) {
    globalForPg.__avowsPgPool = createPool();
  }
  return globalForPg.__avowsPgPool;
}

export function ensureSchema(): Promise<void> {
  if (!globalForPg.__avowsSchemaReady) {
    globalForPg.__avowsSchemaReady = getPool()
      .query(
        `
        CREATE TABLE IF NOT EXISTS form_submissions (
          id              BIGSERIAL PRIMARY KEY,
          form_type       TEXT NOT NULL DEFAULT 'contact',
          name            TEXT NOT NULL,
          email           TEXT NOT NULL,
          phone           TEXT,
          company         TEXT,
          message         TEXT NOT NULL DEFAULT '',
          metadata        JSONB NOT NULL DEFAULT '{}'::jsonb,
          resume_filename TEXT,
          resume_data     BYTEA,
          ip_address      TEXT,
          user_agent      TEXT,
          email_status    TEXT NOT NULL DEFAULT 'pending',
          created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
        );

        -- Migrate legacy table name from the initial contact-only implementation.
        DO $$
        BEGIN
          IF EXISTS (
            SELECT 1 FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'contact_submissions'
          ) AND NOT EXISTS (
            SELECT 1 FROM information_schema.tables
            WHERE table_schema = 'public' AND table_name = 'form_submissions'
          ) THEN
            ALTER TABLE contact_submissions RENAME TO form_submissions;
          END IF;
        END $$;

        ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS form_type TEXT NOT NULL DEFAULT 'contact';
        ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS company TEXT;
        ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS metadata JSONB NOT NULL DEFAULT '{}'::jsonb;
        ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS resume_filename TEXT;
        ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS resume_data BYTEA;
        `,
      )
      .then(() => undefined)
      .catch((error) => {
        globalForPg.__avowsSchemaReady = undefined;
        throw error;
      });
  }
  return globalForPg.__avowsSchemaReady;
}

export async function insertFormSubmission(
  input: FormSubmissionRecord,
): Promise<number> {
  await ensureSchema();
  const result = await getPool().query<{ id: string }>(
    `
    INSERT INTO form_submissions (
      form_type, name, email, phone, company, message, metadata,
      resume_filename, resume_data, ip_address, user_agent
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9, $10, $11)
    RETURNING id;
    `,
    [
      input.formType,
      input.name,
      input.email,
      input.phone,
      input.company,
      input.message,
      JSON.stringify(input.metadata),
      input.resumeFilename,
      input.resumeData,
      input.ipAddress,
      input.userAgent,
    ],
  );
  return Number(result.rows[0].id);
}

export async function markSubmissionEmailStatus(
  id: number,
  status: "sent" | "failed",
): Promise<void> {
  await ensureSchema();
  await getPool().query(
    `UPDATE form_submissions SET email_status = $2 WHERE id = $1;`,
    [id, status],
  );
}

/** @deprecated Use insertFormSubmission */
export const insertContactSubmission = insertFormSubmission;
