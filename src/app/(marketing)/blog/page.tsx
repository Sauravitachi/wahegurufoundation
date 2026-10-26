import React from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { blogPosts } from "@/content/posts";
import { constructMetadata } from "@/lib/metadata";
import { BlogFilterView } from "@/components/shared/BlogFilterView";

export const metadata = constructMetadata({
  title: "Field Dispatches, Articles & Seva Chronicles",
  description:
    "Read in-depth field stories, operational insights, and humanitarian impact reports covering education, healthcare, women empowerment, environment, rural development, social justice, youth sports, disaster relief, and strategic collaboration.",
  pathname: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-[var(--navy-800)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/40 to-transparent pointer-events-none" />
        <Container className="text-center max-w-3xl relative z-10">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            HUMANITARIAN CHRONICLES &amp; FIELD DISPATCHES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Stories of Hope, Seva &amp; Transformation
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light">
            In-depth dispatches across our nine core pillars of service—from digital classrooms and mobile health clinics to women-led micro-enterprises, green reforestation, and strategic CSR collaborations.
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container>
          <BlogFilterView posts={blogPosts} />
        </Container>
      </Section>
    </>
  );
}
