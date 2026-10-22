import React from "react";
import Link from "next/link";
import { Phone, Mail, Heart, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function TopBar() {
  return (
    <>
      <div className="bg-[var(--surface)] text-[var(--navy-900)] text-xs py-2 border-b border-[var(--border)] hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-serif text-[var(--gold-600)] font-bold tracking-wider flex items-center gap-1.5">
              <span>{siteConfig.gurmukhiMotto}</span>
            </span>
            <div className="h-3 w-px bg-[var(--border)]" />
            <a
              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--gold-600)] transition-colors"
              aria-label="Call Waheguru Foundation"
            >
              <Phone className="w-3.5 h-3.5 text-[var(--gold-600)]" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--gold-600)] transition-colors"
              aria-label="Email Waheguru Foundation"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--gold-600)]" />
              <span>{siteConfig.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">

            <div className="h-3 w-px bg-[var(--border)]" />
            <div className="flex items-center gap-3 text-[var(--text-muted)]">
              <Link
                href="/csr"
                className="hover:text-[var(--gold-600)] transition-colors"
              >
                CSR Partnerships
              </Link>
              <span>•</span>
              <Link
                href="/volunteer"
                className="hover:text-[var(--gold-600)] transition-colors"
              >
                Join as Volunteer
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
