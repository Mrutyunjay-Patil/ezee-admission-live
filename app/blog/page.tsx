"use client"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  Bell,
  Rocket,
  Sparkles,
  Clock,
  ArrowRight,
} from "lucide-react";

const comingFeatures = [
  {
    icon: BookOpen,
    title: "Expert Articles",
    description:
      "In-depth guides on admissions, scholarships, and career planning",
  },
  {
    icon: Calendar,
    title: "Important Dates",
    description: "Never miss application deadlines and exam dates",
  },
  {
    icon: Bell,
    title: "Live Updates",
    description: "Real-time notifications about admission opportunities",
  },
  {
    icon: Sparkles,
    title: "Success Stories",
    description: "Inspiring journeys of students who achieved their dreams",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
                <Rocket className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">
                  Coming Very Soon
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Resources & Blog
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
                Your ultimate destination for admission insights, scholarship
                opportunities, and expert guidance
              </p>

              {/* Countdown or Launch Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">
                    Launching Soon
                  </span>
                </div>
                <p className="text-gray-600 text-center">
                  We're crafting something amazing for you. Get ready for
                  comprehensive guides, live updates, and expert insights that
                  will transform your admission journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                What's Coming
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Features You'll Love
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Get ready for a comprehensive platform designed to make your
                admission journey smoother and more successful
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {comingFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-0 shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Future?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                While our blog is under construction, our expert counselors are
                ready to guide you right now. Don't wait – start your success
                journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919834072235?text=Hi! I would like to know more about your services.",
                      "_blank"
                    )
                  }
                  className="bg-white text-blue-600 hover:bg-gray-50 hover:scale-105 px-8 py-3 text-lg font-semibold"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
