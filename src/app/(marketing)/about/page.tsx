import React from "react";
import Image from "next/image";
import { ShieldCheck, FileText } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { advisoryBoard } from "@/content/advisors";
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
  },
  {
    year: "2020",
    title: "Pandemic Emergency Relief Flotilla",
    description:
      "Rapidly scaled to distribute over 1.2 million dry ration kits and setup oxygen concentrator langars during critical lockdowns.",
  },
  {
    year: "2022",
    title: "Statutory Trust & 80G Recognition",
    description:
      "Formally registered as a public charitable trust with full 80G and 12A certifications, welcoming independent advisory council members.",
  },
  {
    year: "2024",
    title: "Mobile Clinics & Rural Learning Hubs",
    description:
      "Expanded beyond food security to operate 14 mobile medical vans and sponsor 14,500 children with digital learning tablets.",
  },
  {
    year: "Present",
    title: "18 States Reached with Sarbat Da Bhala",
    description:
      "Serving over 12,000 daily meals, providing clean drinking water hubs in 24 villages, and empowering thousands of girl scholars.",
  },
];

const annualReports = [
  { year: "FY 2024-25", title: "Annual Impact & Statutory Audit Report", size: "3.4 MB" },
  { year: "FY 2023-24", title: "Audited Financials & Form 10B Return", size: "2.8 MB" },
  { year: "FY 2022-23", title: "Charitable Trust Compliance & 80G Statement", size: "2.1 MB" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[var(--navy-900)] text-white py-20 md:py-28 relative overflow-hidden">
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
        <Container className="max-w-5xl">
          <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-8 sm:p-12 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="Volunteers serving community meals"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Our Founding Ethos
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-900)]">
                &ldquo;Recognise the Whole Human Race as of One Single Caste&rdquo;
              </h2>
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                Inspired by the profound humanitarian teachings of Guru Nanak Dev Ji, our foundation operates on three cardinal pillars: <strong className="text-[var(--navy-900)]">Kirat Karo</strong> (earning honestly), <strong className="text-[var(--navy-900)]">Naam Japo</strong> (remembering the Divine), and <strong className="text-[var(--navy-900)]">Vand Chhako</strong> (sharing one&apos;s blessings with those in need).
              </p>
              <p className="text-[var(--text-muted)] text-base leading-relaxed">
                We believe that charity delivered with arrogance diminishes the receiver. True seva elevates both the giver and receiver as brothers and sisters in creation. That is why our community kitchens serve hot food on dignified thalis, our doctors speak to patients with tender respect, and our scholarships mentor youth as future leaders.
              </p>
              <div className="pt-2 text-xs font-bold text-[var(--gold-600)] uppercase tracking-wider">
                — Board of Trustees, Waheguru Foundation
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story Timeline */}
      <Section variant="surface" spacing="lg">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Milestones of Hope"
            title="Our Journey of Grassroots Growth"
            description="From a modest weekend kitchen to a nationwide humanitarian coalition supporting over 1.25 million lives."
          />

          <div className="relative border-l-2 border-[var(--gold-500)]/40 ml-4 sm:ml-32 space-y-12">
            {timelineEvents.map((event) => (
              <div key={event.year} className="relative pl-6 sm:pl-10 group">
                {/* Year Badge */}
                <div className="sm:absolute sm:-left-32 sm:top-0 text-left sm:text-right pr-4 mb-2 sm:mb-0">
                  <span className="font-serif text-2xl font-bold text-[var(--gold-600)] block">
                    {event.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-[var(--gold-500)] border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

                {/* Card */}
                <div className="rounded-2xl bg-white border border-[var(--border)] p-6 shadow-2xs">
                  <h3 className="font-serif text-xl font-bold text-[var(--navy-900)] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Advisory Board Section */}
      <Section variant="bg" spacing="lg" id="advisors">
        <Container>
          <SectionHeading
            eyebrow="Advisory Council"
            title="Governed by Integrity, Wisdom &amp; Public Accountability"
            description="Our independent council of jurists, public health leaders, and chartered accountants guarantees ethical compliance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisoryBoard.map((advisor) => (
              <div
                key={advisor.id}
                className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 bg-gray-200">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      sizes="250px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold-600)] block">
                    {advisor.organization}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] mt-1">
                    {advisor.name}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--navy-700)] mb-2">
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

      {/* Transparency & Financial Downloads */}
      <Section variant="surface" spacing="lg" id="transparency">
        <Container className="max-w-4xl">
          <SectionHeading
            eyebrow="Audited Accountability"
            title="Public Records &amp; Transparency Downloads"
            description="We believe public charity is a sacred trust. Review our statutory registrations and annual audited balance sheets below."
          />

          {/* Legal Registrations Strip */}
          <div className="rounded-2xl bg-white border border-[var(--border)] p-6 sm:p-8 mb-8 shadow-xs">
            <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[var(--gold-600)]" />
              <span>Statutory Certifications &amp; Licenses</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[var(--text-muted)] block">Public Charitable Trust</span>
                <strong className="text-[var(--navy-900)] text-sm">{siteConfig.legal.trustRegistrationNo}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[var(--text-muted)] block">NITI Aayog NGO Darpan</span>
                <strong className="text-[var(--navy-900)] text-sm">{siteConfig.legal.darpanId}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[var(--text-muted)] block">Section 80G Tax Exemption</span>
                <strong className="text-[var(--navy-900)] text-sm">{siteConfig.legal.section80G}</strong>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-[var(--text-muted)] block">Income Tax 12A Registration</span>
                <strong className="text-[var(--navy-900)] text-sm">{siteConfig.legal.section12A}</strong>
              </div>
            </div>
          </div>

          {/* Report Downloads */}
          <div className="space-y-3">
            {annualReports.map((report) => (
              <div
                key={report.title}
                className="flex items-center justify-between p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--gold-500)] transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[var(--navy-100)] flex items-center justify-center text-[var(--navy-700)] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-[var(--navy-900)]">
                      {report.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)]">
                      {report.year} • PDF document • {report.size}
                    </p>
                  </div>
                </div>

                <ReportDownloadButton title={report.title} />
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
