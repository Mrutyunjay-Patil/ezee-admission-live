"use client"
import type React from "react"
import { useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "motion/react"
import { cn } from "@/lib/utils"

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string
  children: React.ReactNode
  hideOnScroll?: boolean
}) => {
  const [open, setOpen] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll) {
      // Show banner when at top (0-40px) or when scrolling back up to top
      if (latest <= 40) {
        setOpen(true)
      } else if (latest > 40) {
        setOpen(false)
      }
    } else {
      // Always show if hideOnScroll is false
      setOpen(true)
    }
  })

  return (
    <motion.div
      className={cn(
        "sticky inset-x-0 top-0 z-40 flex min-h-14 w-full items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3",
        className,
      )}
      initial={{
        y: 0,
        opacity: 1,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <div className="text-white text-sm font-medium text-center">
        🎉 Limited Time Offer: Get upto 50% off on Premium Counseling Package - Book Now!
      </div>
    </motion.div>
  )
}
