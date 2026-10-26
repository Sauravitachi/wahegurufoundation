import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShareButtons } from "@/components/shared/ShareButtons";
import { blogPosts } from "@/content/posts";
import { formatDate } from "@/lib/formatters";
import { constructMetadata } from "@/lib/metadata";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Waheguru Foundation`,
    description: post.excerpt,
    image: post.coverImage,
    pathname: `/blog/${post.slug}`,
  });
}

function renderFormattedInline(text: string): React.ReactNode {
  // Matches **bold** or *italic*
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, index) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[var(--navy-900)]">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <em key={index} className="italic text-[var(--navy-800)]">
          {token.slice(1, -1)}
        </em>
      );
    }
    return token;
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Pick up to 3 related posts based on matching tags or fallback to others
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => post.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => post.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, 3);

  return (
    <>
      {/* Banner */}
      <section className="bg-[var(--navy-900)] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/40 to-transparent pointer-events-none" />
        <Container className="max-w-4xl relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold-300)] hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Chronicles</span>
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="gold">{tag}</Badge>
            ))}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[var(--gold-500)]">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{post.author.name}</p>
                <p className="text-[11px] text-gray-400">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[var(--gold-300)]" />
                <span>{formatDate(post.date)}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[var(--gold-300)]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Post Article Body */}
      <Section variant="bg" spacing="lg">
        <Container className="max-w-4xl">
          {/* Cover Image */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl mb-10 border border-[var(--border)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Social Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-10">
            <span className="text-xs font-semibold text-[var(--navy-900)]">
              Share this chronicle with your network:
            </span>
            <ShareButtons title={post.title} />
          </div>

          {/* Rendered Prose Content */}
          <article className="prose prose-lg max-w-none text-[var(--text)] leading-relaxed space-y-6">
            <div className="rounded-2xl bg-amber-50/60 border-l-4 border-[var(--gold-500)] p-6 my-8">
              <p className="text-lg sm:text-xl font-serif text-[var(--navy-900)] leading-relaxed italic m-0">
                &ldquo;{post.excerpt}&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[var(--text)] font-light leading-relaxed">
              {post.content.split("\n\n").map((para, i) => {
                const trimmed = para.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith("###")) {
                  return (
                    <h3
                      key={i}
                      className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] pt-6 pb-1 border-b border-[var(--border)]/70"
                    >
                      {trimmed.replace(/^###\s*/, "")}
                    </h3>
                  );
                }

                if (trimmed.startsWith("##")) {
                  return (
                    <h2
                      key={i}
                      className="font-serif text-3xl sm:text-4xl font-bold text-[var(--navy-900)] pt-8 pb-2"
                    >
                      {trimmed.replace(/^##\s*/, "")}
                    </h2>
                  );
                }

                if (trimmed.startsWith(">")) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-[var(--gold-500)] pl-6 py-4 italic text-[var(--navy-900)] font-serif text-lg sm:text-xl bg-[var(--surface)] rounded-r-2xl my-6"
                    >
                      {renderFormattedInline(
                        trimmed.replace(/^>\s*/, "").replace(/^"/, "").replace(/"$/, "")
                      )}
                    </blockquote>
                  );
                }

                if (trimmed.startsWith("1.") || trimmed.startsWith("-")) {
                  return (
                    <div key={i} className="my-5 space-y-3 pl-1">
                      {trimmed.split("\n").map((item, idx) => {
                        const cleaned = item.replace(/^(\d+\.|\-)\s*/, "");
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-base sm:text-lg text-[var(--text)]"
                          >
                            <span className="w-2 h-2 rounded-full bg-[var(--gold-600)] mt-2.5 shrink-0" />
                            <span className="leading-relaxed">{renderFormattedInline(cleaned)}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <p key={i} className="text-base sm:text-lg text-[var(--text)] font-normal leading-relaxed">
                    {renderFormattedInline(trimmed)}
                  </p>
                );
              })}
            </div>
          </article>

          {/* Author Bio Box */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[var(--border)] flex items-center gap-5 shadow-xs">
            <div className="relative h-16 w-16 rounded-full overflow-hidden shrink-0 border-2 border-[var(--gold-500)]">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold-600)]">
                About the Author
              </span>
              <h4 className="font-serif text-lg font-bold text-[var(--navy-900)]">
                {post.author.name}
              </h4>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                {post.author.role} • Waheguru Foundation Seva Mission
              </p>
            </div>
          </div>

          {/* Donation Callout at Bottom of Story */}
          <div className="mt-12 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Support This Cause
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
                Help Us Write More Stories of Upliftment
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Your tax-exempt contribution under 80G powers real field dispensaries, schools, and langar kitchens.
              </p>
            </div>
            <Button asChild variant="donate" size="lg" className="shrink-0">
              <Link href="/donate">
                <Heart className="w-4 h-4 mr-2 fill-[var(--navy-900)]" />
                <span>Donate with 80G</span>
              </Link>
            </Button>
          </div>

          {/* Related Stories */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-10 border-t border-[var(--border)] space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
                  More Humanitarian Chronicles
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-[var(--gold-600)] hover:underline"
                >
                  View All ({blogPosts.length})
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--gold-500)] transition-all hover:-translate-y-0.5 shadow-2xs group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--gold-600)]">
                        {rPost.tags[0]}
                      </span>
                      <h4 className="font-serif text-base font-bold text-[var(--navy-900)] group-hover:text-[var(--gold-600)] transition-colors mt-1 mb-2 line-clamp-2">
                        {rPost.title}
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-4">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[var(--navy-700)] group-hover:text-[var(--gold-600)] transition-colors">
                      Read story →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
