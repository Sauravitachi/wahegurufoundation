"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Heart, Search } from "lucide-react";
import { headerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md text-[var(--navy-900)] border-b border-[var(--border)]",
        isScrolled ? "py-2.5 shadow-sm bg-white/98" : "py-3.5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--gold-500)] rounded-lg p-1"
          aria-label={`${siteConfig.name} Home`}
        >
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 transition-transform duration-200 group-hover:scale-105 shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Waheguru Foundation Emblem"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-[var(--navy-900)] leading-none">
              WAHEGURU
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[var(--gold-600)] uppercase mt-0.5">
              FOUNDATION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {headerNavigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (item.children) {
              return (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors hover:text-[var(--gold-600)] hover:bg-[var(--gold-100)]/40",
                      isActive
                        ? "text-[var(--gold-600)] font-bold bg-[var(--gold-100)]/40"
                        : "text-[var(--navy-800)]"
                    )}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-[var(--gold-600)] transition-transform duration-200 group-hover:rotate-180" />
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 w-72 z-50">
                    <div className="bg-white border border-[var(--border)] rounded-2xl p-2 shadow-xl space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block p-2.5 rounded-xl hover:bg-[var(--surface)] transition-colors group/item"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-[var(--navy-900)] group-hover/item:text-[var(--gold-600)]">
                              {subItem.title}
                            </span>
                            {subItem.badge && (
                              <span className="text-[10px] uppercase font-bold bg-[var(--gold-100)] text-[var(--gold-600)] px-2 py-0.5 rounded-full border border-[var(--gold-300)]">
                                {subItem.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">
                            {subItem.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-lg transition-colors hover:text-[var(--gold-600)] hover:bg-[var(--gold-100)]/40",
                  isActive
                    ? "text-[var(--gold-600)] font-bold bg-[var(--gold-100)]/40"
                    : "text-[var(--navy-800)]"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/campaigns"
            className="p-2 text-[var(--navy-700)] hover:text-[var(--gold-600)] hover:bg-[var(--surface)] rounded-lg transition-colors hidden sm:flex items-center justify-center"
            aria-label="Search Campaigns"
          >
            <Search className="w-4 h-4" />
          </Link>

          <Button
            asChild
            variant="donate"
            size="default"
            className="hidden sm:inline-flex"
          >
            <Link href="/donate">
              <Heart className="w-4 h-4 mr-1.5 fill-[var(--navy-900)]" />
              <span>Donate Now</span>
            </Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
