import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ezee Admissions - Your Trusted Partner for Ethical College Admissions & Scholarships",
  description:
    "Merit-driven guidance from Prof. Bharat Dagade and certified experts. 44+ years experience, 1,632 students guided, 90% scholarship success rate.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
