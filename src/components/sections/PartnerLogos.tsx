import React from "react";
import { Container } from "@/components/layout/Container";
import { Marquee } from "@/components/shared/Marquee";
import { partners } from "@/content/partners";

export function PartnerLogos() {
  return (
    <section className="py-12 bg-white border-y border-[var(--border)] overflow-hidden">
      <Container className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">
          Trusted by Humanitarian Coalitions, CSR Partners &amp; Foundations
        </span>
      </Container>

      <Marquee speed={30} pauseOnHover>
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--navy-900)] whitespace-nowrap shadow-2xs hover:border-[var(--gold-500)] transition-colors"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--gold-500)]" />
            <span className="font-serif font-bold text-sm tracking-wide">
              {partner.logo}
            </span>
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider pl-2 border-l border-[var(--border)]">
              {partner.category}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
