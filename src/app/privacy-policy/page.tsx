import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy and donor data protection charter for Waheguru Foundation.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-14 md:py-20">
        <Container className="max-w-4xl text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-sm mt-3">
            Last Updated: September 2026 • Waheguru Foundation
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container className="max-w-3xl prose prose-navy">
          <div className="space-y-6 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              1. Our Commitment to Donor Privacy
            </h2>
            <p>
              Waheguru Foundation (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Trust&rdquo;) values the trust you place in us when sharing your personal information. We never sell, rent, lease, trade, or share your contact or financial details with any commercial third party.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              2. Information We Collect
            </h2>
            <p>
              When you donate or register on our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details: Name, email address, phone/WhatsApp number, residential address.</li>
              <li>Tax information: Permanent Account Number (PAN) strictly required for Section 80G tax certificates under CBDT regulations.</li>
              <li>Transaction records: Payment reference IDs and transaction timestamp. Payment card details and bank credentials are handled directly by PCI-DSS certified payment processors (e.g., Razorpay) and are never stored on our servers.</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              3. Use of Information
            </h2>
            <p>
              Your data is solely used to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Generate and email your digitally signed 80G tax exemption receipts.</li>
              <li>File statutory Form 10BD with the Income Tax Department of India.</li>
              <li>Send periodic impact reports and transparency newsletters (which you can opt out of anytime).</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
              4. Data Security &amp; Retention
            </h2>
            <p>
              We maintain end-to-end HTTPS encryption, role-based database access, and regular security audits. For any questions regarding your data, please email us at <strong className="text-[var(--navy-900)]">{siteConfig.contact.email}</strong>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
