import React from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { advisoryBoard } from "@/content/advisors";

export function AdvisoryBoard() {
  return (
    <Section variant="bg" spacing="lg" id="advisory-board">
      <Container>
        <SectionHeading
          eyebrow="Governance & Integrity"
          title="Guided by Wisdom, Ethics & Public Trust"
          description="Our independent advisory board oversees fiscal stewardship, legal charters, medical protocols, and program effectiveness."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisoryBoard.map((advisor) => (
            <div
              key={advisor.id}
              className="group rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-5 bg-gray-200">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold-600)] block">
                  {advisor.organization}
                </span>

                <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] mt-1 mb-1 leading-snug">
                  {advisor.name}
                </h3>

                <p className="text-xs font-semibold text-[var(--navy-700)] mb-3">
                  {advisor.role}
                </p>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {advisor.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
