import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--navy-800)] text-gray-200 border-t-4 border-[var(--gold-500)] pt-16 pb-8">
      <Container>
      

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--navy-700)]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-10 w-10">
                <Image
                  src="/brand/symbol-light.svg"
                  alt="Waheguru Foundation Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white">
                  WAHEGURU
                </span>
                <span className="text-xs font-semibold text-[var(--gold-300)] tracking-widest">
                  FOUNDATION • ੴ
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              {siteConfig.description} Guided by the timeless tenet of{" "}
              <strong className="text-white font-medium">Sarbat Da Bhala</strong>{" "}
              (welfare of all), we serve humanity with compassion, transparent stewardship, and humble dedication.
            </p>

            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>
                <strong className="text-gray-200">Registered Trust:</strong>{" "}
                {siteConfig.legal.registeredName}
              </p>
              <p>
                <strong className="text-gray-200">Registration No:</strong>{" "}
                {siteConfig.legal.trustRegistrationNo} |{" "}
                <strong className="text-gray-200">NITI Aayog Darpan:</strong>{" "}
                {siteConfig.legal.darpanId}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" />
              <span>Organization</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerNavigation.about.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--gold-300)] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Campaigns */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" />
              <span>Key Initiatives</span>
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              {footerNavigation.campaigns.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--gold-300)] transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-semibold text-white text-base mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-500)]" />
              <span>Reach Our Seva Desk</span>
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--gold-500)] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.district},{" "}
                  {siteConfig.contact.address.city} – {siteConfig.contact.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--gold-500)] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-[var(--gold-300)] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--gold-500)] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[var(--gold-300)] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-[var(--navy-900)] border border-[var(--navy-700)] flex items-center justify-center text-gray-300 hover:text-[var(--gold-300)] hover:border-[var(--gold-500)] transition-colors"
                  aria-label={`Waheguru Foundation on ${platform}`}
                >
                  <span className="capitalize text-xs font-bold">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <span>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Built with Seva &amp; Humility</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-[var(--gold-300)] transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="hover:text-[var(--gold-300)] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
