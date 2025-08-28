"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation } from "lucide-react"
import { RevealAnimation } from "@/components/reveal-animation"

export function LocationMap() {
  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/scWs8wDvpTmTq6iB9?g_st=iw", "_blank")
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Office</h2>
            {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a quick online or an in-person consultation at our conveniently located office in Ulhasnagar
            </p> */}
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.2}>
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardTitle className="flex items-center text-xl">
                <MapPin className="w-6 h-6 mr-2" />
                Ezee Admissions Office
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Embedded Google Map */}
                <div className="h-80 lg:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9093468870966!2d73.16176510000001!3d19.2136333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79466652dadfd%3A0x81905f584b6b5c49!2sShree%20Krishna%20Shraddha%20Towers!5e0!3m2!1sen!2sin!4v1699208849123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ezee Admissions Office Location"
                  ></iframe>
                </div>

                {/* Office Information */}
                <div className="p-8 bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Details</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600 text-sm">
                          Besides Saraswati Educare's EzeeStudy
                          <br />
                          Near Ramdev Jwellars
                          <br />
                          Lal Chakki Chowk
                          <br />
                          Ulhasnagar 4
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                        <span className="text-white text-xs font-bold">T</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Timings</p>
                        <p className="text-gray-600 text-sm">
                          Mon-Fri: 9:00 AM - 7:00 PM
                          <br />
                          Saturday: 9:00 AM - 5:00 PM
                          <br />
                          Sunday: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Button onClick={handleDirections} className="w-full bg-blue-600 hover:bg-blue-700">
                        <Navigation className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </RevealAnimation>
      </div>
    </section>
  )
}
