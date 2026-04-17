"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Camera, Lightbulb, Music2 } from "lucide-react"

const addOns = [
  {
    icon: Sparkles,
    title: "Cold Sparks",
    subtitle: "Dramatic Moments",
    description:
      "Cold sparks are the ultimate wow factor producing a stunning fountain-like burst shooting 8 to 10ft high. Perfect for grand entrances, first dances, and send-offs. Completely safe for indoor and outdoor use with no heat, no smoke and no fire hazard.",
    image: "/images/cold-sparks-bride-groom.png",
  },
  {
    icon: Camera,
    title: "Photo Booth",
    subtitle: "Instant Memories",
    description:
      "Modern open-air booth with interactive touchscreen, instant HD prints, boomerangs, and digital sharing. Available with classic white or reflective mirror front, 12+ backdrop options, props, and a friendly on-site attendant.",
    image: "/images/photo-booth-group-props.png",
  },
  {
    icon: Lightbulb,
    title: "Venue Uplighting",
    subtitle: "Ambient Design",
    description:
      "100% wireless LED uplights transform any space with color matching your decor. Unique Party Mode pulses color to the beat once the dance floor opens. Weather-resistant and works indoors and outdoors.",
    image: "/images/mikey-davis-bride-uplighting.png",
  },
  {
    icon: Music2,
    title: "Dance Floor Lighting",
    subtitle: "Club Style Energy",
    description:
      "Dynamic synchronised lighting that pulses to the rhythm with colorful washes, strobes, and intelligent moving fixtures tailored to your event. Included as standard in all packages.",
    image: "/wedding-dj-party-dance-floor-crowd-celebration-pur.jpg",
  },
]

export function AddOnsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <>
      {/* Desktop: sticky horizontal scroll */}
      <section ref={containerRef} className="relative h-[400vh] bg-[#004563]/20 hidden lg:block">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#789dbe]/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="absolute top-32 left-8 lg:left-16 z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-4">Enhance Your Event</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9]">
                ADD<span className="italic text-[#789dbe]"> ONS</span>
              </h2>
            </motion.div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[500px]">
            <motion.div style={{ x }} className="flex gap-8 pl-8 lg:pl-16 h-full">
              {addOns.map((addon, index) => (
                <motion.div
                  key={addon.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-[38vw] h-full"
                >
                  <div className="glass rounded-3xl h-full p-8 lg:p-12 flex flex-col justify-between group hover:bg-[#789dbe]/5 transition-colors duration-500 relative overflow-hidden">
                    <img src={addon.image} alt={addon.title} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/80 to-transparent" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center mb-6">
                        <addon.icon className="w-6 h-6 text-[#789dbe]" />
                      </div>
                      <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-2">{addon.subtitle}</p>
                      <h3 className="font-serif text-4xl lg:text-5xl text-white">{addon.title}</h3>
                    </div>
                    <div className="relative z-10">
                      <p className="text-white/50 text-base leading-relaxed mb-8">{addon.description}</p>
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

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <span className="text-[#3f566d] text-xs uppercase tracking-[0.3em]">Scroll to explore</span>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }} className="w-8 h-[0.5px] bg-[#789dbe]" />
          </div>
        </div>
      </section>

      {/* Mobile & Tablet: stacked cards */}
      <section className="relative py-20 bg-[#030508] overflow-hidden lg:hidden">
        <div className="px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Enhance Your Event</p>
            <h2 className="font-serif text-5xl text-white leading-[0.85]">
              ADD<span className="italic text-[#789dbe]"> ONS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={addon.image} alt={addon.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508] to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#789dbe]/20 flex items-center justify-center">
                      <addon.icon className="w-4 h-4 text-[#789dbe]" />
                    </div>
                    <p className="text-[#789dbe] text-xs uppercase tracking-[0.2em]">{addon.subtitle}</p>
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-3">{addon.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{addon.description}</p>
                  <a href={addon.href} className="inline-flex items-center gap-3 text-[#789dbe] text-xs uppercase tracking-[0.2em] group">
                    <span className="group-hover:text-white transition-colors duration-300">Find out more</span>
                    <span className="w-6 h-[0.5px] bg-[#789dbe] group-hover:w-12 transition-all duration-500" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
