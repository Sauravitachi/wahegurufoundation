"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { volunteerSchema, VolunteerFormData } from "./schemas";

export function VolunteerForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerFormData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      skills: "Kitchen & Langar Seva",
      availability: "Weekends only",
      honeypot: "",
    },
  });

  const onSubmit = async (data: VolunteerFormData) => {
    setErrorMsg(null);
    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || "Failed to submit volunteer form");
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
          Waheguru Ji Ka Khalsa, Waheguru Ji Ki Fateh!
        </h3>
        <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
          Your sevadar pledge has been received. Our volunteer coordinator will connect with you via WhatsApp or phone with orientation details for upcoming drives in your city.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="mt-4"
        >
          Register Another Volunteer
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
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            placeholder="e.g. Amanpreet Kaur"
            {...register("fullName")}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && (
            <p className="text-xs text-rose-600">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@domain.com"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-xs text-rose-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone / WhatsApp *</Label>
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

        <div className="space-y-1.5">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            placeholder="e.g. New Delhi"
            {...register("city")}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city && (
            <p className="text-xs text-rose-600">{errors.city.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="state">State *</Label>
          <Input
            id="state"
            placeholder="e.g. Delhi NCR"
            {...register("state")}
            aria-invalid={errors.state ? "true" : "false"}
          />
          {errors.state && (
            <p className="text-xs text-rose-600">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="skills">Preferred Seva Domain *</Label>
          <select
            id="skills"
            {...register("skills")}
            className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
          >
            <option value="Kitchen & Langar Seva">Kitchen &amp; Langar Seva</option>
            <option value="Medical & Healthcare">Medical &amp; Healthcare Camps</option>
            <option value="Teaching & Tutoring">Teaching &amp; Tutoring Scholars</option>
            <option value="Digital & Social Media">Digital Media &amp; Storytelling</option>
            <option value="Logistics & Packaging">Disaster Relief Logistics</option>
            <option value="Legal & Administration">Legal &amp; Administration Support</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="availability">Availability *</Label>
          <select
            id="availability"
            {...register("availability")}
            className="flex h-12 w-full rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
          >
            <option value="Weekends only">Weekends only</option>
            <option value="A few hours on weekdays">A few hours on weekdays</option>
            <option value="Full-time volunteer">Full-time volunteer</option>
            <option value="Remote / Pro-bono">Remote / Pro-bono</option>
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Why would you like to join as a Sevadar? (Optional)</Label>
        <Textarea
          id="message"
          rows={3}
          placeholder="Tell us a little bit about yourself or previous volunteer experiences..."
          {...register("message")}
        />
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
          <HeartHandshake className="w-4 h-4 mr-2" />
        )}
        <span>Join as Sevadar</span>
      </Button>
    </form>
  );
}
