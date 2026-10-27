import React from "react";
import Link from "next/link";
import { Heart, Users, Building2, Megaphone, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const waysToHelp = [
  {
    icon: Heart,
    title: "Make a Donation",
    description:
      "Every rupee powers fresh langar meals, school scholarships, and free medicines with 50%.",
    cta: "Donate Now",
    href: "/donate",
    accent: "gold",
  },
  {
    icon: Users,
    title: "Join as a Volunteer",
    description:
      "Lend your hands in our community kitchens, teach in rural digital classrooms, or offer professional skills.",
    cta: "Volunteer With Us",
    href: "/volunteer",
    accent: "navy",
  },
];

export function HowYouCanHelp() {
  return (
    <Section variant="bg" spacing="lg" id="how-you-can-help">
      <Container>
        <SectionHeading
          eyebrow="Get Involved"
          title="Multiple Pathways to Serve Humanity"
          description="Whether through financial stewardship, on-ground seva, corporate partnerships, or community advocacy, every act creates a lasting ripple of hope."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {waysToHelp.map((way) => {
            const Icon = way.icon;
            const isGold = way.accent === "gold";

            return (
              <div
                key={way.title}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                      isGold
                        ? "bg-[var(--gold-100)] border border-[var(--gold-300)] text-[var(--gold-600)] group-hover:bg-[var(--gold-500)] group-hover:text-[var(--navy-900)]"
                        : "bg-[var(--navy-100)] border border-[var(--navy-600)]/20 text-[var(--navy-700)] group-hover:bg-[var(--navy-700)] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--navy-900)] mb-3">
                    {way.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {way.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]">
                  <Button
                    asChild
                    variant={isGold ? "donate" : "outline"}
                    size="sm"
                    className="w-full text-center justify-center"
                  >
                    <Link href={way.href}>
                      <span>{way.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
