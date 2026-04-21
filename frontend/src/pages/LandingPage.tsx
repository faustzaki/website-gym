import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import { ClassesTrainersSection } from "@/components/home/ClassesTrainersSection";
import PricingBMISection from "@/components/home/PricingBMISection";
import ContactSection from "@/components/home/ContactSection";

/**
 * LandingPage — Halaman utama (beranda) website.
 *
 * Semua section yang sebelumnya ada di App.tsx dipindahkan ke sini.
 * Dengan begitu, App.tsx hanya bertugas sebagai "router hub"
 * dan halaman ini menjadi satu unit yang mandiri.
 */
export default function LandingPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Features / App Benefits */}
      <FeaturesSection />

      {/* Section 3 — Classes & Trainers */}
      <ClassesTrainersSection />

      {/* Section 4 — Pricing & BMI Calculator */}
      <PricingBMISection />

      {/* Section 5 — Contact / CTA */}
      <ContactSection />
    </>
  );
}
