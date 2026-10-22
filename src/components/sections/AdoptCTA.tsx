import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { adoptChildContent } from "@/content/home";

export function AdoptCTA() {
  return (
    <Section variant="surface" spacing="lg" id="adopt-a-child">
      <Container>
        <div className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)] block">
                {adoptChildContent.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy-900)] leading-tight">
                {adoptChildContent.title}
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-light">
                {adoptChildContent.description}
              </p>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {adoptChildContent.perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--navy-900)]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild variant="donate" size="lg" className="h-13 px-8 text-base shadow-md">
                  <Link href={adoptChildContent.ctaHref}>
                    <Heart className="w-5 h-5 mr-2 fill-[var(--navy-900)]" />
                    <span>{adoptChildContent.ctaText}</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-13 px-6">
                  <Link href="/adopt-a-child#how-it-works">
                    <span>How Sponsorship Works</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-[var(--text-muted)] pt-1">
                Tax exemption under Section 80G applies to all monthly and annual sponsorship contributions.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:h-full w-full min-h-[350px]">
              <Image
                src={adoptChildContent.image}
                alt="Child receiving educational sponsorship"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)]/70 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
