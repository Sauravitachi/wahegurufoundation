import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { focusAreas } from "@/content/focus-areas";
import { campaigns } from "@/content/campaigns";
import { constructMetadata } from "@/lib/metadata";
import { formatCurrency } from "@/lib/formatters";

interface FocusAreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return focusAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: FocusAreaPageProps) {
  const { slug } = await params;
  const area = focusAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return constructMetadata({
    title: `${area.title} | Focus Area`,
    description: area.shortDescription,
    image: area.image,
    pathname: `/focus-areas/${area.slug}`,
  });
}

export default async function FocusAreaDetailPage({ params }: FocusAreaPageProps) {
  const { slug } = await params;
  const area = focusAreas.find((a) => a.slug === slug);

  if (!area) {
    notFound();
  }

  // Find related campaigns in this category
  const relatedCampaigns = campaigns.filter(
    (c) =>
      c.category.toLowerCase().includes(area.id) ||
      area.title.toLowerCase().includes(c.category.toLowerCase())
  );

  return (
    <>
      {/* Banner */}
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/30 to-transparent pointer-events-none" />
        <Container className="relative z-10 max-w-4xl text-center">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            PILLAR OF SERVICE
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {area.title}
          </h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {area.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Our Strategic Approach
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--navy-900)] leading-tight">
                Sustainable, Dignified &amp; Grassroots-Driven Solutions
              </h2>
              <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-light">
                {area.fullDescription}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--navy-900)]">
                  Key Interventions:
                </h3>
                <div className="space-y-2">
                  {area.keyInitiatives.map((init) => (
                    <div key={init} className="flex items-start gap-2.5 text-sm text-[var(--text)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                      <span>{init}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button asChild variant="donate" size="lg">
                  <Link href={`/donate`}>
                    <Heart className="w-4 h-4 mr-2 fill-[var(--navy-900)]" />
                    <span>Support {area.title} (80G)</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/campaigns">
                    <span>Explore All Campaigns</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[var(--border)]">
              <Image
                src={area.image}
                alt={area.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Stats Bar */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-8 mb-16 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--navy-700)] text-center mb-6">
              Demonstrated Outcomes &amp; Field Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {area.stats.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-white border border-[var(--border)] shadow-2xs">
                  <div className="font-serif text-3xl sm:text-4xl font-black text-[var(--gold-600)]">
                    {s.value}
                  </div>
                  <div className="text-sm font-semibold text-[var(--navy-900)] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Campaigns */}
          {relatedCampaigns.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
                Active Campaigns in {area.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedCampaigns.map((camp) => (
                  <div
                    key={camp.id}
                    className="p-6 rounded-2xl bg-white border border-[var(--border)] shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <Badge variant="gold" className="mb-2">
                        {camp.category}
                      </Badge>
                      <h4 className="font-serif text-xl font-bold text-[var(--navy-900)] mb-2">
                        <Link href={`/campaigns/${camp.slug}`}>{camp.title}</Link>
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-4">
                        {camp.summary}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                      <span className="text-xs text-[var(--text-muted)]">
                        Raised: <strong>{formatCurrency(camp.raised)}</strong> of {formatCurrency(camp.goal)}
                      </span>
                      <Button asChild variant="donate" size="sm">
                        <Link href={`/donate?campaign=${camp.slug}`}>Donate</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
