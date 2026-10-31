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
          description="Inspired by the timeless ethos of Sarbat Da Bhala (welfare of all), our mission and vision are anchored in selflessness, equity, and dedicated grassroots community action."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="rounded-2xl bg-white border border-[var(--border)] p-8 sm:p-10 shadow-xs flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>            
              <h1 className="text-5xl font-serif text-center text-[var(--gold-600)] font-bold">
                Mission
              </h1>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] mt-2 mb-4">
                Driving Ground-Level Change Through Direct Action &amp; Unconditional Seva
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">
                Waheguru Foundation exists to serve and uplift vulnerable communities irrespective of background. Through direct emergency relief, essential ration kits, educational support for underprivileged children, and preventive healthcare camps, we transform compassionate intent into measurable grassroots impact.
              </p>
              <ul className="space-y-3 text-sm text-[var(--navy-800)] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)] shrink-0" />
                  <span>Immediate relief, rations, and disaster aid for families in need</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)] shrink-0" />
                  <span>Foundational education, learning spaces, and youth skill development</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)] shrink-0" />
                  <span>Doorstep health drives, medical camps, and wellness awareness</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--gold-500)] shrink-0" />
                  <span>100% transparent stewardship and dedicated volunteer mobilization</span>
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
              <h1 className="text-5xl font-serif text-center text-[var(--gold-600)] font-bold">
                Vision
              </h1>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] mt-2 mb-4">
                An Empowered, Compassionate &amp; Self-Reliant Society
              </h3>
              <p className="text-[var(--text-muted)] text-base leading-relaxed mb-6">
                We envision a society where no individual is left behind due to poverty or circumstance. A world where every child receives quality learning, every family has access to healthcare and essential sustenance, and youth are inspired to lead community welfare with dignity and purpose.
              </p>
              <ul className="space-y-3 text-sm text-[var(--navy-800)] font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)] shrink-0" />
                  <span>Universal access to foundational learning resources in rural &amp; semi-urban areas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)] shrink-0" />
                  <span>Proactive community healthcare and preventive medical support networks</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)] shrink-0" />
                  <span>A strong, rapid-response humanitarian volunteer corps for disaster relief</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--navy-700)] shrink-0" />
                  <span>Fostering self-reliance and civic responsibility among local youth</span>
                </li>
              </ul>
            </div>
            <div className="pt-8 mt-6 border-t border-[var(--border)]">
              <Button asChild variant="link" className="text-[var(--navy-700)] group font-semibold">
                <Link href="/about#vision" className="inline-flex items-center gap-1.5">
                  <span>Explore our Long-Term Vision</span>
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