"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface ShareButtonsProps {
  title: string;
  url?: string;
  description?: string;
}

export function ShareButtons({
  title,
  url,
  description = siteConfig.tagline,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl =
    typeof window !== "undefined"
      ? url || window.location.href
      : `${siteConfig.url}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const tweetText = encodeURIComponent(
    description ? `${title} - ${description}` : title
  );

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mr-1">
        Share:
      </span>
      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-[var(--surface)] text-[var(--navy-900)] hover:text-sky-500 hover:bg-sky-50 transition-colors border border-[var(--border)]"
        aria-label="Share on X"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-[var(--surface)] text-[var(--navy-900)] hover:text-blue-600 hover:bg-blue-50 transition-colors border border-[var(--border)]"
        aria-label="Share on Facebook"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg bg-[var(--surface)] text-[var(--navy-900)] hover:text-blue-700 hover:bg-blue-50 transition-colors border border-[var(--border)]"
        aria-label="Share on LinkedIn"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 1.62 1.62c0-.9-.73-1.62-1.62-1.62z" />
        </svg>
      </a>

      {/* Copy link */}
      <button
        type="button"
        onClick={copyToClipboard}
        className="p-2 rounded-lg bg-[var(--surface)] text-[var(--navy-900)] hover:text-[var(--gold-600)] transition-colors border border-[var(--border)] relative"
        aria-label="Copy link to clipboard"
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
