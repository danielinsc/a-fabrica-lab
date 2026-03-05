import NavbarSection from "@/components/NavbarSection";
import HeroSection from "@/components/HeroSection";
import ClientsBar from "@/components/ClientsBar";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ToolkitSection from "@/components/ToolkitSection";
import TimelineSection from "@/components/TimelineSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import JournalSection from "@/components/JournalSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavbarSection />
      <HeroSection />
      <ClientsBar />
      <WorkSection />
      <ServicesSection />
      <ProcessSection />
      <ToolkitSection />
      <TimelineSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <JournalSection />
      <FooterSection />
    </div>
  );
};

export default Index;
