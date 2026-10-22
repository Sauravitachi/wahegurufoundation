import React from "react";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Adopt a Child | Educational Sponsorship Program",
  description:
    "Sponsor a child's complete education, nutrition, uniforms, and digital tablets for ₹1,500/month. 80G tax exemption included.",
  pathname: "/adopt-a-child",
});

const whatMoneyCovers = [
  {
    icon: GraduationCap,
    title: "School Admission & Tuition",
    description: "Full annual school fees ensuring zero interruption in secondary education.",
  },
  {
    icon: BookOpen,
    title: "Uniforms & Textbooks",
    description: "Two complete sets of uniforms, winter sweaters, sturdy shoes, and books.",
  },
  {
    icon: Sparkles,
    title: "Digital Tablet & STEM Lab",
    description: "Pre-loaded interactive tablet with NCERT syllabus, simulations, and coding basics.",
  },
  {
    icon: Heart,
    title: "Midday Nutrition Supplements",
    description: "High-protein daily nutritional additions to midday meals for optimal growth.",
  },
];

const sponsorshipPlans = [
  {
    id: "monthly",
    title: "Monthly Seva Pledge",
    amount: "₹1,500",
    period: "per month (~₹50/day)",
    description: "Provides continuous monthly sustenance, school supplies, and tutoring.",
    featured: false,
    ctaText: "Sponsor Monthly",
    href: "/donate?frequency=monthly&amount=1500&cause=child-sponsorship",
  },
  {
    id: "annual",
    title: "Annual Education Champion",
    amount: "₹18,000",
    period: "for full 1-year sponsorship",
    description: "Complete full-year educational adoption covering tuition, digital tablet, uniforms, and health.",
    featured: true,
    badge: "Most Impactful",
    ctaText: "Sponsor for 1 Year (80G)",
    href: "/donate?frequency=one-time&amount=18000&cause=child-sponsorship",
  },
  {
    id: "two-children",
    title: "Twin Scholar Adoption",
    amount: "₹36,000",
    period: "annual sponsorship for 2 children",
    description: "Empower two girl scholars from the same village with uninterrupted secondary schooling.",
    featured: false,
    ctaText: "Sponsor 2 Scholars",
    href: "/donate?frequency=one-time&amount=36000&cause=child-sponsorship",
  },
];

export default function AdoptAChildPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/30 to-transparent pointer-events-none" />
        <Container className="relative z-10 max-w-4xl text-center">
          <Badge variant="gold" className="mb-4">
            CHILD SPONSORSHIP INITIATIVE
          </Badge>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Give a Child the Unstoppable Gift of Education
          </h1>
          <p className="text-gray-200 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            For just ₹50 a day, you can break the chains of generational poverty for a child. Sponsoring a scholar changes the destiny of an entire family.
          </p>
        </Container>
      </section>

      {/* What the Money Covers */}
      <Section variant="bg" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Transparent Stewardship"
            title="What Your Monthly Sponsorship Covers"
            description="Every rupee is directed into audited tangible resources that keep a child happily in school."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatMoneyCovers.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-[var(--gold-100)] border border-[var(--gold-300)] flex items-center justify-center text-[var(--gold-600)] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-2">
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

      {/* Sponsorship Plans Pricing Cards */}
      <Section variant="surface" spacing="lg">
        <Container>
          <SectionHeading
            eyebrow="Select Your Seva Pledge"
            title="Choose a Sponsorship Plan That Fits Your Heart"
            description="All options include 50% income tax exemption certificates under Section 80G and bi-annual academic progress reports."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sponsorshipPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.featured
                    ? "bg-[var(--navy-900)] text-white shadow-2xl border-2 border-[var(--gold-500)] scale-105 z-10"
                    : "bg-white text-[var(--text)] border border-[var(--border)] shadow-xs hover:shadow-md"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gold-500)] text-[var(--navy-900)] font-bold text-xs uppercase px-3 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3
                    className={`font-serif text-xl font-bold mb-2 ${
                      plan.featured ? "text-white" : "text-[var(--navy-900)]"
                    }`}
                  >
                    {plan.title}
                  </h3>

                  <div className="my-4">
                    <span
                      className={`font-serif text-4xl sm:text-5xl font-black ${
                        plan.featured ? "text-[var(--gold-300)]" : "text-[var(--gold-600)]"
                      }`}
                    >
                      {plan.amount}
                    </span>
                    <span
                      className={`text-xs block mt-1 ${
                        plan.featured ? "text-gray-300" : "text-[var(--text-muted)]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      plan.featured ? "text-gray-200" : "text-[var(--text-muted)]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 text-xs mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          plan.featured ? "text-[var(--gold-300)]" : "text-emerald-600"
                        }`}
                      />
                      <span>Direct child profile allocation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          plan.featured ? "text-[var(--gold-300)]" : "text-emerald-600"
                        }`}
                      />
                      <span>Quarterly handwritten letters &amp; grades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${
                          plan.featured ? "text-[var(--gold-300)]" : "text-emerald-600"
                        }`}
                      />
                      <span>Instant 80G tax receipt with 10BE filing</span>
                    </li>
                  </ul>
                </div>

                <Button
                  asChild
                  variant={plan.featured ? "donate" : "default"}
                  size="lg"
                  className="w-full text-center font-bold"
                >
                  <Link href={plan.href}>
                    <Heart className="w-4 h-4 mr-2 fill-current" />
                    <span>{plan.ctaText}</span>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How it Works / 3 Steps */}
      <Section variant="bg" spacing="lg" id="how-it-works">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Step-by-Step"
            title="How the Sponsorship Journey Unfolds"
            description="We ensure a personal, transparent, and joyful connection between you and the young life you illuminate."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 text-center">
              <div className="font-serif text-3xl font-bold text-[var(--gold-600)] mb-3">01</div>
              <h4 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-2">
                Make Your Seva Pledge
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Choose monthly or annual sponsorship through our secure 80G tax-exempt donation portal.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 text-center">
              <div className="font-serif text-3xl font-bold text-[var(--gold-600)] mb-3">02</div>
              <h4 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-2">
                Receive Child Welcome Kit
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Within 7 days, receive your child&apos;s photo profile, village background, and school aspirations.
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 text-center">
              <div className="font-serif text-3xl font-bold text-[var(--gold-600)] mb-3">03</div>
              <h4 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-2">
                Watch Them Flourish
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Receive bi-annual report cards, festive greetings, and see their transition to higher studies.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
