"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RevealAnimation } from "@/components/reveal-animation"
import {
  UserPlus,
  MessageCircle,
  FileText,
  GraduationCap,
  ArrowRight,
  ArrowDown,
} from "lucide-react"

const journeySteps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Register with Ezee Admissions",
    description: "Complete your profile and get started",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "Attend a Counseling Session",
    description: "Get personalized guidance from experts",
  },
  {
    id: 3,
    icon: FileText,
    title: "Apply to Right Colleges",
    description: "Submit applications with our support",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Secure Admission & Scholarship",
    description: "Achieve your academic goals",
  },
]

const handleBookSession = () => {
  window.open(
    "https://wa.me/919834072235?text=Hi! I would like to know more about your admission process and book a consultation.",
    "_blank",
  )
}

export function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Our Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Your Journey to Academic Success</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our simple 4-step process to secure your dream admission and scholarship
            </p>
          </div>
        </RevealAnimation>

        {/* Visual Journey Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Lines for Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent z-0" style={{left: '12.5%', right: '12.5%'}}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10 lg:items-stretch">
              {journeySteps.map((step, index) => (
                <div key={step.id}>
                  <RevealAnimation delay={index * 0.1}>
                    <div className="relative flex">
                      {/* Step Card */}
                      <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg group w-full">
                        <CardContent className="p-6 flex flex-col min-h-[280px]">
                          {/* Step Number */}
                          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-lg font-bold group-hover:scale-110 transition-transform duration-300">
                            {step.id}
                          </div>
                          
                          {/* Icon */}
                          <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                            <step.icon className="w-7 h-7 text-blue-600" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-grow flex flex-col justify-center text-center">
                            <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">{step.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </RevealAnimation>
                  
                  {/* Downward Arrow for Mobile/Tablet */}
                  {index < journeySteps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-6">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <ArrowDown className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.6}>
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Your Success Journey?</h3>
                <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  Join over 1,600 successful students who achieved their dreams with our proven process.
                </p>
                <Button
                  onClick={handleBookSession}
                  className="bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}