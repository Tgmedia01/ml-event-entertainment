import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofMarquee } from "@/components/social-proof-marquee"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { PackagesSection } from "@/components/packages-section"
import { AddOnsSection } from "@/components/add-ons-section"
import { MusicPlanningSection } from "@/components/music-planning-section"
import { ProcessSection } from "@/components/process-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SocialProofMarquee />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <AddOnsSection />
      <MusicPlanningSection />
      <ProcessSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
