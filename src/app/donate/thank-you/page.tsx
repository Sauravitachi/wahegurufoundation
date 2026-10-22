import React, { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ThankYouClient } from "@/features/donation/ThankYouClient";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Donation Confirmed | Thank You for Your Seva",
  description: "Your donation has been successfully processed. 80G receipt issued.",
  pathname: "/donate/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <Section variant="surface" spacing="lg" className="min-h-[75vh] flex items-center">
      <Container>
        <Suspense
          fallback={
            <div className="py-20 text-center text-sm font-medium text-[var(--navy-700)]">
              Generating your 80G receipt...
            </div>
          }
        >
          <ThankYouClient />
        </Suspense>
      </Container>
    </Section>
  );
}
