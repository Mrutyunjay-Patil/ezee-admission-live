import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { RevealAnimation } from "@/components/reveal-animation"
import { Users, Award, Shield, TrendingUp, Quote, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { WhatsAppButton } from "@/components/whatsapp-button"

const achievements = [
  { icon: Users, label: "Students Guided", value: "1,632+", color: "text-blue-600" },
  { icon: Award, label: "Years of Experience", value: "44+", color: "text-purple-600" },
  { icon: Shield, label: "Success Rate", value: "90%", color: "text-green-600" },
  { icon: TrendingUp, label: "Scholarship Success", value: "90%", color: "text-orange-600" },
]

const timelineEvents = [
  {
    year: "1980",
    title: "The Beginning",
    description: "Prof. Bharat Dagade starts counseling students with a vision of ethical guidance",
    milestone: "Foundation laid with first student",
    students: "1 Student",
  },
  {
    year: "1995",
    title: "Structured Growth",
    description: "Expanded to comprehensive admission guidance with systematic processes",
    milestone: "Established formal counseling framework",
    students: "100+ Students",
  },
  {
    year: "2005",
    title: "Scholarship Focus",
    description: "Introduced specialized scholarship guidance programs and government scheme awareness",
    milestone: "First scholarship success stories",
    students: "500+ Students",
  },
  {
    year: "2015",
    title: "Digital Transformation",
    description: "Embraced technology with online counseling and digital application support",
    milestone: "Launched online counseling platform",
    students: "1000+ Students",
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Leading admission consultancy with proven track record and nationwide recognition",
    milestone: "Recognized as trusted education partner",
    students: "1632+ Students",
  },
]

const coreValues = [
  {
    icon: Shield,
    title: "Ethical Practices",
    description: "100% transparent processes with no shortcuts or false promises",
  },
  {
    icon: Award,
    title: "Merit-Based Guidance",
    description: "Focus on student capabilities and genuine opportunities",
  },
  {
    icon: Users,
    title: "Student-Centric Approach",
    description: "Every decision made in the best interest of the student",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Consistent success in admissions and scholarship achievements",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        {/* <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <RevealAnimation>
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2">About Ezee Admissions</Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Empowering Dreams Through{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Ethical Guidance
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Ezee Admissions is a trusted student guidance platform founded by Prof. Bharat Dagade, 
                  offering ethical and expert counseling for college admissions and government scholarships. 
                  With a focus on merit and transparency, we assist students in making informed choices and 
                  securing the best educational opportunities with integrity and professional support.
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section> */}

        {/* Achievement Stats */}
        {/* <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className={`w-8 h-8 lg:w-10 lg:h-10 ${achievement.color}`} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{achievement.value}</div>
                    <div className="text-sm lg:text-base text-gray-600 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </RevealAnimation>
          </div>
        </section> */}

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <RevealAnimation>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-20"></div>
                  <Image
                    src="/images/founder-bharat-dagade-1.png"
                    alt="Prof. Bharat Dagade - Founder of Ezee Admissions"
                    width={600}
                    height={500}
                    className="relative rounded-2xl shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="font-semibold text-gray-900">44+ Years</span>
                    </div>
                    <p className="text-sm text-gray-600">of Excellence</p>
                  </div>
                </div>
              </RevealAnimation>

              <RevealAnimation delay={0.2}>
                <div>
                  <Badge className="mb-4 bg-purple-100 text-purple-800">Our Story</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">A Journey of Purpose and Impact</h2>
                  <div className="space-y-6 text-gray-600 leading-relaxed">
                    <p>
                      Ezee Admissions began as a vision in the mind of Prof. Bharat Dagade, an educationist deeply
                      committed to making quality education accessible through ethical guidance and merit-based support.
                      Witnessing the growing confusion and misinformation surrounding college admissions, especially
                      among first-generation learners and rural students, Prof. Dagade felt a strong need for a platform
                      that would act in the best interest of the student—without shortcuts or compromises.
                    </p>
                    <p>
                      What started as a one-man mission to counsel a handful of students gradually evolved into a
                      structured, trusted, and impact-driven organization. Ezee Admissions has since helped thousands of
                      students secure admissions into reputable colleges across India, while also successfully guiding
                      them in availing government scholarships—all through transparent, informed, and professional
                      processes.
                    </p>
                    <p>
                      Over the years, the organization has built strong networks with institutions, kept up-to-date with
                      changing admission policies, and developed a framework that prioritizes student merit,
                      affordability, and long-term growth.
                    </p>
                    <p className="font-medium text-gray-900">
                      Today, Ezee Admissions stands tall as a beacon of ethical education guidance, committed to
                      empowering students and parents with the right knowledge, the right choices, and the right
                      support—every step of the way.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Timeline */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Our Journey</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Four Decades of Excellence</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From a single student to thousands of success stories
                </p>
              </div>
            </RevealAnimation>

            <div className="max-w-6xl mx-auto">
              <div className="relative">
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

                <div className="space-y-12 lg:space-y-16">
                  {timelineEvents.map((event, index) => (
                    <RevealAnimation key={index} delay={index * 0.1}>
                      <div
                        className={`relative flex flex-col lg:flex-row items-center ${
                          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        }`}
                      >
                        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                        <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                          <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardContent className="p-6 lg:p-8">
                              <div className="flex items-center justify-between mb-4">
                                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1">
                                  {event.year}
                                </Badge>
                                <Badge variant="outline" className="text-sm">
                                  {event.students}
                                </Badge>
                              </div>
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                              <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                              <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-green-800">{event.milestone}</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="hidden lg:block w-2/12"></div>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-purple-100 text-purple-800">Our Values</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Drives Us Forward</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The principles that guide every decision and interaction
                </p>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {coreValues.map((value, index) => (
                <RevealAnimation key={index} delay={index * 0.1}>
                  <Card className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-0 shadow-lg group h-full">
                    <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
                    </CardContent>
                  </Card>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <RevealAnimation>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Mission & Vision</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Purpose & Direction</h2>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              <RevealAnimation delay={0.2}>
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
                  <CardContent className="p-8 lg:p-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      To empower students with ethical, transparent, and merit-based guidance for college admissions and
                      government scholarships, ensuring every deserving student receives the right support to access
                      quality education and shape a successful future.
                    </p>
                  </CardContent>
                </Card>
              </RevealAnimation>

              <RevealAnimation delay={0.4}>
                <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-400"></div>
                  <CardContent className="p-8 lg:p-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-3xl">🌟</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      To become India's most trusted and student-centric platform for higher education counseling, known
                      for integrity, impact, and inclusive growth—bridging aspirations with opportunities through
                      knowledge, compassion, and professional excellence.
                    </p>
                  </CardContent>
                </Card>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Founder's Message */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <RevealAnimation>
              <Card className="max-w-5xl mx-auto border-0 shadow-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="text-center mb-8">
                    <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <Avatar className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-6 ring-4 ring-blue-100">
                      <AvatarImage src="/images/founder-bharat-dagade.png" alt="Prof. Bharat Dagade" />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        BD
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">A Note from the Founder</h3>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-gray-900">Prof. Bharat Dagade</p>
                      <p className="text-gray-600">Founder & CEO, Ezee Admissions</p>
                    </div>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <p className="text-lg font-medium text-gray-900 mb-6">Dear Parents,</p>

                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                      <p>
                        As a parent myself and as an educator for over two decades, I understand the hopes, anxieties,
                        and expectations you carry when it comes to your child's education. Choosing the right college
                        and securing the right opportunities is not just about admission—it's about shaping a life.
                      </p>
                      <p>
                        Ezee Admissions was born from the belief that every child deserves a fair chance, guided not by
                        shortcuts, but by merit, ethics, and clear understanding. Unfortunately, the admission process
                        today can often feel overwhelming and misleading. That's why we are here—to simplify, to
                        support, and to serve, with complete transparency and sincerity.
                      </p>
                      <p>
                        Our mission is to guide your child not just into a college, but onto a meaningful path of growth
                        and confidence. We treat every student's dream as our own, and every parent's trust as our
                        greatest responsibility.
                      </p>
                      <p className="font-medium text-gray-900">
                        Thank you for considering Ezee Admissions as your partner in this important journey. Together,
                        let's help your child rise—with clarity, courage, and character.
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-lg font-medium text-gray-900">Warm regards,</p>
                      <div className="mt-2">
                        <div className="text-2xl font-script text-blue-600 mb-1">Prof. Bharat Dagade</div>
                        <p className="text-gray-600">Founder & CEO, Ezee Admissions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
