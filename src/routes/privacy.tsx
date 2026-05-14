import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Prestige Motors" },
      { name: "description", content: "How Prestige Motors collects, uses, and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="pt-32 pb-32">
      <section className="py-12">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <SectionHeading eyebrow="Legal" title="Privacy Policy" description="Last updated May 2026" center />
          <div className="mt-12 space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">1. Information We Collect</h2>
              <p>We collect information you provide when you contact us, schedule a viewing, or inquire about a vehicle — including your name, email, phone number, and vehicle preferences.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">2. How We Use Your Information</h2>
              <p>Your information is used solely to respond to inquiries, arrange consultations, and provide you with information about vehicles and services you have requested. We never sell your data.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">3. Data Protection</h2>
              <p>Prestige Motors implements industry-standard security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">4. Cookies</h2>
              <p>Our website uses essential cookies to ensure proper functionality. We do not use tracking or advertising cookies without your consent.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">5. Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information at any time by contacting info@prestigemotors.ae.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl text-primary mb-3">6. Contact</h2>
              <p>For questions regarding this policy, please contact us at info@prestigemotors.ae or visit our showroom on Sheikh Zayed Road, Dubai.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
