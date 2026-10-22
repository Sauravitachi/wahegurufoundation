import React from "react";
import { Utensils, Stethoscope, BookOpen } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { VolunteerForm } from "@/features/forms";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Volunteer with Us | Become a Sevadar",
  description:
    "Join thousands of compassionate sevadars serving meals, tutoring girl scholars, or helping on mobile health vans.",
  pathname: "/volunteer",
});

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-[var(--navy-900)] text-white py-16 md:py-24 relative overflow-hidden">
        <Container className="text-center max-w-3xl">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--gold-300)] mb-3 inline-block">
            SEVA CALLING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Become a Sevadar
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
            In Sikh philosophy, selfless service (seva) purifies the heart and unites humanity. Join our nationwide network of volunteer sevadars.
          </p>
        </Container>
      </section>

      <Section variant="bg" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--gold-600)]">
                The Spirit of Seva
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--navy-900)]">
                Hands That Serve Are Holier Than Lips That Pray
              </h2>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light">
                Whether you have 2 hours on a Sunday morning or specialized medical skills, there is meaningful service waiting for your hands.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <Utensils className="w-5 h-5 text-[var(--gold-600)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[var(--navy-900)]">
                      Langar Seva
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Assisting in chopping, cooking, packaging, and dignified distribution of meals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <Stethoscope className="w-5 h-5 text-[var(--navy-700)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[var(--navy-900)]">
                      Medical Seva
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Doctors, nurses, and pharmacists providing diagnostics on mobile clinic vans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                  <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[var(--navy-900)]">
                      Teaching &amp; Mentoring
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5">
                      Digital tutoring, career counselling, and science workshops for rural scholars.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl bg-white border border-[var(--border)] p-6 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[var(--navy-900)] mb-1">
                Volunteer Registration
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-6">
                Tell us about your location and areas of interest. Our volunteer desk will reach out soon.
              </p>
              <VolunteerForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
