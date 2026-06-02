"use client"

import { motion } from "framer-motion"
import { Mic2, Music2, Volume2, Star } from "lucide-react"
import Link from "next/link"

const eventTypes = [
  { title: "Company Parties", description: "End-of-year celebrations, summer parties, and team events that bring people together and leave a lasting impression." },
  { title: "Product Launches", description: "High-energy music and production that builds anticipation, creates atmosphere, and makes your launch moment unforgettable." },
  { title: "Awards Ceremonies", description: "Elegant soundscapes, seamless transitions, and MC services that give your awards evening the gravitas it deserves." },
  { title: "Conferences & Galas", description: "From arrival music to dinner service to after-party, we manage the full sonic journey of your corporate event." },
]

const features = [
  { icon: Music2, title: "Customised Music Selections", description: "Music tailored to your brand, your audience, and the mood you want to create not a generic playlist." },
  { icon: Volume2, title: "Premium Audio Equipment", description: "QSC sound systems, Pioneer DJ equipment and Chauvet lighting for flawless, professional-grade execution." },
  { icon: Mic2, title: "MC Services", description: "Professional announcements, introductions, and programme management to keep your event running smoothly." },
  { icon: Star, title: "Brand-Focused Presentation", description: "Every element of our setup is polished, professional, and reflects the high standards of your organisation." },
]

export function CorporatePageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/corporate-table-setup.png"
            alt="Corporate event entertainment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/60 to-[#004563]/40" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Corporate Events</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              ANYTHING BUT
              <br />
              <span className="italic text-[#789dbe] text-glow">ORDINARY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              When it comes to corporate events, ML Event Entertainment delivers professionalism, top-tier sound,
              and an unforgettable atmosphere striking the perfect balance between energy and elegance.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              We provide customised music selections, high-quality audio equipment, and a smooth, stress-free
              experience that reflects your brand and impresses your guests.
            </p>
            <p className="text-white/50 leading-relaxed">
              With ML Event Entertainment, your corporate event will be anything but ordinary expect great
              music, seamless execution, and a polished presentation from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#004563]/10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">We Cover</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            EVENT
            <br />
            <span className="italic text-[#789dbe]">TYPES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {eventTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 group hover:bg-[#789dbe]/5 transition-colors duration-500"
            >
              <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#789dbe] transition-colors duration-300">{type.title}</h3>
              <p className="text-white/50 leading-relaxed">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">What We Bring</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            THE FULL
            <br />
            <span className="italic text-[#789dbe]">PACKAGE</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 flex gap-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-[#789dbe]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508] text-center border-t border-[#789dbe]/10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let&apos;s Make Your Event <span className="italic text-[#789dbe]">Extraordinary</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Get in touch and tell us about your corporate event we&apos;ll handle the rest.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500">
            Get In Touch
          </Link>
        </motion.div>
      </section>
    </>
  )
}
