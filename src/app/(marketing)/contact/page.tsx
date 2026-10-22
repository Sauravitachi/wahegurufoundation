import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/features/forms";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Us & Seva Desk",
  description:
    "Reach out to Waheguru Foundation's main trust office in New Delhi for donation enquiries, 80G receipts, and partnership support.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            REACH OUT
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            We Are Here to Serve
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            Have questions regarding an 80G tax receipt, CSR proposal, or volunteer opportunity? Our dedicated seva desk is here to assist.
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Info Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                  Registered Trust Secretariat
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)] mt-1 mb-3">
                  Main Office &amp; Help Desk
                </h2>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                  Visitors and sevadars are warmly welcome by prior appointment during office hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <MapPin className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[var(--navy-900)]">
                    <p className="font-bold">Registered Address</p>
                    <p className="text-[var(--text-muted)] mt-0.5">
                      {siteConfig.contact.address.street}, {siteConfig.contact.address.district},{" "}
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <Phone className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[var(--navy-900)]">
                    <p className="font-bold">Phone &amp; WhatsApp Support</p>
                    <p className="text-[var(--text-muted)] mt-0.5">
                      Toll Free: {siteConfig.contact.tollFree}
                    </p>
                    <p className="text-[var(--text-muted)]">
                      Office: {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <Mail className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[var(--navy-900)]">
                    <p className="font-bold">Email Contacts</p>
                    <p className="text-[var(--text-muted)] mt-0.5">
                      General: {siteConfig.contact.email}
                    </p>
                    <p className="text-[var(--text-muted)]">
                      Donations &amp; 80G: {siteConfig.contact.donationsEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
                  <Clock className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[var(--navy-900)]">
                    <p className="font-bold">Working Hours</p>
                    <p className="text-[var(--text-muted)] mt-0.5">
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="rounded-2xl border border-[var(--border)] overflow-hidden aspect-[16/9] relative bg-gray-100 flex items-center justify-center text-center p-4">
                <div>
                  <MapPin className="w-8 h-8 text-[var(--gold-600)] mx-auto mb-2" />
                  <p className="font-serif font-bold text-sm text-[var(--navy-900)]">
                    Waheguru Foundation Secretariat
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Institutional Area, South Delhi, New Delhi – 110025
                  </p>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)] mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Fill in the form below and we will route your enquiry to the appropriate seva coordinator.
              </p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
