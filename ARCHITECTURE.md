# Architecture Guide — Waheguru Foundation

This document outlines the codebase architecture, design system principles, and clear step-by-step guides for extending the platform without breaking existing interfaces.

---

## 1. Principles of Architecture

1. **One Source of Truth**: Site metadata, phone numbers, email addresses, legal registrations, and 80G tax clauses live in [`src/config/site.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/config/site.ts). Modifying this single file updates the entire site.
2. **Data-Driven Home Composition**: The home page layout is declared as an ordered array of keys in [`src/content/home.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/home.ts). Reordering or disabling a section requires modifying exactly one array line.
3. **Decoupled Content Layer**: All campaign text, stats, focus areas, testimonials, and FAQs live under [`src/content/`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/). Swapping this local layer for a headless CMS (Sanity, Strapi, Payload) requires changing only the data fetching layer in `src/content/`.
4. **Provider-Agnostic Payment Module**: The UI never communicates with Razorpay or other payment processors directly. All transactions go through the [`PaymentProvider`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/features/donation/providers/types.ts) interface via server route handlers.
5. **Brand Design System**: Defined strictly in [`src/styles/globals.css`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/styles/globals.css) via CSS custom properties. Components use semantic tokens like `var(--primary)`, `var(--accent)`, `var(--surface)`.

---

## 2. How to Add a New Campaign

1. Open [`src/content/campaigns.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/campaigns.ts).
2. Append a new object conforming to the `Campaign` interface:
   ```ts
   {
     id: "clean-energy-villages",
     slug: "clean-energy-villages",
     title: "Solar Village Electrification Initiative",
     category: "Environment",
     summary: "Installing solar microgrids for un-electrified schools and clinics.",
     story: "Detailed narrative describing field challenges and solutions...",
     goal: 2500000,
     raised: 1200000,
     donorsCount: 430,
     image: "https://images.unsplash.com/...",
     status: "active",
     urgencyBadge: "New",
     isFeatured: false,
     taxBenefits: true,
     suggestedAmounts: [1000, 2500, 5000, 10000],
     updates: [
       {
         date: "2026-10-01",
         title: "First 10 Solar Pods Installed",
         description: "Completed installation across 2 village school compounds."
       }
     ]
   }
   ```
3. That is all! The dynamic route [`src/app/(marketing)/campaigns/[slug]/page.tsx`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/app/(marketing)/campaigns/[slug]/page.tsx), search filter in `/campaigns`, sitemap, and donation dropdown will automatically recognize the new campaign.

---

## 3. How to Add a New Section to the Home Page

1. Create your section component under `src/components/sections/MyNewSection.tsx`.
2. Export it in `src/components/sections/index.ts`.
3. Add a section key in `src/types/index.ts`:
   ```ts
   export type HomeSectionKey = ... | "myNewSection";
   ```
4. Register the component in [`src/app/(marketing)/page.tsx`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/app/(marketing)/page.tsx):
   ```ts
   const SECTION_COMPONENTS: Record<HomeSectionKey, React.ComponentType> = {
     ...
     myNewSection: MyNewSection,
   };
   ```
5. Place `"myNewSection"` in your desired sequence in `homeSectionsOrder` in [`src/content/home.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/home.ts).

---

## 4. How to Add a New Page

1. Under `src/app/(marketing)/`, create a new folder: `src/app/(marketing)/my-page/page.tsx`.
2. Add SEO metadata using the helper:
   ```tsx
   import { constructMetadata } from "@/lib/metadata";

   export const metadata = constructMetadata({
     title: "Page Title",
     description: "Page description...",
     pathname: "/my-page",
   });

   export default function MyPage() {
     return <main>...</main>;
   }
   ```
3. If navigation links are required, add the item to [`src/config/navigation.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/config/navigation.ts).
4. Add the route to `staticRoutes` in [`src/app/sitemap.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/app/sitemap.ts).

---

## 5. How to Add a New Blog Post

1. Open [`src/content/posts.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/posts.ts).
2. Append a post object:
   ```ts
   {
     slug: "solar-pump-milestone",
     title: "Empowering Rural Agriculture with Solar Pumps",
     excerpt: "How clean energy is reducing operating costs for smallholder farmers...",
     date: "2026-10-15",
     readTime: "4 min read",
     coverImage: "https://images.unsplash.com/...",
     tags: ["Environment", "Solar", "Livelihoods"],
     author: {
       name: "Harpreet Singh",
       role: "Field Seva Coordinator",
       avatar: "https://images.unsplash.com/..."
     },
     content: `### Heading 3 \n\n Story paragraphs here...`
   }
   ```
3. The blog list (`/blog`) and detail page (`/blog/[slug]`) immediately render it.

---

## 6. How to Add a New Payment Provider (e.g. Stripe, PayU)

1. Under [`src/features/donation/providers/`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/features/donation/providers/), create `stripe.ts`:
   ```ts
   import { PaymentProvider, DonationInput, OrderResult, VerifyResult } from "./types";

   export class StripeProvider implements PaymentProvider {
     public readonly name = "stripe";
     async createOrder(input: DonationInput): Promise<OrderResult> { ... }
     async verifyPayment(payload: unknown): Promise<VerifyResult> { ... }
   }
   ```
2. In [`src/features/donation/providers/factory.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/features/donation/providers/factory.ts), instantiate it when `env.PAYMENT_PROVIDER === "stripe"`.
3. Set `PAYMENT_PROVIDER=stripe` in your `.env.local`. Zero frontend UI changes required!
