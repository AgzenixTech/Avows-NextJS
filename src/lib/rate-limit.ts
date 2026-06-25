import { serverEnv } from "@/lib/env";

/**
 * Lightweight in-memory, per-IP fixed-window rate limiter to blunt abuse / DDoS
 * of the contact endpoint.
 *
 * NOTE: this lives in process memory, which is sufficient for a single Node
 * server (`next start`). If you deploy multiple instances or to a serverless
 * platform, move this to a shared store (Redis / Upstash) so the limit is
 * enforced globally. The public API below stays the same.
 */
type Bucket = { count: number; resetAt: number };

const globalForRl = globalThis as unknown as {
  __avowsRlBuckets?: Map<string, Bucket>;
};

function buckets(): Map<string, Bucket> {
  if (!globalForRl.__avowsRlBuckets) {
    globalForRl.__avowsRlBuckets = new Map();
  }
  return globalForRl.__avowsRlBuckets;
}

export type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

export function checkRateLimit(key: string): RateLimitResult {
  const { max, windowMs } = serverEnv.rateLimit;
  const now = Date.now();
  const store = buckets();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: max - 1, retryAfterSeconds: 0 };
  }

  if (existing.count >= max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  store.set(key, existing);
  return {
    allowed: true,
    remaining: max - existing.count,
    retryAfterSeconds: 0,
  };
}

/**
 * Best-effort client IP extraction from common proxy headers.
 */
export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return headers.get("x-real-ip") ?? "unknown";
}
