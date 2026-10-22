import React from "react";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/shared/CountUp";
import { impactStats } from "@/content/stats";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Audited Impact & Field Milestones",
  description:
    "Explore Waheguru Foundation's audited operational metrics, reach across 18 Indian states, and annual reports.",
  pathname: "/impact",
});

const statesReached = [
  { state: "Punjab", projects: "Daily Langar Hubs, 48 Digital Village Classrooms, RO Plants" },
  { state: "Delhi NCR", projects: "Hospital Compound Langar Kitchens, Pavement Blankets Drive" },
  { state: "Haryana", projects: "Rural Mobile Dispensaries, Women's Stitching Cooperatives" },
  { state: "Uttarakhand", projects: "Mountain Village Medical Camps, Flash Flood Emergency Rations" },
  { state: "Assam", projects: "Brahmaputra Flood Flotilla Relief Kits & Clean Water Filtration" },
  { state: "Rajasthan", projects: "Solar Borewell Desalination & Rainwater Catchment Ponds" },
];

export default function ImpactPage() {
  return (
    <>
      {/* Top Banner */}
      <section className="bg-[var(--navy-800)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/30 to-transparent pointer-events-none" />
        <Container className="relative z-10 max-w-4xl text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            AUDITED ACCOUNTABILITY
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Measurable, Verifiable &amp; Enduring Impact
          </h1>
          <p className="text-gray-200 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We hold ourselves to rigorous standards of public disclosure. Review how your generous contributions translate into real human relief.
          </p>
        </Container>
      </section>

      {/* Big Impact Numbers Strip */}
      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.id}
                className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-xs hover:shadow-md transition-shadow text-center"
              >
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--gold-600)] mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    formatCompact={stat.formatCompact}
                    duration={2400}
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* States Reached Map Strip */}
      <Section variant="surface" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Geographical Footprint"
            title="Active Seva Across 18 Indian States &amp; UTs"
            description="Our decentralized volunteer network enables emergency mobilization in under 24 hours."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {statesReached.map((item) => (
              <div
                key={item.state}
                className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-2xs hover:border-[var(--gold-500)] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[var(--gold-600)]" />
                  <h4 className="font-serif text-lg font-bold text-[var(--navy-900)]">
                    {item.state}
                  </h4>
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {item.projects}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="donate" size="lg">
              <Link href="/donate">
                <Heart className="w-4 h-4 mr-2 fill-[var(--navy-900)]" />
                <span>Support Our Nationwide Seva (80G)</span>
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
