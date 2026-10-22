import React from "react";
import Link from "next/link";
import { Compass, Eye, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function MissionVision() {
  return (
    <Section variant="surface" spacing="lg" id="mission-vision">
      <Container>
        <SectionHeading
          eyebrow="Our Guiding Light"
          title="Rooted in Seva, Driven by Compassion"
          description="Inspired by the timeless Sikh ethos of Sarbat Da Bhala (welfare of all), our mission and vision are anchored in selflessness, equity, and dedicated grassroots service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="rounded-2xl bg-white border border-[var(--border)] p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-[var(--gold-100)] border border-[var(--gold-300)] flex items-center justify-center text-[var(--gold-600)] mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Our Mission
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] mt-2 mb-4">
                To Alleviate Suffering with Dignity &amp; Unconditional Seva
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">
                We exist to uplift vulnerable communities irrespective of religion, creed, gender, or background. Through daily hot langar meals, doorstep medical diagnosis, holistic girl child scholarships, and emergency disaster assistance, we build pathways from immediate relief to long-term empowerment.
              </p>
              <ul className="space-y-3 text-sm text-[var(--navy-800)] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)]" />
                  <span>Dignity in every meal, consultation, and classroom</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)]" />
                  <span>Zero administrative compromise: strictly audited stewardship</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)]" />
                  <span>Empowering local communities as lasting caretakers</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 mt-6 border-t border-[var(--border)]">
              <Button asChild variant="link" className="text-[var(--navy-700)] group font-semibold">
                <Link href="/about#mission" className="inline-flex items-center gap-1.5">
                  <span>Read our Mission Charter</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-white border border-[var(--border)] p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="h-14 w-14 rounded-2xl bg-[var(--navy-100)] border border-[var(--navy-600)]/30 flex items-center justify-center text-[var(--navy-700)] mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--navy-600)]">
                Our Vision
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] mt-2 mb-4">
                A Society Free from Hunger, Ignorance &amp; Despair
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">
                We envision an India where no child is deprived of education because of poverty, no elder perishes from lack of simple medicine, and no laborer sleeps hungry on cold pavements. A society where empathy becomes collective responsibility and seva is lived every day.
              </p>
              <ul className="space-y-3 text-sm text-[var(--navy-800)] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)]" />
                  <span>Decentralized solar water hubs in 500 arid villages by 2030</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)]" />
                  <span>50,000 girl scholars supported through secondary education</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)]" />
                  <span>Nationwide humanitarian emergency volunteer network</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 mt-6 border-t border-[var(--border)]">
              <Button asChild variant="link" className="text-[var(--navy-700)] group font-semibold">
                <Link href="/about#vision" className="inline-flex items-center gap-1.5">
                  <span>Explore our 2030 Vision</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
