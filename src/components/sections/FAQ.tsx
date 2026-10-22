import React from "react";
import { HelpCircle, Mail } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/content/faq";
import { siteConfig } from "@/config/site";

export function FAQ() {
  return (
    <Section variant="surface" spacing="lg" id="faq">
      <Container>
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions &amp; 80G Transparency"
          description="Everything you need to know regarding tax deductions, monthly child sponsorship, and volunteer opportunities."
        />

        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 shadow-sm">
          <Accordion type="single" collapsible defaultValue="faq-80g" className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-base sm:text-lg font-bold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm sm:text-base leading-relaxed text-[var(--text-muted)]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[var(--gold-100)] flex items-center justify-center text-[var(--gold-600)] shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--navy-900)]">
                  Have a specific question about your donation?
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  Our donor relations desk is available Monday through Saturday.
                </p>
              </div>
            </div>            
          </div>
        </div>
      </Container>
    </Section>
  );
}
