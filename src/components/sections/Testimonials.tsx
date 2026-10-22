"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <Section variant="bg" spacing="lg" id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Voices of Seva"
          title="Stories of Trust, Gratitude &amp; Compassion"
          description="Read how our community donors, medical volunteers, and empowered scholars perceive our grassroots work."
        />

        <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-12 lg:p-14 shadow-sm relative">
          <div className="absolute top-8 right-8 text-[var(--gold-500)]/30 hidden sm:block">
            <Quote className="w-16 h-16" />
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            {/* Avatar */}
            <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-2 border-[var(--gold-500)] shrink-0 shadow-md">
              <Image
                src={current.avatar}
                alt={current.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            {/* Quote content */}
            <div className="space-y-4 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[var(--gold-500)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[var(--navy-900)] italic leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="pt-2">
                <p className="font-serif text-base sm:text-lg font-bold text-[var(--navy-900)]">
                  {current.name}
                </p>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  {current.role} • <span className="text-[var(--gold-600)] font-medium">{current.location}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Slider navigation controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 mt-8 pt-6 border-t border-[var(--border)]">
            <span className="text-xs text-[var(--text-muted)] font-medium sm:hidden">
              {currentIndex + 1} of {testimonials.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                className="p-2.5 rounded-full border border-[var(--border)] bg-white text-[var(--navy-900)] hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] shadow-2xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="p-2.5 rounded-full border border-[var(--border)] bg-white text-[var(--navy-900)] hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] shadow-2xs"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
