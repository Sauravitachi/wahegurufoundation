import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  FileText,
  Quote,
  CheckCircle2,
  Heart,
  ArrowRight,
  Award,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import { ReportDownloadButton } from "@/components/shared";

export const metadata = constructMetadata({
  title: "About Us & Founding Values",
  description:
    "Learn about Waheguru Foundation's founding story, mission, advisory governance, and audited transparency records.",
  pathname: "/about",
});

const timelineEvents = [
  {
    year: "2018",
    title: "The First Hearth in West Delhi",
    description:
      "Initiated with a small weekend langar outside hospital waiting areas, serving 200 hot meals prepared by five founding volunteers.",
    badge: "Foundation Hearth",
  },
  {
    year: "2020",
    title: "Pandemic Emergency Relief Flotilla",
    description:
      "Rapidly scaled to distribute over 1.2 million dry ration kits and setup oxygen concentrator langars during critical lockdowns.",
    badge: "Emergency Scaling",
  },
  {
    year: "2022",
    title: "Statutory Trust & 80G Recognition",
    description:
      "Formally registered as a public charitable trust with full 80G and 12A certifications, welcoming independent advisory council members.",
    badge: "Public Trust",
  },
  {
    year: "2024",
    title: "Mobile Clinics & Rural Learning Hubs",
    description:
      "Expanded beyond food security to operate 14 mobile medical vans and sponsor 14,500 children with digital learning tablets.",
    badge: "Healthcare & Education",
  },
  {
    year: "Present",
    title: "21 States Reached with Sarbat Da Bhala",
    description:
      "Serving over 12,000 daily meals, providing clean drinking water hubs in 24 villages, and empowering thousands of girl scholars nationwide.",
    badge: "Nationwide Footprint",
  },
];

const annualReports = [
  {
    year: "FY 2024-25",
    title: "Annual Impact & Statutory Audit Report",
    size: "3.4 MB",
    auditor: "M/s K. Singh & Associates, CA",
    status: "Audited & Filed",
  },
  {
    year: "FY 2023-24",
    title: "Audited Financials & Form 10B Return",
    size: "2.8 MB",
    auditor: "M/s K. Singh & Associates, CA",
    status: "Audited & Filed",
  },
  {
    year: "FY 2022-23",
    title: "Charitable Trust Compliance & 80G Statement",
    size: "2.1 MB",
    auditor: "M/s K. Singh & Associates, CA",
    status: "Audited & Filed",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[var(--navy-800)] text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/30 to-transparent pointer-events-none" />
        <Container className="relative z-10 max-w-4xl text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-4 inline-block">
            {siteConfig.gurmukhiMotto} • OUR ROOTS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Dedicated to Selfless Service, Equity &amp; Human Dignity
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
            Waheguru Foundation was born from the timeless conviction that every human being deserves food, health, and learning with complete dignity.
          </p>
        </Container>
      </section>

      {/* Founder Note / Core Ethos */}
      <Section variant="bg" spacing="lg">
        <Container className="max-w-6xl">
          <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait Frame with proper aspect ratio, rounding, and badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none group">
                {/* Decorative warm layered backdrop */}
                <div className="absolute -inset-2.5 sm:-inset-3 rounded-3xl bg-gradient-to-br from-[var(--gold-500)]/20 via-[var(--gold-300)]/20 to-[var(--navy-700)]/15 -rotate-1.5 transition-transform duration-300 group-hover:rotate-0" />

                {/* Portrait Image Container */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-xl border-4 sm:border-[6px] border-white ring-1 ring-[var(--border)] aspect-[3/4] w-full">
                  <Image
                    src="/brand/jass.png"
                    alt="Jaskaran Singh, Managing Trustee of Waheguru Foundation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 35vw"
                    className="object-cover object-[center_10%] transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Bottom Vignette for Caption */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

                  {/* Floating Caption Badge */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[var(--navy-900)] leading-tight">
                        Jaskaran Singh
                      </p>
                      <p className="text-[10px] sm:text-[11px] font-semibold text-[var(--gold-600)] uppercase tracking-wide">
                        Founder • Waheguru Foundation
                      </p>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Ethos, Teachings & Cardinal Pillars */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:pl-2">
              <div className="flex items-center gap-2">
                <Quote className="w-6 h-6 text-[var(--gold-500)] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                  Our Founding Ethos
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-900)] tracking-tight leading-snug">
                &ldquo;Recognise the Whole Human Race as of One Single Caste&rdquo;
              </h2>

              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                Inspired by the profound humanitarian teachings of Guru Nanak Dev Ji, our foundation operates on three cardinal pillars: <strong className="text-[var(--navy-900)]">Kirat Karo</strong> (earning honestly), <strong className="text-[var(--navy-900)]">Naam Japo</strong> (remembering the Divine), and <strong className="text-[var(--navy-900)]">Vand Chhako</strong> (sharing one&apos;s blessings with those in need).
              </p>

              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                We believe that charity delivered with arrogance diminishes the receiver. True seva elevates both the giver and receiver as brothers and sisters in creation. That is why our community kitchens serve hot food on dignified thalis, our doctors speak to patients with tender respect, and our scholarships mentor youth as future leaders.
              </p>

              {/* Cardinal Pillars Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-[var(--border)] shadow-2xs">
                  <div className="text-xs font-bold text-[var(--gold-600)] uppercase tracking-wider mb-0.5">
                    Kirat Karo
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Honest living and dedicated labor
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[var(--border)] shadow-2xs">
                  <div className="text-xs font-bold text-[var(--gold-600)] uppercase tracking-wider mb-0.5">
                    Naam Japo
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Mindfulness and spiritual humility
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[var(--border)] shadow-2xs">
                  <div className="text-xs font-bold text-[var(--gold-600)] uppercase tracking-wider mb-0.5">
                    Vand Chhako
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Sharing blessings with the underserved
                  </div>
                </div>
              </div>

              {/* Attribution Sign-off */}
              <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-[var(--navy-900)]">
                    Board of Trustees &amp; Sevadars
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    Waheguru Humanitarian Foundation Trust
                  </div>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--gold-100)] text-[var(--navy-900)] border border-[var(--gold-300)]/60">
                  ੴ • ਸਰਬੱਤ ਦਾ ਭਲਾ
                </span>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    
    
    </>
  );
}
