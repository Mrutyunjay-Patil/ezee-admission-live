import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, MessageCircle, FileText, GraduationCap, ArrowRight } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"
import Link from "next/link"

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    description: "Sign up and complete your profile with academic details",
  },
  {
    icon: MessageCircle,
    title: "Counseling",
    description: "Get personalized guidance from our certified counselors",
  },
  {
    icon: FileText,
    title: "Apply",
    description: "Submit applications with our expert assistance",
  },
  {
    icon: GraduationCap,
    title: "Secure Admission",
    description: "Get admission and scholarship to your dream college",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to secure your college admission and scholarship
            </p>
          </div>
        </RevealAnimation>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block relative">
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <RevealAnimation key={index} delay={index * 0.1}>
                  <div className="relative">
                    <Card className="hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        {/* Icon Circle */}
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-10 h-10 text-blue-600" />
                        </div>

                        {/* Step Number */}
                        <div className="text-3xl font-bold text-blue-600 mb-3">{index + 1}</div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>

                    {/* Arrow connector - positioned to align with card centers */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                          <ArrowRight className="w-4 h-4 text-blue-600" />
                        </div>
                      </div>
                    )}
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <RevealAnimation key={index} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="text-2xl font-bold text-blue-600 mr-3">{index + 1}</div>
                          <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </RevealAnimation>
            ))}
          </div>

          <RevealAnimation delay={0.6}>
            <div className="text-center mt-12">
              <Link
                href="/process"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                See full FAQs
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
