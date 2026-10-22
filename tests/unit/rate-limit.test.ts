import { describe, it, expect } from "vitest";
import { rateLimit } from "@/lib/rate-limit";

describe("rateLimit", () => {
  it("allows requests under the specified limit", () => {
    const key = `test_ip_${Date.now()}`;
    const first = rateLimit(key, { limit: 3, windowMs: 1000 });
    expect(first.success).toBe(true);
    expect(first.remaining).toBe(2);

    const second = rateLimit(key, { limit: 3, windowMs: 1000 });
    expect(second.success).toBe(true);
    expect(second.remaining).toBe(1);

    const third = rateLimit(key, { limit: 3, windowMs: 1000 });
    expect(third.success).toBe(true);
    expect(third.remaining).toBe(0);

    const fourth = rateLimit(key, { limit: 3, windowMs: 1000 });
    expect(fourth.success).toBe(false);
  });
});
