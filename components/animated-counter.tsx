"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "motion/react"
import { useRef } from "react"

interface AnimatedCounterProps {
  value: string
  label: string
  delay?: number
}

export function AnimatedCounter({ value, label, delay = 0 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Extract numeric value from string (e.g., "44+" -> 44, "1,632" -> 1632, "100%" -> 100)
  const numericValue = Number.parseInt(value.replace(/[^\d]/g, "")) || 0

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let start = 0
        const end = numericValue
        const duration = 2000 // 2 seconds
        const increment = end / (duration / 16) // 60fps

        const counter = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isInView, numericValue, delay])

  const formatValue = (num: number) => {
    if (value.includes("%")) return `${num}%`
    if (value.includes("+")) return `${num}+`
    if (value.includes(",")) return num.toLocaleString()
    return num.toString()
  }

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{formatValue(count)}</div>
      <div className="text-sm sm:text-base text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}
