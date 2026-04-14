"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 1.1])
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src="/images/hero-20image.jpg"
          alt="Wedding celebration with DJ and dancing"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/80 via-[#030508]/60 to-[#030508]" />

      {/* Subtle Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#789dbe]/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ opacity, y }} className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 lg:px-16">
        <div className="max-w-none">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-8"
          >
            Charleston&apos;s Premier Event Production
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.85] tracking-tight"
          >
            WE DO
            <br />
            <span className="italic text-[#789dbe] text-glow">MORE</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 lg:mt-0 lg:absolute lg:right-16 lg:bottom-32 max-w-md"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-4">Than just turn up</p>
            <p className="text-white/60 text-lg leading-relaxed">
              Award-winning DJs, immersive lighting, and unforgettable moments crafted for Charleston&apos;s most
              important celebrations.
            </p>
            <Link
              href="/get-quote"
              data-cursor="pointer"
              className="inline-flex items-center gap-4 mt-8 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
            >
              <span className="group-hover:text-white transition-colors duration-300">Check Availability</span>
              <span className="w-12 h-[0.5px] bg-[#789dbe] group-hover:w-20 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-[#789dbe]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Thin border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/30 to-transparent" />
    </section>
  )
}
