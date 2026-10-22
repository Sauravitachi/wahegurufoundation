"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/formatters";
import { getImpactText } from "./schema";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

interface AmountSelectorProps {
  value: number;
  frequency: "one-time" | "monthly";
  onAmountChange: (amount: number) => void;
  onFrequencyChange: (frequency: "one-time" | "monthly") => void;
}

export function AmountSelector({
  value,
  frequency,
  onAmountChange,
  onFrequencyChange,
}: AmountSelectorProps) {
  const [customInput, setCustomInput] = useState(
    PRESET_AMOUNTS.includes(value) ? "" : value.toString()
  );
  const isCustom = !PRESET_AMOUNTS.includes(value);

  const handlePresetClick = (amount: number) => {
    setCustomInput("");
    onAmountChange(amount);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, "");
    setCustomInput(rawVal);
    const parsed = parseInt(rawVal, 10);
    if (!isNaN(parsed) && parsed > 0) {
      onAmountChange(parsed);
    }
  };

  const impactMessage = getImpactText(value);

  return (
    <div className="space-y-5">
      {/* Frequency Toggle (One-Time / Monthly) */}
      <div className="flex p-1 rounded-2xl bg-[var(--surface)] border border-[var(--border)] max-w-sm mx-auto">
        <button
          type="button"
          onClick={() => onFrequencyChange("one-time")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
            frequency === "one-time"
              ? "bg-[var(--navy-700)] text-white shadow-xs"
              : "text-[var(--navy-900)] hover:text-[var(--gold-600)]"
          }`}
        >
          One-Time Gift
        </button>
        <button
          type="button"
          onClick={() => onFrequencyChange("monthly")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all relative ${
            frequency === "monthly"
              ? "bg-[var(--navy-700)] text-white shadow-xs"
              : "text-[var(--navy-900)] hover:text-[var(--gold-600)]"
          }`}
        >
          <span>Monthly Seva Pledge</span>
          <span className="hidden sm:inline-block ml-1 text-[10px] text-[var(--gold-300)] uppercase font-extrabold">
            ★ Most Needed
          </span>
        </button>
      </div>

      {/* Preset Amount Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {PRESET_AMOUNTS.map((amt) => {
          const isSelected = value === amt && !isCustom;
          return (
            <button
              key={amt}
              type="button"
              onClick={() => handlePresetClick(amt)}
              className={`py-3.5 px-3 rounded-2xl text-base font-serif font-bold transition-all border ${
                isSelected
                  ? "bg-[var(--navy-700)] text-white border-[var(--navy-700)] shadow-md ring-2 ring-[var(--gold-500)]"
                  : "bg-white text-[var(--navy-900)] border-[var(--border)] hover:border-[var(--gold-500)] hover:bg-[var(--surface)]"
              }`}
            >
              {formatCurrency(amt)}
            </button>
          );
        })}
      </div>

      {/* Custom Amount Input */}
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 font-serif font-bold text-lg text-[var(--navy-900)]">
          ₹
        </div>
        <Input
          type="text"
          inputMode="numeric"
          placeholder="Enter custom contribution amount in INR"
          value={customInput}
          onChange={handleCustomChange}
          className="pl-9 h-13 text-base font-medium rounded-xl border-[var(--border)] bg-white"
        />
      </div>

      {/* "What Your Gift Does" Helper Callout */}
      <div className="p-4 rounded-xl bg-[var(--gold-100)]/80 border border-[var(--gold-300)]/70 flex items-start gap-3 text-xs sm:text-sm text-[var(--navy-900)]">
        <Sparkles className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block mb-0.5">
            What your gift of {formatCurrency(value)} achieves:
          </strong>
          <span className="leading-relaxed text-[var(--navy-800)]">
            {impactMessage}
          </span>
        </div>
      </div>
    </div>
  );
}
