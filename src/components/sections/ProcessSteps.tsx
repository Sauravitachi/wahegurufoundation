import React from "react";
import { Search, Users, Zap, CheckCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Understand",
    description:
      "We conduct field assessments with local panchayats, surveying real needs before designing any intervention.",
  },
  {
    step: "02",
    icon: Users,
    title: "Mobilise",
    description:
      "Resources, volunteers, and certified medical or educational materials are pooled with transparent budgetary allocation.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Act",
    description:
      "Direct on-ground execution: hot meals delivered, mobile medical camps established, or school supplies handed out with dignity.",
  },
  {
    step: "04",
    icon: CheckCheck,
    title: "Follow Up",
    description:
      "Ongoing impact evaluation, digital progress reporting to donors, and handing stewardship over to empowered communities.",
  },
];

export function ProcessSteps() {
  return (
    <Section variant="surface" spacing="lg" id="how-we-work">
      <Container>
        <SectionHeading
          eyebrow="Our Methodology"
          title="How We Work: Transparent &amp; Community-First"
          description="A disciplined 4-stage operational model that guarantees donor funds produce measurable, verifiable, and enduring human impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 bg-[var(--border)] -z-0" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative z-10 rounded-2xl bg-white border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[var(--navy-100)] border border-[var(--navy-600)]/20 text-[var(--navy-700)] flex items-center justify-center group-hover:bg-[var(--gold-500)] group-hover:text-[var(--navy-900)] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-2xl font-black text-[var(--gold-600)]/60">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--navy-900)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
