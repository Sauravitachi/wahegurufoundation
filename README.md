# Waheguru Foundation — NGO / Charity Web Platform

Production-ready, highly accessible, clean, and scalable web platform for **Waheguru Foundation**, a humanitarian non-profit organization inspired by Sikh values of selfless service (*seva*) and universal welfare (*Sarbat Da Bhala*).

Built with **Next.js 15+ (App Router)**, **TypeScript (strict mode)**, **Tailwind CSS v4**, **Framer Motion**, **React Hook Form + Zod**, and a provider-agnostic donation architecture with **Razorpay** adapter.

---

## Brand Design Tokens & Colors

The visual design system is derived from the brand logo (gold gradient and deep navy blue, featuring an Ik Onkar, open hands, flame, and khanda).

- **Primary Navy:** `#1F416F` (`--navy-700`)
- **Accent Gold:** `#D0AC60` (`--gold-500`)
- **Background:** `#FFFDF8` (`--bg`)
- **Surface:** `#F8F3E8` (`--surface`)
- **Donate Button:** Exclusively styled with `--gradient-gold` (135deg from `#EED181` to `#B08A45`)
- **Typography:** Playfair Display (Headings), Plus Jakarta Sans (Body), Noto Sans Gurmukhi (Sacred Gurmukhi wordmarks)

---

## Architecture Overview

```
src/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx                      # Data-driven Home composition
│  │  ├─ about/page.tsx                # Story, advisory, 80G transparency
│  │  ├─ focus-areas/[slug]/page.tsx   # Dynamic focus area details
│  │  ├─ campaigns/page.tsx            # Filterable list + search
│  │  ├─ campaigns/[slug]/page.tsx     # Dynamic campaign story & sticky donation
│  │  ├─ adopt-a-child/page.tsx        # Child sponsorship plans & FAQ
│  │  ├─ impact/page.tsx               # Big counters & state-wise reach
│  │  ├─ gallery/page.tsx              # Categorized photo archive & lightbox
│  │  ├─ blog/page.tsx                 # Field stories & dispatches
│  │  ├─ blog/[slug]/page.tsx          # Dynamic blog post detail
│  │  ├─ csr/page.tsx                  # Corporate partnerships & inquiry form
│  │  ├─ volunteer/page.tsx            # Sevadar registration
│  │  └─ contact/page.tsx              # Contact info & message form
│  ├─ donate/page.tsx                  # Secure donation portal with 80G tax benefit
│  ├─ donate/thank-you/page.tsx        # Confetti celebration & 80G receipt notice
│  ├─ api/
│  │  ├─ donate/create-order/route.ts  # Provider-agnostic order initiation
│  │  ├─ donate/verify/route.ts        # HMAC signature verification
│  │  ├─ contact/route.ts              # Rate-limited inquiry handler
│  │  ├─ newsletter/route.ts           # Rate-limited newsletter signup
│  │  └─ volunteer/route.ts            # Rate-limited volunteer signup
│  ├─ privacy-policy/page.tsx
│  ├─ terms/page.tsx
│  ├─ layout.tsx                       # Root layout with fonts, JSON-LD, skip link
│  ├─ not-found.tsx
│  ├─ error.tsx
│  ├─ loading.tsx
│  ├─ sitemap.ts
│  └─ robots.ts
├─ components/
│  ├─ ui/        # Accessible primitives (Button, Card, Badge, SectionHeading, etc.)
│  ├─ layout/    # TopBar, Header, MobileNav, Footer, Container, Section
│  ├─ sections/  # Hero, StatsCounter, CampaignGrid, FocusAreas, FeaturedAppeal, etc.
│  └─ shared/    # CountUp, Carousel, VideoModal, Lightbox, ShareButtons, Marquee
├─ features/
│  ├─ donation/  # DonationForm, AmountSelector, providers/(razorpay, mock, factory)
│  ├─ campaigns/ # CampaignListClient
│  ├─ gallery/   # GalleryClient
│  └─ forms/     # ContactForm, VolunteerForm, CsrForm, schemas
├─ content/      # ALL editable text and data (typed)
│  ├─ campaigns.ts
│  ├─ focus-areas.ts
│  ├─ stats.ts
│  ├─ testimonials.ts
│  ├─ advisors.ts
│  ├─ partners.ts
│  ├─ faq.ts
│  ├─ home.ts
│  └─ posts.ts
├─ config/
│  ├─ site.ts       # Single source of truth for name, contacts, 80G details
│  ├─ navigation.ts # Header & footer link hierarchies
│  ├─ seo.ts        # OpenGraph, Twitter, metadata defaults
│  └─ theme.ts      # Colors & animation constants
├─ lib/          # utils, env, formatters, metadata, rate-limit
├─ types/        # Strongly-typed domain models
└─ styles/globals.css
```

---

## Quick Start

### 1. Prerequisites
- Node.js 18.18+ (tested on Node v24)
- `pnpm` 9+ / 12+

### 2. Installation
```bash
pnpm install
```

### 3. Environment Setup
Copy the example environment configuration:
```bash
cp .env.example .env.local
```

### 4. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Scripts & Quality Checks

| Command | Purpose |
| :--- | :--- |
| `pnpm dev` | Starts local Next.js development server |
| `pnpm typecheck` | Strict TypeScript validation (`tsc --noEmit`) |
| `pnpm test` | Runs Vitest unit test suite (formatters, donation schemas, rate-limiting) |
| `pnpm test:watch` | Runs Vitest in interactive watch mode |
| `pnpm test:e2e` | Runs Playwright smoke tests (homepage loads, donation validation) |
| `pnpm build` | Compiles production Next.js application bundle |
| `pnpm start` | Runs compiled production build locally |

---

## Single Source of Truth

To change the NGO name, contact phone, email, address, or 80G registration number, edit **exactly one file**:
[`src/config/site.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/config/site.ts)

To reorder or remove sections from the Homepage, edit **exactly one file**:
[`src/content/home.ts`](file:///home/saurav-itachi/Desktop/wahegurufoundation/src/content/home.ts)

For detailed developer guides, see [`ARCHITECTURE.md`](file:///home/saurav-itachi/Desktop/wahegurufoundation/ARCHITECTURE.md).
