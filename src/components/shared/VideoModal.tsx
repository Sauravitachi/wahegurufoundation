"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface VideoModalProps {
  videoUrl?: string;
  title?: string;
  triggerText?: string;
  variant?: "dark" | "light";
}

export function VideoModal({
  videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  title = "Our Story of Seva • Waheguru Foundation",
  triggerText = "Watch Our Story",
  variant = "light",
}: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={`inline-flex items-center gap-3 text-sm font-semibold transition-colors group focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] rounded-full px-2 py-1 ${
          variant === "dark"
            ? "text-white/90 hover:text-[var(--gold-300)]"
            : "text-[var(--navy-900)] hover:text-[var(--gold-600)]"
        }`}
        aria-label={`Open video modal: ${title}`}
      >
        <span
          className={`relative flex h-11 w-11 items-center justify-center rounded-full shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--gold-500)] group-hover:text-[var(--navy-900)] ${
            variant === "dark"
              ? "bg-[var(--gold-500)]/20 border border-[var(--gold-500)]/50 text-[var(--gold-300)]"
              : "bg-[var(--gold-100)] border border-[var(--gold-300)] text-[var(--gold-600)]"
          }`}
        >
          <Play className="h-4 w-4 fill-current ml-0.5" />
          <span className="absolute -inset-1 rounded-full border border-[var(--gold-500)]/40 animate-ping opacity-75" />
        </span>
        <span className="underline-offset-4 group-hover:underline">{triggerText}</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-2 sm:p-4 bg-[var(--navy-900)] border-[var(--navy-700)]">
          <DialogHeader className="px-2 pt-2">
            <DialogTitle className="text-white text-lg font-serif">
              {title}
            </DialogTitle>
          </DialogHeader>
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black mt-2">
            {isOpen && (
              <iframe
                src={videoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
