"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, User, X } from "lucide-react";
import { BlogPost } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/formatters";

interface BlogFilterViewProps {
  posts: BlogPost[];
}

const CATEGORY_FILTERS = [
  { id: "all", label: "All Topics" },
  { id: "education", label: "Education & Skills", matchTags: ["Education", "Skill Development"] },
  { id: "healthcare", label: "Healthcare & Sanitation", matchTags: ["Healthcare", "Sanitation", "Public Health"] },
  { id: "women", label: "Women & Child Welfare", matchTags: ["Women Empowerment", "Child Welfare"] },
  { id: "environment", label: "Environment & Climate", matchTags: ["Environment", "Sustainability", "Clean Water"] },
  { id: "rural", label: "Rural Development", matchTags: ["Rural Development", "Community Building", "Agriculture"] },
  { id: "justice", label: "Social Justice & Rights", matchTags: ["Social Justice", "Human Rights", "Disability Welfare"] },
  { id: "sports", label: "Sports & Youth", matchTags: ["Sports", "Culture", "Youth Empowerment"] },
  { id: "disaster", label: "Disaster Relief", matchTags: ["Disaster Relief", "Emergency Response", "Humanitarian Aid"] },
  { id: "collaboration", label: "Strategic Collaboration", matchTags: ["Strategic Collaboration", "CSR Partnerships", "Governance"] },
];

export function BlogFilterView({ posts }: BlogFilterViewProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category filter check
      let matchesCategory = true;
      if (activeCategory !== "all") {
        const activeFilter = CATEGORY_FILTERS.find((c) => c.id === activeCategory);
        if (activeFilter && activeFilter.matchTags) {
          matchesCategory = post.tags.some((tag) =>
            activeFilter.matchTags?.some((m) => tag.toLowerCase().includes(m.toLowerCase()))
          );
        }
      }

      // Search query check
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        matchesSearch =
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q)) ||
          post.author.name.toLowerCase().includes(q);
      }

      return matchesCategory && matchesSearch;
    });
  }, [posts, activeCategory, searchQuery]);

  // Featured post is the first post when in "all" view and no search query
  const isDefaultView = activeCategory === "all" && !searchQuery.trim();
  const featuredPost = isDefaultView ? filteredPosts[0] : null;
  const gridPosts = isDefaultView ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="space-y-10">
      {/* Search Bar & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[var(--border)] shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by topic, keyword, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2 rounded-xl bg-gray-50 border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] text-[var(--navy-900)] placeholder:text-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-xs font-medium text-[var(--text-muted)] self-end md:self-center">
          Showing <span className="font-bold text-[var(--navy-900)]">{filteredPosts.length}</span>{" "}
          chronicles
        </div>
      </div>

      {/* Category Pills (Scrollable on small screens) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_FILTERS.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-[var(--navy-800)] text-white shadow-xs"
                  : "bg-white border border-[var(--border)] text-[var(--navy-800)] hover:border-[var(--gold-500)] hover:text-[var(--gold-700)]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Featured Post Card (shown on default view) */}
      {featuredPost && (
        <div className="rounded-3xl bg-white border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full w-full min-h-[340px] overflow-hidden">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute top-4 left-4">
                <Badge variant="urgent" className="text-xs tracking-wider uppercase">
                  Featured Pillar
                </Badge>
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((t) => (
                  <Badge key={t} variant="gold">
                    {t}
                  </Badge>
                ))}
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] leading-tight hover:text-[var(--gold-600)] transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
              </h2>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] pt-2">
                <span className="flex items-center gap-1.5 font-semibold text-[var(--navy-900)]">
                  <User className="w-3.5 h-3.5 text-[var(--gold-600)]" />
                  <span>{featuredPost.author.name}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--navy-600)]" />
                  <span>{featuredPost.readTime}</span>
                </span>
              </div>

              <div className="pt-4 border-t border-[var(--border)]">
                <Button asChild variant="default" size="default">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <span>Read Full Chronicle</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Posts */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl bg-white border border-[var(--border)] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="gold" className="text-[10px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--gold-600)]" />
                      <span>{formatDate(post.date)}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--navy-600)]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[var(--navy-900)] leading-snug group-hover:text-[var(--gold-600)] transition-colors mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border)]/70 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[var(--navy-800)]">
                    By {post.author.name}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--navy-700)] group-hover:text-[var(--gold-600)] transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-[var(--border)] p-8">
          <p className="text-lg font-serif font-bold text-[var(--navy-900)] mb-2">
            No chronicles found matching your filter
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-6">
            Try adjusting your search keywords or switching category filters.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
