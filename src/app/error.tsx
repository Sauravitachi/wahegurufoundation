"use client";

import React, { useEffect } from "react";
import { RefreshCw, AlertTriangle, Home } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error logged:", error);
  }, [error]);

  return (
    <div className="py-24 md:py-36 bg-[var(--surface)] min-h-[70vh] flex items-center">
      <Container className="text-center max-w-xl">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 mb-6">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="font-serif text-3xl font-bold text-[var(--navy-900)] mb-3">
          Something went wrong
        </h1>
        <p className="text-[var(--text-muted)] text-base mb-8 leading-relaxed">
          We encountered an unexpected issue while loading this section. Please try refreshing or return to the main homepage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="default" size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
