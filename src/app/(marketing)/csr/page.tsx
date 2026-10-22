import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CsrForm } from "@/features/forms";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Corporate CSR Partnerships & Social Impact",
  description:
    "Partner with Waheguru Foundation for Schedule VII compliant Corporate Social Responsibility initiatives with verified impact audits.",
  pathname: "/csr",
});

const csrFeatures = [
  "Complete Section 135 / Schedule VII compliance documentation",
  "Dedicated project manager with quarterly milestone audits",
  "High-resolution photographic & video field proof of execution",
  "Employee engagement volunteering drives & on-ground seva days",
  "Custom branding plaques on solar water kiosks and classrooms",
  "Annual statutory financial reconciliation and 10BD certificates",
];

export default function CsrPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            CORPORATE ALLIANCES
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Institutional CSR Partnerships
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Align your organization&apos;s corporate philanthropy with high-integrity grassroots execution.
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left pitch */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Why Partner With Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)]">
                Transformational Impact With Absolute Compliance
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Waheguru Foundation collaborates with forward-thinking enterprises to deliver verifiable, sustainable CSR projects that fulfill both corporate purpose and statutory Schedule VII benchmarks.
              </p>

              <div className="space-y-3 pt-2">
                {csrFeatures.map((feat) => (
                  <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--navy-900)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--navy-900)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-600)]" />
                  <span>Statutory Registrations Verified</span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Public Charitable Trust registered under MCA CSR-1, with valid Section 80G and 12A approvals.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)] mb-1">
                Initiate CSR Dialogue
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Fill in your company details and project interests. Our partnerships team will respond promptly.
              </p>
              <CsrForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
