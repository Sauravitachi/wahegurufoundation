import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { GalleryClient } from "@/features/gallery";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Photo & Video Archive",
  description:
    "Explore photographic moments of community meals, girl scholar classrooms, and mobile medical clinics.",
  pathname: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-20 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            VISUAL DISPATCHES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Seva in Pictures &amp; Stories
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            An open archive chronicling real grassroots compassion, medical camps, and community empowerment.
          </p>
        </Container>
      </section>

      <Section variant="surface" spacing="lg">
        <Container>
          <GalleryClient />
        </Container>
      </Section>
    </>
  );
}
