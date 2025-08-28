"use client"

import { Button } from "@/components/ui/button"
import { RevealAnimation } from "@/components/reveal-animation"
import { MessageCircle, Phone } from "lucide-react"

const handleBookSession = () => {
  window.open(
    "https://wa.me/919834072235?text=Hi! I would like to book a free consultation with Ezee Admissions.",
    "_blank",
  )
}

const handleCall = () => {
  window.open("tel:+919834072235", "_blank")
}

export function FooterCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <RevealAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us now and take the first step towards your dream college with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleBookSession}
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button
              onClick={handleCall}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}
