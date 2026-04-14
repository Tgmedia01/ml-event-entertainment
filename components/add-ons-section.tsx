"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Camera, Lightbulb } from "lucide-react"

const addOns = [
  {
    icon: Sparkles,
    title: "Cold Sparks",
    subtitle: "Dramatic Moments",
    description:
      "Create breathtaking fountain effects for grand entrances, first dances, or send-offs. Safe, smokeless, and absolutely stunning.",
    image: "/images/hero-20image.jpg",
  },
  {
    icon: Camera,
    title: "360° Photo Booth",
    subtitle: "Immersive Captures",
    description:
      "Step into the spotlight with our slow-motion 360° video booth. Instant sharing, custom overlays, and unforgettable content.",
    image: "/images/photobooth-addons.jpg",
  },
  {
    icon: Lightbulb,
    title: "Uplighting",
    subtitle: "Ambient Design",
    description:
      "Transform your venue with wireless LED uplighting in any color. Match your palette, create drama, set the perfect mood.",
    image: "/images/photobooth2.jpg",
  },
]

export function AddOnsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"])

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-[#004563]/20">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#789dbe]/10 rounded-full blur-[150px] pointer-events-none" />

        {/* Header */}
        <div className="absolute top-24 left-8 lg:left-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-4">Enhance Your Event</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9]">
              ADD-<span className="italic text-[#789dbe]">ONS</span>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[500px]">
          <motion.div style={{ x }} className="flex gap-8 pl-8 lg:pl-16 h-full" data-cursor="pointer">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] h-full"
              >
                <div className="glass rounded-3xl h-full p-8 lg:p-12 flex flex-col justify-between group hover:bg-[#789dbe]/5 transition-colors duration-500 relative overflow-hidden">
                  <img
                    src={addon.image || "/placeholder.svg"}
                    alt={addon.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center mb-6">
                      <addon.icon className="w-6 h-6 text-[#789dbe]" />
                    </div>
                    <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-2">{addon.subtitle}</p>
                    <h3 className="font-serif text-4xl lg:text-5xl text-white">{addon.title}</h3>
                  </div>

                  <div className="relative z-10">
                    <p className="text-white/50 text-lg leading-relaxed mb-8">{addon.description}</p>
                    <div className="flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em]">
                      <span className="group-hover:text-white transition-colors duration-300">Add to Package</span>
                      <span className="w-8 h-[0.5px] bg-[#789dbe] group-hover:w-16 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <span className="text-[#3f566d] text-xs uppercase tracking-[0.3em]">Scroll to explore</span>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-[0.5px] bg-[#789dbe]"
          />
        </div>
      </div>
    </section>
  )
}
