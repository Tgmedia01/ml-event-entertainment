"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const stats = [
  { number: "500+", label: "Weddings" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "5-Star Reviews" },
  { number: "1", label: "Hall of Fame" },
]

const awards = [
  { name: "The Knot Hall of Fame", year: "2024" },
  { name: "The Knot Best of Weddings", year: "2020-2025" },
  { name: "WeddingWire Couples' Choice", year: "2019-2025" },
  { name: "Charleston Choice Award", year: "2023" },
]

export function AboutPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pb-16 lg:pb-24 pt-32">
        <div className="absolute inset-0">
          <img
            src="/wedding-dj-mikey-lee-at-console-professional-portrai.jpg"
            alt="Mikey Lee - ML Event Entertainment Founder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/70 to-[#004563]/50" />
        </div>

        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.85]">
              THE ART OF
              <br />
              <span className="italic text-[#789dbe] text-glow">THE VIBE</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-[#789dbe]/10 bg-[#004563]/20">
        <div className="px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-serif text-4xl md:text-5xl text-[#789dbe] mb-2">{stat.number}</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Meet Mikey Lee</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
                A Charleston
                <br />
                <span className="italic text-[#789dbe]">Institution</span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  ML Event Entertainment is more than a DJ company—it&apos;s a Charleston institution built on passion,
                  precision, and an unwavering commitment to creating unforgettable celebrations.
                </p>
                <p>
                  Founded by Mikey Lee, we&apos;ve earned recognition as a &ldquo;The Knot Hall of Fame&rdquo; inductee
                  and multi-year &ldquo;Couples&apos; Choice&rdquo; winner. But awards aside, our true measure of
                  success is the energy on your dance floor and the memories your guests carry home.
                </p>
                <p>
                  We don&apos;t just &ldquo;play music.&rdquo; We curate the energy, handle the timeline, and ensure
                  every guest leaves saying it was the best wedding they&apos;ve ever attended.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/wedding-dj-setup-premium-equipment-qsc-speakers-pion.jpg"
                  alt="Premium DJ Equipment Setup"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass rounded-xl p-6 glow">
                <p className="text-[#789dbe] text-xs uppercase tracking-[0.2em] mb-2">Equipment</p>
                <p className="text-white font-serif text-lg">QSC • Pioneer • Chauvet</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-[#004563]/10">
        <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-8">Our Philosophy</p>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-8">
              &ldquo;Every celebration deserves a soundtrack that moves the soul and memories that last forever.&rdquo;
            </blockquote>
            <p className="text-[#789dbe] text-sm uppercase tracking-[0.2em]">— Mikey Lee, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Recognition</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              Awards & <span className="italic text-[#789dbe]">Accolades</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-6 border-b border-[#789dbe]/20"
              >
                <span className="font-serif text-xl md:text-2xl text-white">{award.name}</span>
                <span className="text-[#789dbe] text-sm uppercase tracking-[0.2em]">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-t from-[#004563]/20 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Ready to Create <span className="italic text-[#789dbe]">Magic?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Let&apos;s discuss how we can make your celebration unforgettable.
            </p>
            <Link
              href="/get-quote"
              className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.5)]"
            >
              Check Availability
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
