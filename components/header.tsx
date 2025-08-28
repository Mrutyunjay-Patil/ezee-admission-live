"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resources", href: "/blog" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (isHomePage) {
      // On home page: hide initially, show on any scroll
      if (latest > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    } else {
      // On other pages: always visible
      setIsVisible(true)
    }
  })

  // Set initial visibility based on page
  useEffect(() => {
    if (isHomePage) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }, [isHomePage])

  const handleBookSession = () => {
    window.open(
      "https://wa.me/919834072235?text=Hi! I would like to book a counseling session with Ezee Admissions.",
      "_blank",
    )
  }

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
      initial={{ y: isHomePage ? -100 : 0, opacity: isHomePage ? 0 : 1 }}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/ezee-logo.png" alt="Ezee Admissions Logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold text-gray-900">Ezee Admissions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              onClick={handleBookSession}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Book Session
            </Button>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <Image src="/images/ezee-logo.png" alt="Ezee Admissions Logo" width={40} height={40} className="h-10 w-10 object-contain" />
                    <span className="text-xl font-bold text-gray-900">Ezee Admissions</span>
                  </div>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      handleBookSession()
                      setIsOpen(false)
                    }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white mt-4"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
