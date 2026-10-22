import React from "react";
import Link from "next/link";
import { Home, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 bg-[var(--surface)] min-h-[70vh] flex items-center">
      <Container className="text-center max-w-2xl">
        <span className="font-serif text-6xl md:text-8xl font-black text-[var(--gold-600)] block mb-4">
          404
        </span>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-[var(--navy-900)] mb-4">
          Page Not Found
        </h1>
        <p className="text-[var(--text-muted)] text-base md:text-lg mb-8 leading-relaxed">
          The page or humanitarian initiative you are looking for may have been
          moved or is undergoing updates. Let us guide you back to our active seva initiatives.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="donate" size="lg">
            <Link href="/donate">
              <Heart className="w-4 h-4 mr-2 fill-[var(--navy-900)]" />
              Support Seva (80G)
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
