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
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    pathname: `/blog/${post.slug}`,
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Banner */}
      <section className="bg-[var(--navy-900)] text-white py-12 md:py-16 relative">
        <Container className="max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--gold-300)] hover:underline mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
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

          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-300 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="relative h-9 w-9 rounded-full overflow-hidden border border-[var(--gold-500)]">
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

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[var(--gold-300)]" />
                <span>{formatDate(post.date)}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
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
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg mb-10">
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
          <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)] mb-10">
            <span className="text-xs font-semibold text-[var(--navy-900)]">
              Share this story with friends and family:
            </span>
            <ShareButtons title={post.title} />
          </div>

          {/* Rendered Prose Content */}
          <div className="prose prose-lg max-w-none text-[var(--text)] leading-relaxed space-y-6">
            <p className="text-xl sm:text-2xl font-serif text-[var(--navy-900)] leading-relaxed italic border-l-4 border-[var(--gold-500)] pl-6 my-8">
              &ldquo;{post.excerpt}&rdquo;
            </p>

            <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
              {post.content.split("\n\n").map((para, i) => {
                const trimmed = para.trim();
                if (trimmed.startsWith("###")) {
                  return (
                    <h3
                      key={i}
                      className="font-serif text-2xl font-bold text-[var(--navy-900)] mt-8 mb-3"
                    >
                      {trimmed.replace(/^###\s*/, "")}
                    </h3>
                  );
                }
                if (trimmed.startsWith(">")) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-4 border-[var(--gold-500)] pl-4 py-2 italic text-[var(--navy-900)] font-serif text-lg bg-[var(--surface)] rounded-r-xl"
                    >
                      {trimmed.replace(/^>\s*/, "").replace(/^"/, "").replace(/"$/, "")}
                    </blockquote>
                  );
                }
                if (trimmed.startsWith("1.") || trimmed.startsWith("-")) {
                  return (
                    <div key={i} className="pl-4 py-2 space-y-2 text-base text-[var(--navy-900)]">
                      {trimmed.split("\n").map((item, idx) => (
                        <p key={idx}>{item.replace(/^(\d+\.|\-)\s*/, "• ")}</p>
                      ))}
                    </div>
                  );
                }
                return <p key={i}>{trimmed}</p>;
              })}
            </div>
          </div>

          {/* Donation Callout at Bottom of Story */}
          <div className="mt-14 p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                Join Our Mission
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
                Help Us Write More Stories of Upliftment
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Every rupee powers real food kitchens, medicine dispensaries, and school supplies.
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
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)]">
                More Stories from the Field
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.slug}
                    href={`/blog/${rPost.slug}`}
                    className="p-5 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--gold-500)] transition-colors shadow-2xs group"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-600)]">
                      {rPost.tags[0]}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[var(--navy-900)] group-hover:text-[var(--gold-600)] transition-colors mt-1 mb-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                      {rPost.excerpt}
                    </p>
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
