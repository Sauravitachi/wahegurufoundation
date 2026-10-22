import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms & Conditions & Refund Policy",
  description: "Terms of service and donation refund guidelines for Waheguru Foundation.",
  pathname: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-14 md:py-20">
        <Container className="max-w-4xl text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Terms of Service &amp; Refund Policy
          </h1>
          <p className="text-gray-300 text-sm mt-3">
            Last Updated: September 2026 • Waheguru Foundation
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website of Waheguru Foundation, donating online, or enrolling as a sevadar, you agree to comply with the terms and statutory provisions stated herein.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]" id="refunds">
              2. Donation Policy &amp; Refund Guidelines
            </h2>
            <p>
              All contributions made to Waheguru Foundation are voluntary gifts in support of charitable, medical, educational, and disaster relief programs. Because funds are rapidly deployed to purchase fresh food and medicine supplies, donations are generally non-refundable.
            </p>
            <p>
              However, if an accidental duplicate transaction or payment gateway technical error occurs, please contact us at <strong className="text-[var(--navy-900)]">{siteConfig.contact.donationsEmail}</strong> within 7 days of the transaction with your payment transaction ID. Valid claims will be reviewed and refunded back to the original payment source within 7 to 10 working days.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              3. Section 80G Tax Exemption
            </h2>
            <p>
              Under Section 80G of the Indian Income Tax Act, 1961, 50% of the donated sum is exempt from taxable income for Indian citizens. Receipts are digitally generated and emailed upon payment confirmation. Donors must provide a valid Indian PAN card number to claim benefits under Form 10BE.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              4. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any legal dispute or proceeding arising out of or related to this website shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
