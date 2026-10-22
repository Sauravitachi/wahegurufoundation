"use client";

import React, { useState } from "react";
import { Download, Check } from "lucide-react";

export interface ReportDownloadButtonProps {
  title: string;
}

export function ReportDownloadButton({ title }: ReportDownloadButtonProps) {
  const [downloaded, setDownloaded] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloaded(true);
    alert(
      `Annual Report (${title}) will be available for download once finalized by statutory auditors.`
    );
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-[var(--navy-700)] bg-[var(--surface)] hover:bg-[var(--gold-500)] hover:text-[var(--navy-900)] transition-colors border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
    >
      {downloaded ? (
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      ) : (
        <Download className="w-3.5 h-3.5" />
      )}
      <span>Download PDF</span>
    </button>
  );
}
