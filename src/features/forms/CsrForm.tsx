"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { csrSchema, CsrFormData } from "./schemas";

export function CsrForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CsrFormData>({
    resolver: zodResolver(csrSchema),
    defaultValues: {
      projectInterest: "Village Solar Water Plants",
      budgetRange: "₹15 Lakhs – ₹50 Lakhs",
      honeypot: "",
    },
  });

  const onSubmit = async (data: CsrFormData) => {
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.contactPerson} (${data.companyName})`,
          email: data.workEmail,
          phone: data.phone,
          subject: `CSR Partnership Enquiry: ${data.projectInterest} [${data.budgetRange}]`,
          message: data.message,
          honeypot: data.honeypot,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to submit CSR enquiry");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(message);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-300 p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="font-serif text-2xl font-bold text-emerald-950">
          CSR Partnership Request Received
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Our Institutional Partnerships Director will contact you within 24 hours with custom project dossiers, audit certifications, and Schedule VII compliance documentation.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-4"
        >
          Submit Another Proposal
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="companyName">Enterprise / Corporation Name *</Label>
          <Input
            id="companyName"
            placeholder="e.g. Acme Tech Solutions Ltd."
            {...register("companyName")}
            aria-invalid={errors.companyName ? "true" : "false"}
          />
          {errors.companyName && (
            <p className="text-xs text-rose-600">{errors.companyName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="contactPerson">CSR Lead / Contact Person *</Label>
          <Input
            id="contactPerson"
            placeholder="e.g. Rajesh Mehra"
            {...register("contactPerson")}
            aria-invalid={errors.contactPerson ? "true" : "false"}
          />
          {errors.contactPerson && (
            <p className="text-xs text-rose-600">{errors.contactPerson.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="workEmail">Work / Official Email *</Label>
          <Input
            id="workEmail"
            type="email"
            placeholder="csr@company.com"
            {...register("workEmail")}
            aria-invalid={errors.workEmail ? "true" : "false"}
          />
          {errors.workEmail && (
            <p className="text-xs text-rose-600">{errors.workEmail.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Official Contact Number *</Label>
          <Input
            id="phone"
            placeholder="+91 98765 43210"
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
          />
          {errors.phone && (
            <p className="text-xs text-rose-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="projectInterest">Intervention Category *</Label>
          <select
            id="projectInterest"
            {...register("projectInterest")}
            className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
          >
            <option value="Village Solar Water Plants">Village Solar Water Plants</option>
            <option value="Rural Digital Classroom Adoptions">Rural Digital Classroom Adoptions</option>
            <option value="Mobile Health Dispensaries">Mobile Health Dispensaries</option>
            <option value="Community Langar Hub Partnerships">Community Langar Hub Partnerships</option>
            <option value="Custom CSR Intervention">Custom CSR Intervention</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="budgetRange">Estimated CSR Grant Range *</Label>
          <select
            id="budgetRange"
            {...register("budgetRange")}
            className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
          >
            <option value="₹5 Lakhs – ₹15 Lakhs">₹5 Lakhs – ₹15 Lakhs</option>
            <option value="₹15 Lakhs – ₹50 Lakhs">₹15 Lakhs – ₹50 Lakhs</option>
            <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
            <option value="₹1 Crore+">₹1 Crore+</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Partnership Vision &amp; Target Geography *</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Please describe your company's CSR priorities, preferred states or districts, and target timelines..."
          {...register("message")}
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-xs text-rose-600">{errors.message.message}</p>
        )}
      </div>

      {errorMsg && (
        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        variant="default"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto h-12 px-8 font-bold"
      >
        {isSubmitting ? (
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <Building2 className="w-4 h-4 mr-2" />
        )}
        <span>Submit CSR Enquiry</span>
      </Button>
    </form>
  );
}
