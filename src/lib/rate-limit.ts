/**
 * Lightweight sliding-window in-memory rate limiter with fallback.
 * Can be swapped with Upstash Redis in serverless multi-region deployments.
 */

interface RateLimitStore {
  count: number;
  resetTime: number;
}

const memoryStore = new Map<string, RateLimitStore>();

export interface RateLimitOptions {
  limit?: number; // max requests
  windowMs?: number; // window duration in milliseconds
}

export function rateLimit(
  identifier: string,
  options: RateLimitOptions = {}
): { success: boolean; remaining: number; reset: number } {
  const limit = options.limit ?? 10;
  const windowMs = options.windowMs ?? 60 * 1000; // 1 minute
  const now = Date.now();

  const record = memoryStore.get(identifier);

  if (!record || now > record.resetTime) {
    memoryStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: limit - 1, reset: now + windowMs };
  }

  if (record.count >= limit) {
    return { success: false, remaining: 0, reset: record.resetTime };
  }

  record.count += 1;
  memoryStore.set(identifier, record);

  return { success: true, remaining: limit - record.count, reset: record.resetTime };
}
