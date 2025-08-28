"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Award, BookOpen, TrendingUp, Star, Users, Trophy } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import { motion } from "motion/react"

const pillars = [
  {
    icon: Shield,
    title: "Ethical Process",
    description: "Complete transparency and merit-based guidance throughout your journey",
  },
  {
    icon: Award,
    title: "Expert Counselors",
    description: "Expert guidance from qualified and experienced admission counselors",
  },
  {
    icon: BookOpen,
    title: "Scholarship Expertise",
    description: "Specialized knowledge in government and private scholarship programs",
  },
  {
    icon: TrendingUp,
    title: "Proven Success Rate",
    description: "90% scholarship success rate with over 1,600 students guided",
  },
]

export function WhyEzeeAdmissions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Ezee Admissions?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four pillars that make us your ideal admission partner
            </p>
          </div>
        </RevealAnimation>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
          {pillars.map((pillar, index) => (
            <RevealAnimation key={index} delay={index * 0.1}>
              <div className="h-full">
                <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border-0 shadow-lg bg-white h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col min-h-[280px]">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{pillar.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Modern Success Rate Design */}
        <RevealAnimation delay={0.4}>
          <div className="relative max-w-4xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>

              <div className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Success Rate */}
                  <div className="text-center lg:text-left">
                    <motion.div
                      className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      90%
                    </motion.div>
                    <p className="text-lg font-semibold text-gray-900 mb-1">Scholarship Success Rate</p>
                    <p className="text-sm text-gray-600">Based on 1,600+ students guided</p>
                  </div>

                  {/* Divider */}
                  <div className="hidden lg:block w-px h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-auto"></div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">1,632</div>
                      <div className="text-sm text-gray-600">Students Guided</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Trophy className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">44+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600 font-medium">Trusted by thousands of students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}