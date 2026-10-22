import { describe, it, expect } from "vitest";
import { donationFormSchema, getImpactText } from "@/features/donation/schema";

describe("donationFormSchema", () => {
  it("validates valid donation input", () => {
    const valid = {
      amount: 1500,
      frequency: "one-time",
      donorName: "Harpreet Singh",
      donorEmail: "harpreet@example.com",
      donorPhone: "9876543210",
      donorPan: "ABCDE1234F",
      donorAddress: "123 Seva Marg, Delhi",
      campaignSlug: "langar-daily-wagers",
      isAnonymous: false,
      honeypot: "",
    };

    const result = donationFormSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("fails if amount is below minimum threshold of ₹100", () => {
    const invalid = {
      amount: 50,
      frequency: "one-time",
      donorName: "Harpreet Singh",
      donorEmail: "harpreet@example.com",
      donorPhone: "9876543210",
      campaignSlug: "general-seva",
      isAnonymous: false,
      honeypot: "",
    };

    const result = donationFormSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("validates PAN format correctly", () => {
    const invalidPan = {
      amount: 1000,
      frequency: "one-time",
      donorName: "Harpreet Singh",
      donorEmail: "harpreet@example.com",
      donorPhone: "9876543210",
      donorPan: "INVALID_PAN_123",
      campaignSlug: "general-seva",
      isAnonymous: false,
      honeypot: "",
    };

    const result = donationFormSchema.safeParse(invalidPan);
    expect(result.success).toBe(false);
  });

  it("detects bot honeypot", () => {
    const botInput = {
      amount: 1000,
      frequency: "one-time",
      donorName: "Bot Spammer",
      donorEmail: "bot@spam.com",
      donorPhone: "9876543210",
      campaignSlug: "general-seva",
      isAnonymous: false,
      honeypot: "spam_payload",
    };

    const result = donationFormSchema.safeParse(botInput);
    expect(result.success).toBe(false);
  });

  it("returns correct impact helper message for different amount tiers", () => {
    expect(getImpactText(500)).toContain("Feeds 15 underprivileged hospital caregivers");
    expect(getImpactText(1500)).toContain("winter thermal kit");
    expect(getImpactText(3000)).toContain("Funds 1 month of full schooling");
    expect(getImpactText(10000)).toContain("mobile doctor diagnostic");
  });
});
