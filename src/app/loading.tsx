import React from "react";
import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="py-24 bg-[var(--bg)] min-h-[60vh] flex items-center justify-center">
      <Container className="text-center">
        <div className="inline-block relative w-16 h-16">
          <div className="w-16 h-16 rounded-full border-4 border-[var(--navy-100)] border-t-[var(--gold-500)] animate-spin" />
        </div>
        <p className="mt-4 text-sm font-medium text-[var(--navy-700)]">
          Loading Waheguru Foundation...
        </p>
      </Container>
    </div>
  );
}
