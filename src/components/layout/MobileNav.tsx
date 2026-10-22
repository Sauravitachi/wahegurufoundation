"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-[var(--navy-900)] hover:text-[var(--gold-600)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] rounded-lg"
        aria-label="Open Navigation Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div className="relative ml-auto w-full max-w-sm bg-white text-[var(--navy-900)] shadow-2xl flex flex-col h-full border-l border-[var(--border)]">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2.5">
                <Image
                  src="/brand/symbol.svg"
                  alt="Waheguru Foundation Mark"
                  width={34}
                  height={34}
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-base text-[var(--navy-900)] leading-none">
                    WAHEGURU
                  </span>
                  <span className="text-[10px] font-bold text-[var(--gold-600)] uppercase tracking-wider mt-0.5">
                    FOUNDATION • ਸੇਵਾ
                  </span>
                </div>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 text-[var(--navy-800)] hover:text-[var(--gold-600)] rounded-lg hover:bg-[var(--surface)]"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
              {headerNavigation.map((item) => (
                <div key={item.title} className="border-b border-[var(--border)]/60 pb-2">
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.title)}
                        className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-[var(--navy-900)] hover:text-[var(--gold-600)]"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[var(--gold-600)] transition-transform duration-200 ${
                            expandedSection === item.title ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedSection === item.title && (
                        <div className="pl-4 pb-2 space-y-2 border-l-2 border-[var(--gold-500)]/40 ml-2 mt-1">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={closeMenu}
                              className="block py-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--gold-600)] transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block py-2.5 text-base font-semibold text-[var(--navy-900)] hover:text-[var(--gold-600)] transition-colors"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-2 text-sm text-[var(--text-muted)]">
                <Link
                  href="/csr"
                  onClick={closeMenu}
                  className="block py-1.5 hover:text-[var(--gold-600)]"
                >
                  CSR Partnerships
                </Link>
                <Link
                  href="/volunteer"
                  onClick={closeMenu}
                  className="block py-1.5 hover:text-[var(--gold-600)]"
                >
                  Volunteer with Us
                </Link>
                <Link
                  href="/gallery"
                  onClick={closeMenu}
                  className="block py-1.5 hover:text-[var(--gold-600)]"
                >
                  Photo & Video Gallery
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block py-1.5 hover:text-[var(--gold-600)]"
                >
                  Contact & Support
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="p-5 border-t border-[var(--border)] bg-[var(--surface)] space-y-3">
              <Button
                asChild
                variant="donate"
                size="lg"
                className="w-full text-center"
              >
                <Link href="/donate" onClick={closeMenu}>
                  <Heart className="w-4 h-4 mr-2 fill-[var(--navy-900)]" />
                  Donate Now (80G)
                </Link>
              </Button>
              <div className="text-center text-xs text-[var(--text-muted)]">
                <p>Tax Exemption eligible under Section 80G</p>
                <p className="mt-1 font-mono">{siteConfig.contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
