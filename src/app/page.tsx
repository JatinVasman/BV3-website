import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { SocialGallerySection } from '@/components/SocialGallerySection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { CRMSection } from '@/components/CRMSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ResultsSection } from '@/components/ResultsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQCTASection } from '@/components/FAQCTASection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SocialGallerySection />
      <PortfolioSection />
      <CRMSection />
      <ProcessSection />
      <ResultsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQCTASection />
      <ContactSection />
    </>
  );
}
