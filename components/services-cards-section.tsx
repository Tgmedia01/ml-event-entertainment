"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Weddings",
    description: "From ceremony to send-off we handle your timeline, read the room, and keep every guest on the dance floor. Perfected over 1000+ weddings.",
    image: "/images/wedding-dance-floor-couple.png",
    href: "/services/weddings",
    cta: "View Wedding Packages",
  },
  {
    number: "02",
    title: "Corporate Events",
    description: "Professionalism, top-tier sound, and an atmosphere that strikes the perfect balance between energy and elegance from company parties to awards ceremonies.",
    image: "/images/dj-booth-venue-setup.png",
    href: "/services/corporate",
    cta: "Learn More",
  },
  {
    number: "03",
    title: "Photo Booth",
    description: "Modern open-air booth with touchscreen display, instant HD prints, and digital sharing. Available with 12+ backdrop options a centerpiece your guests will never leave.",
    image: "/images/photo-booth-group-props.png",
    href: "/services/photo-booth",
    cta: "View Photo Booth",
  },
]

export function ServicesCardsSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#030508] overflow-hidden w-full">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#004563]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">What We Offer</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            OUR
            <br />
            <span className="italic text-[#789dbe]">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link href={service.href} className="group block" data-cursor="pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{willChange: "transform"}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#789dbe]/0 group-hover:bg-[#789dbe]/10 transition-colors duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="font-serif text-5xl text-white/20 group-hover:text-[#789dbe]/40 transition-colors duration-500 leading-none">
                      {service.number}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#789dbe]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#789dbe]">
                    <ArrowUpRight className="w-4 h-4 text-[#789dbe]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-3 group-hover:text-[#789dbe] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-3 text-[#789dbe] text-xs uppercase tracking-[0.2em]">
                    {service.cta}
                    <span className="w-6 h-[0.5px] bg-[#789dbe] group-hover:w-12 transition-all duration-500" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
