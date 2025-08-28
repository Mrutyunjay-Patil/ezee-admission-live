"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, MessageSquare, Award, Brain, Phone, FileText, MessageCircle } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"

const services = [
  {
    icon: Users,
    title: "Live Application Support",
    description: "Real-time guidance through your application process with expert assistance",
  },
  {
    icon: MessageSquare,
    title: "One-to-One Counseling",
    description: "Personalized sessions with certified counselors tailored to your goals",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Expert help in securing financial aid and scholarships from various sources",
  },
  {
    icon: Brain,
    title: "Psychometric Testing",
    description: "Discover your strengths and ideal career path through scientific assessment",
  },
  {
    icon: Phone,
    title: "Unlimited WhatsApp Support",
    description: "24/7 support for all your admission queries and concerns",
  },
  {
    icon: FileText,
    title: "Document Preparation",
    description: "Professional assistance in preparing all required documents",
  },
]

const handleLearnMore = () => {
  window.open("https://wa.me/919834072235?text=Hi! I would like to know more about your services.", "_blank")
}

export function ServicesPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive support for your college admission journey
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex flex-col items-center text-center flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">{service.description}</p>
                    <Button
                      onClick={handleLearnMore}
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
