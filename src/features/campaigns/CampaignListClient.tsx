"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ArrowRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Campaign, CampaignCategory } from "@/types";
import { formatCurrency } from "@/lib/formatters";

interface CampaignListClientProps {
  initialCampaigns: Campaign[];
}

const CATEGORIES: (CampaignCategory | "All")[] = [
  "All",
  "Hunger Relief",
  "Education",
  "Healthcare",
  "Environment",
  "Disaster Relief",
  "Livelihoods",
];

const STATUS_FILTERS = ["All", "Urgent Need", "Active"];

export function CampaignListClient({ initialCampaigns }: CampaignListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCampaigns = useMemo(() => {
    return initialCampaigns.filter((campaign) => {
      // Category filter
      if (selectedCategory !== "All" && campaign.category !== selectedCategory) {
        return false;
      }

      // Status filter
      if (selectedStatus === "Urgent Need" && campaign.status !== "urgent") {
        return false;
      }
      if (selectedStatus === "Active" && campaign.status === "completed") {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesTitle = campaign.title.toLowerCase().includes(query);
        const matchesSummary = campaign.summary.toLowerCase().includes(query);
        const matchesCategory = campaign.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSummary && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [initialCampaigns, selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="rounded-2xl bg-white border border-[var(--border)] p-4 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
            <Input
              type="text"
              placeholder="Search initiatives by title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>

          {/* Status Filter Buttons */}
          <div className="flex items-center gap-1.5 self-start md:self-auto overflow-x-auto pb-1 w-full md:w-auto">
            <span className="text-xs font-semibold text-[var(--text-muted)] mr-1 hidden sm:inline">
              Status:
            </span>
            {STATUS_FILTERS.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedStatus === status
                    ? "bg-[var(--navy-700)] text-white shadow-2xs"
                    : "bg-[var(--surface)] text-[var(--navy-900)] hover:bg-[var(--navy-100)]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="pt-2 border-t border-[var(--border)] flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-semibold text-[var(--text-muted)] mr-1 shrink-0">
            Categories:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-[var(--gold-500)] text-[var(--navy-900)] font-bold shadow-2xs"
                  : "bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--navy-900)] hover:bg-[var(--navy-100)] border border-[var(--border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Campaigns Grid */}
      {filteredCampaigns.length === 0 ? (
        <div className="rounded-2xl bg-white border border-[var(--border)] p-12 text-center max-w-md mx-auto">
          <p className="text-base font-bold text-[var(--navy-900)] mb-1">
            No matching initiatives found
          </p>
          <p className="text-xs text-[var(--text-muted)] mb-4">
            Try adjusting your search terms or category filters to see other active seva projects.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("All");
              setSelectedStatus("All");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.map((campaign) => {
            const percentage = Math.round((campaign.raised / campaign.goal) * 100);

            return (
              <div
                key={campaign.id}
                className="group flex flex-col rounded-2xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
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
      )}
    </div>
  );
}
