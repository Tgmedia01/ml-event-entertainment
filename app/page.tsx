import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofMarquee } from "@/components/social-proof-marquee"
import { IntroSection } from "@/components/intro-section"
import { AwardsSection } from "@/components/awards-section"
import { ServicesCardsSection } from "@/components/services-cards-section"
import { PackagesSection } from "@/components/packages-section"
import { AddOnsSection } from "@/components/add-ons-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutTeaserSection } from "@/components/about-teaser-section"
import { FAQTeaserSection } from "@/components/faq-teaser-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030508]">
      <Header />
      <HeroSection />
      <SocialProofMarquee />
      <IntroSection />
      <AwardsSection />
      <ServicesCardsSection />
      <PackagesSection />
      <AddOnsSection />
      <TestimonialsSection />
      <AboutTeaserSection />
      <FAQTeaserSection />
      <CTASection />
      <Footer />
    </main>
  )
}
