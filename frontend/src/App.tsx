import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import { ClassesTrainersSection } from "@/components/home/ClassesTrainersSection";
import PricingBMISection from "@/components/home/PricingBMISection";
import ContactSection from "@/components/home/ContactSection";

function App() {
  return (
    <>
      <Navbar />

      <main>
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
      </main>

      <Footer />
    </>
  );
}

export default App;
