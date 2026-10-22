"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import {
  CheckCircle2,
  ShieldCheck,
  Home,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formatters";
import { siteConfig } from "@/config/site";

export function ThankYouClient() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "WF-ONLINE-DONATION";
  const amountStr = searchParams.get("amount") || "1000";
  const amount = parseInt(amountStr, 10) || 1000;
  const donorName = searchParams.get("name") || "Compassionate Donor";
  const receiptNumber = searchParams.get("receipt") || "WF-80G-ACKNOWLEDGEMENT";

  useEffect(() => {
    // Trigger celebratory gold and navy confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D0AC60", "#EED181", "#1F416F", "#162F52"],
      });
    } catch {
      // Fallback
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto rounded-3xl bg-white border border-[var(--border)] p-8 sm:p-12 shadow-lg text-center space-y-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)] block mb-1">
          ੴ • SEVA CONFIRMED WITH HUMILITY
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--navy-900)]">
          Thank You, {donorName}!
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)] mt-2 leading-relaxed">
          Your noble contribution of{" "}
          <strong className="text-[var(--gold-600)] font-bold text-lg">
            {formatCurrency(amount)}
          </strong>{" "}
          has been safely received and allocated to our field humanitarian operations.
        </p>
      </div>

      {/* Receipt Box */}
      <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-6 text-left space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <span className="text-xs text-[var(--text-muted)]">Receipt Number</span>
          <span className="font-mono text-xs font-bold text-[var(--navy-900)]">
            {receiptNumber}
          </span>
        </div>
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <span className="text-xs text-[var(--text-muted)]">Order Reference</span>
          <span className="font-mono text-xs text-[var(--navy-900)]">{orderId}</span>
        </div>
        <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
          <span className="text-xs text-[var(--text-muted)]">Tax Exemption</span>
          <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Eligible for 50% under 80G</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)]">NGO PAN</span>
          <span className="font-mono text-xs font-semibold text-[var(--navy-900)]">
            {siteConfig.legal.pan}
          </span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 text-left leading-relaxed">
        <p className="font-semibold mb-0.5">80G Certificate Email Dispatch:</p>
        <p>
          A formal digitally signed Section 80G tax receipt and Form 10BE certificate copy has been dispatched to your email address. You will also find this reflected under your AIS upon annual tax filing.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            <span>Return to Homepage</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link href="/campaigns">
            <span>Explore Other Seva Causes</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
