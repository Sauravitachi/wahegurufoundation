"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { focusAreas } from "@/content/focus-areas";

export function FocusAreas() {
  return (
    <Section variant="surface" spacing="lg" id="focus-areas">
      <Container>
        <SectionHeading
          eyebrow="Core Pillars of Service"
          title="Transforming Lives Across Five Critical Frontiers"
          description="Holistic humanitarian interventions planned in sync with grassroots panchayats and community elders for lasting self-reliance."
        />

        <Tabs defaultValue={focusAreas[0].id} className="w-full">
          {/* Scrollable Tabs List on mobile */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
            <TabsList className="bg-white/80 border border-[var(--border)] p-1.5 shadow-xs">
              {focusAreas.map((area) => (
                <TabsTrigger
                  key={area.id}
                  value={area.id}
                  className="data-[state=active]:bg-[var(--navy-700)] data-[state=active]:text-white text-xs sm:text-sm py-2 px-3 sm:px-5"
                >
                  {area.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Tab Contents */}
          {focusAreas.map((area) => (
            <TabsContent
              key={area.id}
              value={area.id}
              className="focus-visible:outline-none"
            >
              <div className="rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 lg:p-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Descriptions & Stats */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                      Pillar of Service
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-900)] leading-tight">
                      {area.title}
                    </h3>

                    <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed font-light">
                      {area.fullDescription}
                    </p>

                    {/* Animated Stats Strip */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-y border-[var(--border)] py-6">
                      {area.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--gold-600)]">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[var(--navy-900)] font-medium mt-1">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Key Initiatives Bullet Points */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--navy-700)]">
                        Strategic Programs:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text)]">
                        {area.keyInitiatives.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <div className="pt-2">
                      <Button asChild variant="default" size="default">
                        <Link href={`/focus-areas/${area.slug}`}>
                          <span>Learn more about {area.title}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Visual Image */}
                  <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </Section>
  );
}
