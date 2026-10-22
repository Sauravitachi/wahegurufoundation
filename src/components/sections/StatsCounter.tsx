import React from "react";
import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/shared/CountUp";
import { impactStats } from "@/content/stats";

export function StatsCounter() {
  return (
    <section className="bg-[var(--navy-900)] text-white py-12 md:py-16 border-y border-[var(--navy-800)] relative">
      <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/30 to-transparent pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 text-center">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center p-3 group transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--gold-300)] tracking-tight mb-2">
                <CountUp
                  end={stat.value}
                  suffix={stat.suffix}
                  formatCompact={stat.formatCompact}
                  duration={2200}
                />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-xs text-gray-400 mt-1 max-w-[200px] hidden sm:block leading-snug">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
