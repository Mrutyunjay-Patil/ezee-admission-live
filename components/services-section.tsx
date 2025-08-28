"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RevealAnimation } from "@/components/reveal-animation"
import { Users, Award, Brain, CheckCircle, ArrowRight, MessageCircle } from "lucide-react"

const serviceCategories = [
  {
    name: "MHT CET",
    description: "Maharashtra Common Entrance Test guidance and support",
    icon: Brain,
    color: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    name: "MEDICAL",
    description: "Medical entrance exam preparation and admission guidance",
    icon: Award,
    color: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    name: "POST SSC",
    description: "Post-SSC career guidance and college selection",
    icon: Users,
    color: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
]

const serviceTiers = [
  {
    name: "Ezee Silver",
    description: "Essential guidance package for focused support",
    popular: false,
    features: [
      "Psychometry Test (Zoom)",
      "Basic Guidance",
      "Form filling process session",
      "Analysis of Merit List",
      "WhatsApp Support",
      "Group Sessions",
      "Document curation support",
    ],
    pricing: {
      "MHT CET": "₹4,999",
      MEDICAL: "₹9,999",
      "POST SSC": "₹1,499",
    },
    highlight: "Perfect for students who need essential guidance",
  },
  {
    name: "Ezee Gold",
    description: "Comprehensive package with enhanced support",
    popular: true,
    features: [
      "Psychometry Test",
      "Form Filling & Document Uploading",
      "Physical + Zoom Counselling Sessions",
      "College Preference List Discussion",
      "WhatsApp & Telephonic Support",
      "Individual Support",
      "All Ezee Silver features",
    ],
    pricing: {
      "MHT CET": "₹9,999",
      MEDICAL: "₹15,999",
      "POST SSC": "₹2,499",
    },
    highlight: "Most comprehensive package for serious aspirants",
  },
  {
    name: "Ezee Ultima",
    description: "Premium package with maximum personalized support",
    popular: false,
    features: [
      "Psychometry Test + Ideal Career Test",
      "Stream Selector",
      "5 Physical Counselling Sessions",
      "Direct access to Prof. Bharat Dagade",
      "Complete Physical Support",
      "All Ezee Gold features",
    ],
    pricing: {
      "MHT CET": "₹11,999",
      MEDICAL: "₹19,999",
      "POST SSC": "₹3,499",
    },
    highlight: "Premium package with direct access to Prof. Bharat Dagade",
  },
]

const handleBookSession = () => {
  window.open(
    "https://wa.me/919834072235?text=Hi! I would like to know more about your services and book a counseling session.",
    "_blank",
  )
}

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Support for Your Academic Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From career counseling to scholarship guidance, we provide end-to-end support with our proven three-tier
              system
            </p>
          </div>
        </RevealAnimation>

        {/* Service Categories */}
        <RevealAnimation delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {serviceCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg group h-full"
              >
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealAnimation>

        {/* Service Tiers */}
        <RevealAnimation delay={0.4}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {serviceTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 border-0 shadow-lg h-full ${
                  tier.popular ? "ring-2 ring-blue-600 scale-105" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 mb-6">{tier.description}</p>

                    {/* Pricing for each category */}
                    <div className="space-y-2 mb-6">
                      {Object.entries(tier.pricing).map(([category, price]) => (
                        <div key={category} className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{category}:</span>
                          <span className="text-lg font-bold text-blue-600">{price}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-gray-600 italic">{tier.highlight}</p>
                  </div>

                  <div className="flex-grow mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    onClick={handleBookSession}
                    className={`w-full group ${
                      tier.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Note:</strong> All the above mentioned fees are charged per student. *T&C Apply
            </p>
            {/* <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Ezee Admission Investment - Rs. 25,000/-*</Badge> */}
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}
