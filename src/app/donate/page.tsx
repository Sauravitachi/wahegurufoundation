import React, { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DonatePageClient } from "@/features/donation/DonatePageClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Donate Online | 50% Tax Exemption under Section 80G",
  description:
    "Make an online donation to Waheguru Foundation. Support daily langar, rural girl child education, and mobile medical clinics. 80G receipt issued instantly.",
  pathname: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-14 md:py-20 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            ੴ • SARBAT DA BHALA • WELFARE OF ALL
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Support Our Humanitarian Seva
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            All donations are eligible for 50% income tax deduction under Section 80G. Instant certificate generated upon payment.
          </p>
        </Container>
      </section>

      <Section variant="surface" spacing="lg">
        <Container>
          <Suspense
            fallback={
              <div className="py-20 text-center text-sm font-medium text-[var(--navy-700)]">
                Loading secure donation portal...
              </div>
            }
          >
            <DonatePageClient />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
