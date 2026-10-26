import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/content/campaigns";
import { formatCurrency } from "@/lib/formatters";

interface CampaignGridProps {
  limit?: number;
  showHeading?: boolean;
}

export function CampaignGrid({ limit = 3, showHeading = true }: CampaignGridProps) {
  const displayedCampaigns = limit ? campaigns.slice(0, limit) : campaigns;

  return (
    <Section variant="bg" spacing="lg" id="campaigns">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Active Seva Initiatives"
            title="Urgent Causes Calling for Your Compassion"
            description="Every rupee donated is directly deployed towards field food kitchens, educational sponsorships, and doorstep medical care."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCampaigns.map((campaign) => {
            const percentage = Math.round((campaign.raised / campaign.goal) * 100);

            return (
              <div
                key={campaign.id}
                className="group flex flex-col rounded-2xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge variant="gold">{campaign.category}</Badge>
                    {campaign.urgencyBadge && (
                      <Badge variant="urgent">{campaign.urgencyBadge}</Badge>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[var(--navy-900)] leading-snug group-hover:text-[var(--navy-700)] transition-colors mb-3">
                      <Link href={`/campaigns/${campaign.slug}`}>
                        {campaign.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed mb-6">
                      {campaign.summary}
                    </p>
                  </div>

                  {/* Financials & Progress Bar */}
                  <div className="space-y-3 pt-4 border-t border-[var(--border)]/70">                    
                    <div className="pt-4 flex items-center gap-3">
                      <Button
                        asChild
                        variant="donate"
                        size="sm"
                        className="flex-1 text-center justify-center"
                      >
                        <Link href={`/donate?campaign=${campaign.slug}`}>
                          <Heart className="w-3.5 h-3.5 mr-1.5 fill-[var(--navy-900)]" />
                          <span>Donate</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Campaigns Link */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/campaigns">
              <span>View All Humanitarian Campaigns</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
