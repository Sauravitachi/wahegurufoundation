import { describe, it, expect } from "vitest";
import { formatCurrency, formatCompactNumber, formatDate } from "@/lib/formatters";

describe("formatters", () => {
  it("formats Indian Rupees correctly without decimals by default", () => {
    expect(formatCurrency(500)).toContain("500");
    expect(formatCurrency(150000)).toContain("1,50,000");
  });

  it("formats compact numbers accurately", () => {
    expect(formatCompactNumber(12500000)).toBe("1.3 Cr+");
    expect(formatCompactNumber(3800000)).toBe("38 Lakh+");
    expect(formatCompactNumber(14500)).toBe("14.5k+");
    expect(formatCompactNumber(18)).toBe("18");
  });

  it("formats dates into readable Indian short format", () => {
    const formatted = formatDate("2026-09-15");
    expect(formatted).toContain("2026");
    expect(formatted).toContain("Sep");
  });
});
