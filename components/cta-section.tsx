"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Link from "next/link"

export function CTASection() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return
    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMousePosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <section id="contact" className="relative py-32 md:py-48 px-8 bg-[#030508]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[#3f566d] uppercase tracking-[0.4em] text-xs mb-6">Let&apos;s Create Magic</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white mb-8 text-balance leading-[0.9]">
            Ready to Make Your Event{" "}
            <span className="italic text-[#789dbe] text-glow">Unforgettable?</span>
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Every celebration deserves a soundtrack. Let&apos;s discuss how we can bring your vision to life — from
            first dance to final song.
          </p>

          <motion.a
            ref={buttonRef}
            href="/get-quote"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            animate={{ x: mousePosition.x, y: mousePosition.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="relative inline-block px-16 py-6 bg-[#789dbe] text-[#030508] uppercase tracking-[0.2em] text-sm font-medium rounded-full overflow-hidden group"
            data-cursor="pointer"
          >
            <motion.span
              className="absolute inset-0 bg-white rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: isHovered ? 1.5 : 0, opacity: isHovered ? 0.2 : 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10">Check Availability</span>
            <motion.span
              className="absolute -inset-4 rounded-full pointer-events-none"
              animate={{
                boxShadow: isHovered
                  ? "0 0 60px rgba(120, 157, 190, 0.6), 0 0 100px rgba(120, 157, 190, 0.3)"
                  : "0 0 30px rgba(120, 157, 190, 0.2)",
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm">
            <a
              href="tel:4246539365"
              className="text-[#789dbe] hover:text-white transition-colors duration-300"
              data-cursor="pointer"
            >
              424.653.9365
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#789dbe]/40" />
            <a
              href="mailto:mikeylee@mlevententertainment.com"
              className="text-[#789dbe] hover:text-white transition-colors duration-300"
              data-cursor="pointer"
            >
              mikeylee@mlevententertainment.com
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#789dbe]/40" />
            <span>Charleston, SC 29464</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
