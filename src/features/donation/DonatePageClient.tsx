"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { DonationForm } from "@/features/donation";
import { siteConfig } from "@/config/site";

export function DonatePageClient() {
  const searchParams = useSearchParams();
  const initialCampaign = searchParams.get("campaign") || "general-seva";
  const initialAmount = searchParams.get("amount")
    ? parseInt(searchParams.get("amount")!, 10)
    : 1000;
  const initialFrequency: "one-time" | "monthly" =
    searchParams.get("frequency") === "monthly" ? "monthly" : "one-time";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Form Card */}
      <div className="lg:col-span-7 rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 shadow-sm">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)] block mb-1">
            Secure Seva Contribution
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)]">
            Empower a Life with Dignity
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            Choose your contribution amount and allocate to your chosen humanitarian cause.
          </p>
        </div>

        <DonationForm
          initialCampaign={initialCampaign}
          initialAmount={initialAmount}
          initialFrequency={initialFrequency}
        />
      </div>

      {/* Right Trust & 80G Explanation Side Panel */}
      <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
        <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[var(--gold-100)] border border-[var(--gold-300)] flex items-center justify-center text-[var(--gold-600)] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
             
              <p className="text-xs text-[var(--text-muted)]">
                Recognized by Income Tax Department of India
              </p>
            </div>
          </div>

          <p className="text-xs text-[var(--navy-900)] leading-relaxed">
            {siteConfig.legal.taxBenefitNote}
          </p>

          <div className="pt-2 text-xs space-y-1.5 border-t border-[var(--border)] text-[var(--text-muted)]">
            <p>
              <strong className="text-[var(--navy-900)]">PAN:</strong> {siteConfig.legal.pan}
            </p>
            <p>
              <strong className="text-[var(--navy-900)]">80G Reg:</strong> {siteConfig.legal.section80G}
            </p>
            <p>
              <strong className="text-[var(--navy-900)]">Trust Reg:</strong> {siteConfig.legal.trustRegistrationNo}
            </p>
          </div>
        </div>

        {/* Accountability & Transparency Guarantee */}
        <div className="rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-8 space-y-4 shadow-xs">
          <h3 className="font-serif text-lg font-bold text-[var(--navy-900)] flex items-center gap-2">
            <Award className="w-5 h-5 text-[var(--gold-600)]" />
            <span>Our Seva Pledge to You</span>
          </h3>
          <ul className="space-y-2.5 text-xs text-[var(--navy-900)]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Over 92% of funds go straight into direct programmatic food, medicine, and tuition costs.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Instant digitally signed 80G receipt emailed within seconds of transaction.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Annual Form 10BD filing ensures seamless automated tax portal pre-fill.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
