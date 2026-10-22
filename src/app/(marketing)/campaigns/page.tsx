import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CampaignListClient } from "@/features/campaigns";
import { campaigns } from "@/content/campaigns";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Humanitarian Campaigns & Appeals",
  description:
    "Explore active community campaigns in hunger relief, girl child education, clean water, and disaster aid. 80G tax benefits available.",
  pathname: "/campaigns",
});

export default function CampaignsPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-20 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            DIRECT IMPACT CAUSES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Active Humanitarian Campaigns
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Every contribution directly funds field operations with audited 80G tax deductions and photographic impact verification.
          </p>
        </Container>
      </section>

      {/* Filterable Campaign Grid */}
      <Section variant="surface" spacing="lg">
        <Container>
          <CampaignListClient initialCampaigns={campaigns} />
        </Container>
      </Section>
    </>
  );
}
