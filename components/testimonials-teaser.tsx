"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import { motion, AnimatePresence } from "motion/react"
import { Badge } from "./ui/badge"

const testimonials = [
  {
    name: "Dr. Pranjal Bayas",
    role: "Bachelor of Physiotherapy, Mumbai",
    image: "/images/Pranjal.png",
    quote:
      "Ezee Admissions, led by Mr. Bharat Dagade, turned my admission setbacks into a success story. Their expert guidance and unwavering support helped me secure a seat in the Bachelor of Physiotherapy program in Mumbai. I highly recommend their services to any student and parent seeking trustworthy and result-oriented admission guidance.",
  },
  {
    name: "Yash Chaudhari",
    role: "Chemical Engineering, ICT Jalgaon",
    image: "/images/Yash.png",
    quote:
      "With unparalleled support from Mr. Bharat Dagade and the Ezee Admissions team, I secured a Chemical Engineering program admission at ICT Jalgaon under the TFWS and government scholarship. The Engineering Stream Selector session guided me to confidently choose Chemical Engineering, aligning with my career aspirations. Their honest advice and personalised attention made the process stress-free and smooth, ensuring I secured financial aid as well.",
  },
  {
    name: "Dr. Gaurangi Gurav",
    role: "Medical Student",
    image: "/images/Gaurangi.png",
    quote:
      "After scoring 169 out of 720 in NEET on my second attempt, setbacks almost deterred my dream of becoming a doctor. However, with the invaluable support and guidance from Ezee Admissions and Bharat Dagade Sir, I overcame challenges, secured admission in a reputed medical college, and received timely scholarships. Their unwavering assistance and belief in me transformed setbacks into stepping stones towards my passion for medicine.",
  },
  {
    name: "Mayank Mayekar",
    role: "Civil Engineering, SP College",
    image: "/images/Mayank.png",
    quote:
      "I enlisted the help of Tamhane Sir and Bharat Sir from Ezee Admissions to navigate my academic path. Through psychometric testing and expert guidance, I found clarity in choosing the PCM stream and later, secured admission successfully in Civil Engineering at SP College. Their support transformed my uncertainty into a confident and fulfilling academic journey.",
  },
]

export function TestimonialsTeaser() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600">Success stories from students who achieved their dreams</p>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <blockquote className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <Avatar className="w-16 h-16 mr-4">
                          <AvatarImage
                            src={testimonials[currentIndex].image || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                          />
                          <AvatarFallback>
                            {testimonials[currentIndex].name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                          <div className="text-gray-600 text-sm">{testimonials[currentIndex].role}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}
