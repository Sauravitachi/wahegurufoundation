import { test, expect } from "@playwright/test";

test.describe("Waheguru Foundation Smoke Tests", () => {
  test("Home page loads with brand, hero, and main navigation", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(/Waheguru Foundation/i);

    // Verify brand logo and headings
    const heading = page.locator("h1");
    await expect(heading).toContainText(/Lighting the Lamp of Seva/i);

    // Verify Donate CTA button exists
    const donateBtn = page.getByRole("link", { name: /Donate with 80G Tax Exemption/i });
    await expect(donateBtn).toBeVisible();
  });

  test("Donate page loads and validates mandatory fields", async ({ page }) => {
    await page.goto("/donate");

    await expect(page).toHaveTitle(/Donate Online/i);

    // Try submitting without required fields
    const submitBtn = page.getByRole("button", { name: /Proceed to Donate/i });
    await submitBtn.click();

    // Verify validation errors appear
    const nameError = page.locator("text=Full name must be at least 2 characters");
    await expect(nameError).toBeVisible();

    const emailError = page.locator("text=Please provide a valid email address");
    await expect(emailError).toBeVisible();
  });
});
