import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/content/posts";
import { formatDate } from "@/lib/formatters";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Field Dispatches, Articles & Seva Chronicles",
  description:
    "Read in-depth field stories, operational insights, and humanitarian impact reports from Waheguru Foundation.",
  pathname: "/blog",
});

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            HUMANITARIAN CHRONICLES
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Stories of Hope, Seva &amp; Resilience
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Behind the scenes of our 24/7 community kitchens, rural digital classrooms, and flood relief flotillas.
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container>
          {/* Featured Post Card */}
          {featuredPost && (
            <div className="mb-16 rounded-3xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:h-full w-full min-h-[360px]">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="lg:col-span-5 p-8 sm:p-10 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((t) => (
                      <Badge key={t} variant="gold">{t}</Badge>
                    ))}
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] pt-2">
                    <span className="flex items-center gap-1 font-semibold text-[var(--navy-900)]">
                      <User className="w-3.5 h-3.5 text-[var(--gold-600)]" />
                      <span>{featuredPost.author.name}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
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

          {/* Grid of Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
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

                    <p className="text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed mb-6">
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
        </Container>
      </Section>
    </>
  );
}
