import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/shared/VideoModal";
import { heroContent } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white/95 py-12 sm:py-16 lg:py-20 border-b border-[var(--border)]">
      {/* Decorative ambient subtle warmth */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[var(--gold-100)]/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[var(--surface)]/90 rounded-full blur-2xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Mission Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow with Gurmukhi & Gold Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold-100)] border border-[var(--gold-300)] text-[var(--gold-600)] text-xs md:text-sm font-bold tracking-wider uppercase mb-5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[var(--gold-500)] animate-pulse" />
              <span>{heroContent.eyebrow}</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--navy-900)] tracking-tight leading-[1.12] mb-5">
              Lighting the Lamp of{" "}
              <span className="text-[var(--gold-600)] italic font-normal">Seva</span>,{" "}
              Compassion &amp; Dignity
            </h1>

            {/* Mission Tagline */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-8 max-w-xl font-normal">
              {heroContent.tagline}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
              <Button
                asChild
                variant="donate"
                size="lg"
                className="text-base px-8 h-13 shadow-md hover:shadow-lg"
              >
                <Link href={heroContent.primaryCtaHref}>
                  <Heart className="w-5 h-5 mr-2 fill-[var(--navy-900)]" />
                  <span>{heroContent.primaryCtaText}</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-7 h-13 border-2 border-[var(--navy-700)] text-[var(--navy-700)] hover:bg-[var(--navy-700)] hover:text-white transition-all font-semibold rounded-xl bg-white/70"
              >
                <Link href={heroContent.secondaryCtaHref}>
                  <span>{heroContent.secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Trust strip & Video modal */}
            <div className=" flex flex-wrap items-center justify-between gap-4">
              {/* <div className="flex items-center gap-3 bg-white border border-[var(--border)] rounded-2xl px-4 py-2.5 shadow-xs">
                <div className="h-9 w-9 rounded-xl bg-[var(--gold-100)] border border-[var(--gold-300)] flex items-center justify-center text-[var(--gold-600)] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <p className="font-bold text-[var(--navy-900)]">50% Tax Exemption</p>
                  <p className="text-[var(--text-muted)] text-xs">Under Section 80G of IT Act</p>
                </div>
              </div> */}

              {/* <VideoModal
                videoUrl={heroContent.videoUrl}
                triggerText="Watch Our Seva Documentary (3 Min)"
                variant="light"
              /> */}
            </div>
          </div>

          {/* Right Column: Visual Showcase & Stats Badge */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image
                src={heroContent.backgroundImage}
                alt="Waheguru Foundation Humanitarian Seva"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-6 right-4 sm:right-auto bg-white/95 backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 shadow-xl flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-[var(--gold-100)] border border-[var(--gold-300)] flex items-center justify-center text-[var(--gold-600)] shrink-0 font-serif font-black text-xl">
                ੴ
              </div>
              <div>
                <div className="font-serif text-2xl font-black text-[var(--navy-900)] leading-tight">
                  {heroContent.statsBadge.number}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-medium">
                  {heroContent.statsBadge.label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
