"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    title: "DJ Services",
    subtitle: "The Heartbeat",
    description:
      "More than music—we read the room, curate the moment, and keep the energy flowing from first dance to final song.",
    image: "/images/wedding-20dj.jpg",
    stats: "500+ Events",
  },
  {
    title: "Photo Booth",
    subtitle: "The Memories",
    description:
      "Our modern, open-air photo experience captures candid joy with instant prints and digital sharing your guests will love.",
    image: "/images/photobooth-203.jpg",
    stats: "Instant Prints",
  },
  {
    title: "Vibes & Energy",
    subtitle: "The Experience",
    description:
      "LED glow sticks, dance floor props, and interactive moments that transform guests into participants of something unforgettable.",
    image: "/images/486805890-1225907382869985-1453893794816927731-n.jpg",
    stats: "Full Immersion",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#030508] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#004563]/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">What We Do</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            OUR
            <br />
            <span className="italic text-[#789dbe]">SERVICES</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div
                className={`relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-transparent to-transparent opacity-60" />
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-[#789dbe]/0 group-hover:bg-[#789dbe]/10 transition-colors duration-500" />
                {/* Stats badge */}
                <div className="absolute bottom-6 left-6 glass rounded-full px-4 py-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-white">{service.stats}</span>
                </div>
              </div>

              <div className={`lg:py-16 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">{service.subtitle}</p>
                <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">{service.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed max-w-md">{service.description}</p>
                <Link
                  href="/services"
                  data-cursor="pointer"
                  className="inline-flex items-center gap-4 mt-8 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
                >
                  <span className="group-hover:text-white transition-colors duration-300">Learn More</span>
                  <span className="w-8 h-[0.5px] bg-[#789dbe] group-hover:w-16 transition-all duration-500" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
