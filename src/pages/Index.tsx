import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import InsightsSection from "@/components/InsightsSection";
import CalendarSection from "@/components/CalendarSection";
import MentoriaSection from "@/components/MentoriaSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ExclusivitySection from "@/components/ExclusivitySection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-olimpo-cream">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <InsightsSection />
      <CalendarSection />
      <MentoriaSection />
      <HowItWorksSection />
      <PricingSection />
      <ExclusivitySection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
