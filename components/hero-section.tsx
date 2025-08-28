"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground } from "@/components/ui/aurora-background"
import { RevealAnimation } from "@/components/reveal-animation"
import { MessageCircle } from "lucide-react"

const handleBookSession = () => {
  window.open(
    "https://wa.me/919834072235?text=Hi! I would like to book a counseling session with Ezee Admissions.",
    "_blank",
  )
}

export function HeroSection() {
  return (
    <AuroraBackground className="relative">
      <div className="relative container mx-auto px-4 text-center z-10">
        <RevealAnimation delay={0.2}>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted Partner for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Ethical College Admissions
            </span>{" "}
            for Medical & Engineering & Pharma Aspirants and Government Scholarships
          </h1>
        </RevealAnimation>

        <RevealAnimation delay={0.4}>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Merit-driven guidance from Prof. Bharat Dagade and certified experts
          </p>
        </RevealAnimation>

        <RevealAnimation delay={0.6}>
          <Button
            onClick={handleBookSession}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 shimmer-effect relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </span>
          </Button>
        </RevealAnimation>
      </div>
    </AuroraBackground>
  )
}
