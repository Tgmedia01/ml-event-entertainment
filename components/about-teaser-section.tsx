"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AboutTeaserSection() {
  return (
    <section className="relative bg-[#030508] overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[70vh]">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative min-h-[50vh] lg:min-h-full"
        >
          <img
            src="/images/mikey-lee-mc-microphone.png"
            alt="Mikey Lee ML Event Entertainment"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030508] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] to-transparent lg:hidden" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex items-center p-8 lg:p-16 xl:p-24"
        >
          <div className="max-w-lg">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">The Man Behind The Music</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-8">
              MEET
              <br />
              <span className="italic text-[#789dbe]">MIKEY LEE</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Nearly two decades of full time DJ experience across London, Ibiza, Miami, Los Angeles, and aboard
              the world&apos;s largest cruise ships, all leading to Charleston where Mikey built one of the
              Lowcountry&apos;s most awarded entertainment companies.
            </p>
            <p className="text-white/40 leading-relaxed mb-10">
              The Knot Hall of Fame inductee. WeddingWire Couples Choice. Charleston&apos;s Choice for Best
              Party Entertainment. But the real measure of success is the energy on your dance floor.
            </p>
            <Link
              href="/about"
              data-cursor="pointer"
              className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
            >
              <span className="group-hover:text-white transition-colors duration-300">Our Full Story</span>
              <span className="w-12 h-[0.5px] bg-[#789dbe] group-hover:w-20 transition-all duration-500" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
