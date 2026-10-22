"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, CheckCircle2, ArrowRight, Loader2, Shield } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  honeypot: z.string().max(0, "Bot detected"),
});

type NewsletterInput = z.infer<typeof newsletterSchema>;

export function Newsletter() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", honeypot: "" },
  });

  const onSubmit = async (data: NewsletterInput) => {
    setServerError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to subscribe");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setServerError(message);
    }
  };

  return (
    <section className="bg-[var(--navy-900)] text-white py-16 md:py-20 border-t border-[var(--navy-700)] relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-[var(--navy-700)]/40 to-transparent pointer-events-none" />
      <Container className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-500)]/15 border border-[var(--gold-500)]/30 text-[var(--gold-300)] text-xs font-semibold uppercase tracking-wider mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>Stay Connected with Field Seva</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Receive Our Monthly Seva &amp; Impact Chronicle
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Get transparent monthly audits, inspiring stories of girl scholars, and early notices of emergency disaster relief mobilizations directly in your inbox.
        </p>

        {isSuccess ? (
          <div className="bg-emerald-950/80 border border-emerald-500/40 rounded-2xl p-6 max-w-lg mx-auto flex items-center justify-center gap-3 text-emerald-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div className="text-left text-sm">
              <p className="font-bold text-white">Thank you for subscribing!</p>
              <p className="text-xs text-emerald-300">
                You will receive our next monthly transparency bulletin.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-3"
            noValidate
          >
            {/* Honeypot field for bot protection */}
            <input
              type="text"
              {...register("honeypot")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 text-left">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus-visible:ring-[var(--gold-500)] focus-visible:border-[var(--gold-500)] h-12 rounded-xl"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-xs text-rose-300 mt-1 pl-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="donate"
                disabled={isSubmitting}
                className="h-12 px-6 rounded-xl font-bold shrink-0"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </>
                )}
              </Button>
            </div>

            {serverError && (
              <p className="text-xs text-rose-300 mt-1">{serverError}</p>
            )}

            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 pt-2">
              <Shield className="w-3.5 h-3.5 text-[var(--gold-500)]" />
              <span>We respect your inbox. Unsubscribe anytime with one click. Zero spam.</span>
            </div>
          </form>
        )}
      </Container>
    </section>
  );
}
