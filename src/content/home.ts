import { HomeSectionKey } from "@/types";

/**
 * Ordered array of section keys defining Home page layout.
 * Reordering, removing, or inserting a section is a simple one-line modification here.
 */
export const homeSectionsOrder: HomeSectionKey[] = [
  "hero",
  "campaigns",
  "missionVision",
  "featuredAppeal",
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

export const featuredAppealContent = {
  eyebrow: "Flagship Humanitarian Appeal",
  title: "Guru Ka Langar: Nourishing 12,000 Lives Every Day",
  description:
    "No one should sleep hungry. In response to rising urban hardship, our daily community kitchens prepare wholesome vegetarian meals with warmth and respect for street workers, hospital patients, and elderly citizens.",
  image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
  goal: 5000000,
  raised: 3780000,
  donorsCount: 2450,
  campaignSlug: "langar-daily-wagers",
  badge: "High Priority Appeal",
};

export const adoptChildContent = {
  eyebrow: "Child Sponsorship Program",
  title: "Empower a Child's Future Through Education",
  description:
    "For just ₹1,500/month (₹50 a day), you can sponsor the complete schooling, uniforms, nutritious midday meals, and health checkups of an underprivileged child.",
  ctaText: "Sponsor a Child Today",
  ctaHref: "/adopt-a-child",
  image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
  perks: [
    "Full tuition & school stationery coverage",
    "Digital tablet for STEM learning",
    "Quarterly academic progress reports",
    "Tax deduction under Section 80G",
  ],
};
