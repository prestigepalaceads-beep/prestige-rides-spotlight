import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Prestige Motors" },
      { name: "description", content: "The terms governing the use of Prestige Motors services and website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-12">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <SectionHeading eyebrow="Legal" title="Terms & Conditions" description="Last updated May 2026" center />
          <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">1. Acceptance of Terms</h2>
              <p>By accessing this website or engaging Prestige Motors' services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">2. Vehicle Information</h2>
              <p>While we strive for accuracy, all vehicle specifications, pricing, and availability are subject to change without notice. Final terms are confirmed in writing at time of sale.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">3. Inquiries & Reservations</h2>
              <p>Submitting an inquiry does not constitute a binding offer or reservation. All transactions are subject to a formal sales agreement signed by both parties.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">4. Intellectual Property</h2>
              <p>All content on this website — including imagery, logos, and text — is the property of Prestige Motors and may not be reproduced without written permission.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">5. Limitation of Liability</h2>
              <p>Prestige Motors is not liable for any indirect, incidental, or consequential damages arising from the use of this website or our services.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">6. Governing Law</h2>
              <p>These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">7. Contact</h2>
              <p>For questions regarding these terms, please contact us at info@prestigemotors.ae.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
