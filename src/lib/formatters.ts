/**
 * Formats a number to Indian Rupee representation (e.g. ₹5,000 or ₹1,25,000)
 */
export function formatCurrency(amount: number, hideDecimals = true): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: hideDecimals ? 0 : 2,
    minimumFractionDigits: hideDecimals ? 0 : 2,
  }).format(amount);
}

/**
 * Compact formatting for large numbers (e.g. 2.5 Lakhs, 50K+, 10M)
 */
export function formatCompactNumber(value: number): string {
  if (value >= 10000000) {
    return `${(value / 10000000).toFixed(1).replace(/\.0$/, "")} Cr+`;
  }
  if (value >= 100000) {
    return `${(value / 100000).toFixed(1).replace(/\.0$/, "")} Lakh+`;
  }
  if (value >= 1000) {
    return `${(value / 1000).toFixed(1).replace(/\.0$/, "")}k+`;
  }
  return value.toLocaleString("en-IN");
}

/**
 * Formats a date string to a human-readable Indian format
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
