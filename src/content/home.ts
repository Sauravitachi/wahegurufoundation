import { HomeSectionKey } from "@/types";

/**
 * Ordered array of section keys defining Home page layout.
 * Reordering, removing, or inserting a section is a simple one-line modification here.
 */
export const homeSectionsOrder: HomeSectionKey[] = [
  "hero",
  "campaigns",
  "missionVision",
  "ourImpactMap",
  "focusAreas",
  "advisoryBoard",
  "howYouCanHelp",
  "howWeWork",
  "testimonials",
  "galleryPreview",
  "latestStories",
  "faq",
];

export const heroContent = {
  eyebrow: "ੴ • ਸਰਬੱਤ ਦਾ ਭਲਾ • SELFLESS SERVICE TO ALL",
  headline: "Lighting the Lamp of Seva, Compassion & Dignity",
  tagline:
    "An Indian humanitarian foundation inspired by Sikh values of selfless seva. Uplifting underserved lives through hot langar meals, rural girl scholarships, and doorstep healthcare.",
  primaryCtaText: "Donate",
  primaryCtaHref: "/donate",
  secondaryCtaText: "Explore Our Work",
  secondaryCtaHref: "/campaigns",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  statsBadge: {
    number: "3.8M+",
    label: "Langar Meals Served with Dignity",
  },
  backgroundImage:
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
};