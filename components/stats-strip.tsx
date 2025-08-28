import { AnimatedCounter } from "@/components/animated-counter"
import { RevealAnimation } from "@/components/reveal-animation"

export function StatsStrip() {
  const stats = [
    { value: "44+", label: "Years' Experience" },
    { value: "1,000+", label: "Students Guided" },
    { value: "100%", label: "Ethical Practices" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <RevealAnimation>
          <div className="text-center mb-12">
            <div className="max-w-6xl mx-auto relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 rounded-3xl blur-xl"></div>
              
              {/* Main content card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-lg p-8 sm:p-12">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                
                {/* Content */}
                <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-medium mb-6">
                  <span className="text-blue-600 font-semibold">Ezee Admissions</span> is a trusted student guidance platform founded by{" "}
                  <span className="text-purple-600 font-semibold">Prof. Bharat Dagade</span>, offering ethical and expert counseling for college admissions and government scholarships. 
                  With a focus on merit and transparency, we assist students in making informed choices and securing the best educational opportunities with integrity and professional support.
                </p>
                
                {/* Bottom accent */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Stats Section */}
        <RevealAnimation delay={0.3}>
          <div className="relative">
            {/* Decorative line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent transform -translate-y-1/2"></div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 relative">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 px-4">
                  <AnimatedCounter value={stat.value} label={stat.label} delay={index * 0.2} />
                </div>
              ))}
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  )
}