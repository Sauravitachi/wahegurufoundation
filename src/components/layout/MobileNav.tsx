"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2.5 text-[var(--navy-900)] hover:text-[var(--gold-600)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] rounded-lg"
        aria-label="Open Navigation Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen &&
        mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[100] flex justify-end">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <div
              className="relative w-full max-w-sm bg-white text-[var(--navy-900)] shadow-2xl flex flex-col h-[100dvh] border-l border-[var(--border)] z-10"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border)] bg-white shrink-0">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative h-9 w-9 shrink-0">
                    <Image
                      src="/brand/logo.png"
                      alt="Waheguru Foundation Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif font-bold text-lg text-[var(--navy-900)] leading-none">
                      WAHEGURU
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[var(--gold-600)] uppercase mt-0.5">
                      FOUNDATION
                    </span>
                  </div>
                </Link>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 text-[var(--navy-800)] hover:text-[var(--gold-600)] rounded-lg hover:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)]"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2">
                {headerNavigation.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <div
                      key={item.title}
                      className="border-b border-[var(--border)]/60 pb-2"
                    >
                      {item.children ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleSection(item.title)}
                            className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-[var(--navy-900)] hover:text-[var(--gold-600)] transition-colors"
                          >
                            <span
                              className={
                                isActive ? "text-[var(--gold-600)]" : ""
                              }
                            >
                              {item.title}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[var(--gold-600)] transition-transform duration-200 ${
                                expandedSection === item.title
                                  ? "rotate-180"
                                  : ""
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
                          className={`block py-2.5 text-base font-semibold transition-colors ${
                            isActive
                              ? "text-[var(--gold-600)] font-bold"
                              : "text-[var(--navy-900)] hover:text-[var(--gold-600)]"
                          }`}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  );
                })}

                <div className="pt-4 space-y-2 text-sm text-[var(--text-muted)]">
                  <Link
                    href="/csr"
                    onClick={closeMenu}
                    className="block py-1.5 hover:text-[var(--gold-600)] transition-colors"
                  >
                    CSR Partnerships
                  </Link>
                  <Link
                    href="/volunteer"
                    onClick={closeMenu}
                    className="block py-1.5 hover:text-[var(--gold-600)] transition-colors"
                  >
                    Volunteer with Us
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block py-1.5 hover:text-[var(--gold-600)] transition-colors"
                  >
                    Contact & Support
                  </Link>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 border-t border-[var(--border)] bg-[var(--surface)] space-y-3 shrink-0">
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
          </div>,
          document.body
        )}
    </div>
  );
}
