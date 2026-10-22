import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { featuredAppealContent } from "@/content/home";
import { formatCurrency } from "@/lib/formatters";

export function FeaturedAppeal() {
  const percentage = Math.round(
    (featuredAppealContent.raised / featuredAppealContent.goal) * 100
  );

  return (
    <Section variant="bg" spacing="lg" id="featured-appeal">
      <Container>
        <div className="relative rounded-3xl bg-[var(--navy-900)] text-white overflow-hidden shadow-2xl border border-[var(--navy-700)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Image Column */}
            <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full w-full min-h-[360px] overflow-hidden">
              <Image
                src={featuredAppealContent.image}
                alt={featuredAppealContent.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-900)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[var(--navy-900)]" />
              <div className="absolute top-5 left-5">
                <Badge variant="gold" className="text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {featuredAppealContent.badge}
                </Badge>
              </div>
            </div>

            {/* Content & Action Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-300)] block">
                {featuredAppealContent.eyebrow}
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                {featuredAppealContent.title}
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
                {featuredAppealContent.description}
              </p>

              {/* Progress & Stats */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">
                    Raised:{" "}
                    <strong className="text-[var(--gold-300)] text-base font-bold">
                      {formatCurrency(featuredAppealContent.raised)}
                    </strong>
                  </span>
                  <span className="text-gray-400">
                    Goal: {formatCurrency(featuredAppealContent.goal)}
                  </span>
                </div>

                <Progress
                  value={featuredAppealContent.raised}
                  max={featuredAppealContent.goal}
                  className="bg-white/10"
                />

                <div className="flex items-center justify-between text-xs text-gray-400 pt-1">
                  <span>{featuredAppealContent.donorsCount} Compassionate Donors</span>
                  <span className="font-bold text-[var(--gold-300)]">
                    {percentage}% Funded
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button
                  asChild
                  variant="donate"
                  size="lg"
                  className="h-13 px-8 text-base shadow-lg"
                >
                  <Link href={`/donate?campaign=${featuredAppealContent.campaignSlug}`}>
                    <Heart className="w-5 h-5 mr-2 fill-[var(--navy-900)]" />
                    <span>Support This Appeal</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outlineGold"
                  size="lg"
                  className="h-13 px-6 text-white border-[var(--gold-500)] hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)]"
                >
                  <Link href={`/campaigns/${featuredAppealContent.campaignSlug}`}>
                    <span>View Appeal Story</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* 80G Tax Exemption Note */}
              <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[var(--gold-500)] shrink-0" />
                <span>Instant 80G receipt issued for 50% income tax deduction</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
