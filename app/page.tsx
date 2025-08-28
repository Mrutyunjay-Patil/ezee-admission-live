import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyBanner } from "@/components/ui/sticky-banner"
import { HeroSection } from "@/components/hero-section"
import { StatsStrip } from "@/components/stats-strip"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyEzeeAdmissions } from "@/components/why-ezee-admissions"
import { TestimonialsTeaser } from "@/components/testimonials-teaser"
import { LocationMap } from "@/components/location-map"
import { FooterCTA } from "@/components/footer-cta"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBanner hideOnScroll={true} />
      <Header />
      <main>
        <HeroSection />
        <StatsStrip />
        <ProcessSection />
        <WhyEzeeAdmissions />
        <ServicesSection />
        <TestimonialsTeaser />
        <LocationMap />
        <FooterCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
