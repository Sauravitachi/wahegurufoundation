"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Heart,
  ShieldCheck,
  Lock,
  Loader2,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AmountSelector } from "./AmountSelector";
import { donationFormSchema, DonationFormData } from "./schema";
import { campaigns } from "@/content/campaigns";
import { siteConfig } from "@/config/site";
import { formatCurrency } from "@/lib/formatters";

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key?: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayResponse) => Promise<void>;
  modal: {
    ondismiss: () => void;
  };
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => { open: () => void };
  }
}

interface DonationFormProps {
  initialCampaign?: string;
  initialAmount?: number;
  initialFrequency?: "one-time" | "monthly";
}

export function DonationForm({
  initialCampaign = "general-seva",
  initialAmount = 1000,
  initialFrequency = "one-time",
}: DonationFormProps) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      amount: initialAmount,
      frequency: initialFrequency,
      campaignSlug: initialCampaign,
      isAnonymous: false,
      honeypot: "",
    },
  });

  const currentAmount = useWatch({ control, name: "amount" }) ?? 1000;
  const currentFrequency = useWatch({ control, name: "frequency" }) ?? "one-time";

  const onSubmit = async (data: DonationFormData) => {
    setErrorMsg(null);
    setIsProcessing(true);

    try {
      // 1. Create order on server (provider-agnostic)
      const orderRes = await fetch("/api/donate/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(orderData.message || "Failed to initialize donation order");
      }

      // 2. Handle provider checkout
      if (orderData.provider === "razorpay" && typeof window !== "undefined") {
        // Dynamically load Razorpay checkout script if not present
        if (!window.Razorpay) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Unable to load Razorpay payment gateway"));
            document.body.appendChild(script);
          });
        }

        const options: RazorpayOptions = {
          key: orderData.keyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: siteConfig.name,
          description: `Seva Contribution - ${data.frequency === "monthly" ? "Monthly" : "One-Time"}`,
          image: `${siteConfig.url}/brand/symbol.svg`,
          order_id: orderData.orderId,
          prefill: {
            name: data.donorName,
            email: data.donorEmail,
            contact: data.donorPhone,
          },
          theme: {
            color: "#1F416F", // Navy-700
          },
          handler: async (response: RazorpayResponse) => {
            // Verify payment on server with cryptographic signature check
            const verifyRes = await fetch("/api/donate/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...response,
                donorName: data.donorName,
                donorEmail: data.donorEmail,
                amount: data.amount,
                donorPan: data.donorPan,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.success) {
              router.push(
                `/donate/thank-you?orderId=${orderData.orderId}&amount=${data.amount}&name=${encodeURIComponent(
                  data.donorName
                )}&receipt=${verifyData.receiptNumber || ""}`
              );
            } else {
              setErrorMsg(verifyData.message || "Payment verification failed.");
              setIsProcessing(false);
            }
          },
          modal: {
            ondismiss: () => {
              setIsProcessing(false);
            },
          },
        };

        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        }
      } else {
        // Mock Provider / Demo fallback execution
        await fetch("/api/donate/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: orderData.orderId,
            transactionId: `mock_tx_${orderData.orderId}`,
            donorName: data.donorName,
            donorEmail: data.donorEmail,
            amount: data.amount,
          }),
        });

        router.push(
          `/donate/thank-you?orderId=${orderData.orderId}&amount=${data.amount}&name=${encodeURIComponent(
            data.donorName
          )}&receipt=WF-80G-DEMO`
        );
      }
    } catch (err: unknown) {
      console.error("Donation submission error:", err);
      const message = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setErrorMsg(message);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Bot protection honeypot */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Step 1: Amount Selection */}
      <div className="space-y-4">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--gold-600)] block">
          Step 1 • Select Contribution Amount
        </label>

        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <AmountSelector
              value={field.value}
              frequency={currentFrequency}
              onAmountChange={(val) => setValue("amount", val, { shouldValidate: true })}
              onFrequencyChange={(freq) => setValue("frequency", freq, { shouldValidate: true })}
            />
          )}
        />
        {errors.amount && (
          <p className="text-xs text-rose-600 font-semibold">{errors.amount.message}</p>
        )}
      </div>

      {/* Step 2: Campaign Selection */}
      <div className="space-y-2 pt-2 border-t border-[var(--border)]">
        <Label htmlFor="campaignSlug" className="text-xs font-bold uppercase tracking-wider text-[var(--navy-900)]">
          Allocate to Specific Initiative:
        </Label>
        <select
          id="campaignSlug"
          {...register("campaignSlug")}
          className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
        >
          <option value="general-seva">General Seva Fund (Where Most Needed)</option>
          <option value="child-sponsorship">Adopt a Child Education Fund</option>
          {campaigns.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </div>

      {/* Step 3: Donor Details */}
      <div className="space-y-4 pt-4 border-t border-[var(--border)]">
        <label className="text-xs font-bold uppercase tracking-wider text-[var(--gold-600)] block">
          Step 2 • Donor Information (For 80G Receipt)
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="donorName">Full Legal Name *</Label>
            <Input
              id="donorName"
              placeholder="e.g. Jaswinder Singh"
              {...register("donorName")}
              aria-invalid={errors.donorName ? "true" : "false"}
            />
            {errors.donorName && (
              <p className="text-xs text-rose-600">{errors.donorName.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="donorEmail">Email Address (For Tax Receipt) *</Label>
            <Input
              id="donorEmail"
              type="email"
              placeholder="you@domain.com"
              {...register("donorEmail")}
              aria-invalid={errors.donorEmail ? "true" : "false"}
            />
            {errors.donorEmail && (
              <p className="text-xs text-rose-600">{errors.donorEmail.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="donorPhone">Mobile / WhatsApp Number *</Label>
            <Input
              id="donorPhone"
              placeholder="+91 98765 43210"
              {...register("donorPhone")}
              aria-invalid={errors.donorPhone ? "true" : "false"}
            />
            {errors.donorPhone && (
              <p className="text-xs text-rose-600">{errors.donorPhone.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="donorPan">PAN Card (Optional for 80G)</Label>
              <span className="text-[11px] text-[var(--gold-600)] font-medium">50% Tax Exemption</span>
            </div>
            <Input
              id="donorPan"
              placeholder="ABCDE1234F"
              maxLength={10}
              className="uppercase tracking-wider"
              {...register("donorPan")}
              aria-invalid={errors.donorPan ? "true" : "false"}
            />
            {errors.donorPan && (
              <p className="text-xs text-rose-600">{errors.donorPan.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="donorAddress">Billing Address (Optional for 10BD Certificate)</Label>
          <Input
            id="donorAddress"
            placeholder="House/Street, City, State, PIN"
            {...register("donorAddress")}
          />
        </div>

        {/* Anonymous Checkbox */}
        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="isAnonymous"
            {...register("isAnonymous")}
            className="h-4 w-4 rounded border-[var(--border)] text-[var(--navy-700)] focus:ring-[var(--gold-500)]"
          />
          <label htmlFor="isAnonymous" className="text-xs text-[var(--text-muted)] cursor-pointer">
            Keep my contribution anonymous on public supporter listings
          </label>
        </div>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 leading-relaxed">
          {errorMsg}
        </div>
      )}

      {/* Primary Donate CTA Button */}
      <div className="space-y-4 pt-2">
        <Button
          type="submit"
          variant="donate"
          size="lg"
          disabled={isProcessing}
          className="w-full h-14 text-base sm:text-lg font-bold shadow-lg tracking-wide"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              <span>Connecting to Secure Seva Gateway...</span>
            </>
          ) : (
            <>
              <Heart className="w-5 h-5 mr-2 fill-[var(--navy-900)]" />
              <span>
                Proceed to Donate {formatCurrency(currentAmount)} ({currentFrequency === "monthly" ? "Monthly" : "One-Time"})
              </span>
            </>
          )}
        </Button>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center text-xs text-[var(--text-muted)]">
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--gold-600)]" />
            <span>80G Tax Exemption</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
            <FileCheck className="w-3.5 h-3.5 text-[var(--navy-700)]" />
            <span>Instant Digital Receipt</span>
          </div>
        </div>
      </div>
    </form>
  );
}
