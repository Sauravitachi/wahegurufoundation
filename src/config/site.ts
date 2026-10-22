/**
 * Single source of truth for site-wide metadata, brand identity,
 * legal registration details, tax-exemption clauses, and contact info.
 */

export const siteConfig = {
  name: "Waheguru Foundation",
  shortName: "WF",
  slogan: "Dedicated to Seva, Compassion & Sarbat Da Bhala",
  tagline: "Empowering underserved communities through education, healthcare, nutrition, and emergency humanitarian relief.",
  gurmukhiWordmark: "ਵਾਹਿਗੁਰੂ",
  gurmukhiMotto: "ੴ • ਸਰਬੱਤ ਦਾ ਭਲਾ",
  description:
    "Waheguru Foundation is a non-profit humanitarian organization inspired by Sikh values of selfless service (seva) and the universal welfare of all (Sarbat Da Bhala).",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wahegurufoundation.org",
  ogImage: "/brand/og-image.jpg",
  
  // Flag indicating placeholder/demo data for development and preview
  isDemoData: process.env.NEXT_PUBLIC_DEMO_DATA === "true" || process.env.NODE_ENV !== "production",
  demoNotice: "Preview Environment: Content, statistics, and person details are illustrative placeholders.",

  contact: {
    email: "contact@wahegurufoundation.org",
    donationsEmail: "donate@wahegurufoundation.org",
    phone: "+91 7986262556",
    tollFree: "1800-123-SEVA (7382)",
    whatsapp: "+91 98765 43210",
    address: {
      street: "Mohali IT City",
      district: "Mohali",
      city: "Mohali",
      state: "Punjab",
      postalCode: "160062",
      country: "India",
    },
    workingHours: "Mon – Sat: 9:00 AM – 6:00 PM IST",
  },

  social: {
    facebook: "https://facebook.com/wahegurufoundation",
    twitter: "https://twitter.com/wahegurufdn",
    instagram: "https://instagram.com/wahegurufoundation",
    youtube: "https://youtube.com/@wahegurufoundation",
    linkedin: "https://linkedin.com/company/waheguru-foundation",
  },

  legal: {
    registeredName: "Waheguru Humanitarian Foundation Trust",
    trustRegistrationNo: "DIC/OL/SOCIETIES/9143",
    darpanId: "DL/2021/0298411",
    section80G: "CIT(E)/DELHI/80G/2021-22/AABTW1234F/01",
    section12A: "CIT(E)/DELHI/12A/2021-22/AABTW1234F/02",
    pan: "AABTW1234F",
    taxBenefitNote: "Donations to Waheguru Foundation are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act. receipt issued with Form 10BE filing.",
    fcraStatus: "Applied / Pending Renewal",
    auditors: "M/s K. Singh & Associates, Chartered Accountants",
  },

  seo: {
    titleTemplate: "%s | Waheguru Foundation",
    defaultTitle: "Waheguru Foundation | Humanitarian Aid, Education & Seva",
    keywords: [
      "Waheguru Foundation",
      "NGO India",
      "Charity",
      "Seva",
      "Langar food relief",
      "Child education sponsorship",
      "Humanitarian aid",
      "Sarbat Da Bhala",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
