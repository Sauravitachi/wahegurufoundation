import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Heart,
  Users,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/shared/ShareButtons";
import { campaigns } from "@/content/campaigns";
import { formatCurrency, formatDate } from "@/lib/formatters";
import { constructMetadata } from "@/lib/metadata";

interface CampaignDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return campaigns.map((campaign) => ({
    slug: campaign.slug,
  }));
}

export async function generateMetadata({ params }: CampaignDetailPageProps) {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);
  if (!campaign) return {};

  return constructMetadata({
    title: campaign.title,
    description: campaign.summary,
    image: campaign.image,
    pathname: `/campaigns/${campaign.slug}`,
  });
}

export default async function CampaignDetailPage({ params }: CampaignDetailPageProps) {
  const { slug } = await params;
  const campaign = campaigns.find((c) => c.slug === slug);

  if (!campaign) {
    notFound();
  }

  const percentage = Math.round((campaign.raised / campaign.goal) * 100);
  const relatedCampaigns = campaigns
    .filter((c) => c.id !== campaign.id)
    .slice(0, 2);

  return (
    <>
      {/* Top Banner / Breadcrumb */}
      <section className="bg-[var(--navy-900)] text-white py-12 md:py-16 relative">
        <Container>
          <div className="flex items-center gap-2 text-xs text-[var(--gold-300)] mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/campaigns" className="hover:underline">Campaigns</Link>
            <span>/</span>
            <span className="text-gray-300 truncate">{campaign.category}</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold">{campaign.category}</Badge>
              {campaign.urgencyBadge && (
                <Badge variant="urgent">{campaign.urgencyBadge}</Badge>
              )}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              {campaign.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-light max-w-3xl">
              {campaign.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Campaign Details & Sticky Donate Card */}
      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Hero Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>

              {/* Share Bar */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <span className="text-xs font-semibold text-[var(--navy-900)]">
                  Help spread the word for this seva cause:
                </span>
                <ShareButtons title={campaign.title} />
              </div>

              {/* Narrative Story */}
              <div className="space-y-6 text-[var(--text)] leading-relaxed">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)]">
                  The Story &amp; Urgent Need
                </h2>
                <p className="text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
                  {campaign.story}
                </p>

                <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-[var(--navy-900)]">
                    Direct Impact Breakdown
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                      <span>Direct procurement of dry rations and medical kits</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                      <span>Zero middleman commission; 100% seva-driven deployment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                      <span>Instant 80G tax certificate generated with Form 10BE filing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--gold-600)] shrink-0 mt-0.5" />
                      <span>Transparent photographic field verification reports</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Field Updates Timeline */}
              {campaign.updates && campaign.updates.length > 0 && (
                <div className="space-y-6 pt-6 border-t border-[var(--border)]">
                  <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)] flex items-center gap-2">
                    <Clock className="w-6 h-6 text-[var(--gold-600)]" />
                    <span>Field Progress Updates</span>
                  </h3>
                  <div className="border-l-2 border-[var(--gold-500)]/40 ml-2 space-y-6">
                    {campaign.updates.map((update) => (
                      <div key={update.title} className="relative pl-6">
                        <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--gold-500)] border-2 border-white" />
                        <span className="text-xs font-bold text-[var(--gold-600)] uppercase tracking-wider">
                          {formatDate(update.date)}
                        </span>
                        <h4 className="font-serif text-lg font-bold text-[var(--navy-900)] mt-0.5">
                          {update.title}
                        </h4>
                        <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                          {update.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Donate Box (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl bg-white border-2 border-[var(--gold-500)]/40 p-6 sm:p-8 shadow-xl space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[var(--navy-900)]">
                      {formatCurrency(campaign.raised)}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      Goal: {formatCurrency(campaign.goal)}
                    </span>
                  </div>

                  <Progress value={campaign.raised} max={campaign.goal} className="h-3" />

                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mt-2">
                    <span className="flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-[var(--navy-600)]" />
                      <span>{campaign.donorsCount} Donors</span>
                    </span>
                    <span className="font-bold text-[var(--gold-600)]">
                      {percentage}% Raised
                    </span>
                  </div>
                </div>

                {/* Suggested Fast Donation Amounts */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--navy-900)] uppercase tracking-wider block">
                    Choose Amount to Donate:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(campaign.suggestedAmounts || [500, 1500, 3000, 7500]).map((amt) => (
                      <Link
                        key={amt}
                        href={`/donate?campaign=${campaign.slug}&amount=${amt}`}
                        className="py-2.5 px-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-center text-sm font-bold text-[var(--navy-900)] hover:border-[var(--gold-500)] hover:bg-[var(--gold-100)] transition-colors"
                      >
                        {formatCurrency(amt)}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Primary Donate Button */}
                <Button asChild variant="donate" size="lg" className="w-full text-base h-13 shadow-md">
                  <Link href={`/donate?campaign=${campaign.slug}`}>
                    <Heart className="w-5 h-5 mr-2 fill-[var(--navy-900)]" />
                    <span>Donate to This Cause</span>
                  </Link>
                </Button>

                {/* Trust info */}
                <div className="pt-2 text-xs text-[var(--text-muted)] space-y-2 border-t border-[var(--border)]">
                  <div className="flex items-center gap-2 text-[var(--navy-900)] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>50% Tax Deduction under 80G</span>
                  </div>
                  <p>
                    Digitally signed 80G receipt issued immediately to your email address upon successful transfer.
                  </p>
                </div>
              </div>

              {/* Related Campaigns Card */}
              <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-[var(--navy-900)]">
                  Other Active Seva Causes
                </h3>
                <div className="space-y-3">
                  {relatedCampaigns.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/campaigns/${rel.slug}`}
                      className="block p-3 rounded-xl bg-white border border-[var(--border)] hover:border-[var(--gold-500)] transition-colors group"
                    >
                      <h4 className="font-serif text-sm font-bold text-[var(--navy-900)] group-hover:text-[var(--gold-600)] transition-colors line-clamp-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        Raised: {formatCurrency(rel.raised)} of {formatCurrency(rel.goal)}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
