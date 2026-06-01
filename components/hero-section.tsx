"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative h-screen w-full overflow-hidden max-w-full">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/wedding-dance-floor-couple.png"
      >
        <source
          src="https://mlevententertainment.com/wp-content/uploads/2025/06/ml-event-entertainment-charleston-dj-services-video.mp4"
          type="video/mp4"
        />
        {/* Fallback image if video fails */}
        <img
          src="/images/wedding-dance-floor-couple.png"
          alt="ML Event Entertainment Wedding Reception"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </video>

      {/* Deep Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/70 via-[#030508]/50 to-[#030508]" />

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#789dbe]/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Content */}
      <motion.div style={{ opacity, y }} className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 lg:px-16">
        <div className="max-w-none">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-8"
          >
            Charleston&apos;s Premier Event DJs
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[0.85] tracking-tight break-words"
          >
            <br />
            <span className="italic text-[#789dbe] text-glow">THAN JUST TURN UP</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 lg:mt-0 lg:absolute lg:right-16 lg:bottom-32 max-w-md pr-4 lg:pr-0"
          >
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Charleston&apos;s Premier Event DJs</p>
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

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/30 to-transparent" />
    </section>
  )
}
