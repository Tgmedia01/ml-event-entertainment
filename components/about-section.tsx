"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Trophy, Star, Medal } from "lucide-react"

const awardLogos = [
  {
    icon: Medal,
    text: "Hall of Fame",
  },
  {
    icon: Trophy,
    text: "Best of Weddings",
  },
  {
    icon: Award,
    text: "Couples' Choice",
  },
  {
    icon: Star,
    text: "Charleston Choice",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen bg-[#030508]">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left - Fixed Title */}
        <div className="relative flex items-center justify-center p-6 lg:p-16 lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight">
              THE
              <br />
              ART
              <br />
              OF THE
              <br />
              <span className="italic text-[#789dbe] text-glow">VIBE.</span>
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {awardLogos.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-[#789dbe]/20"
                >
                  <award.icon className="h-8 w-8 text-[#789dbe]" />
                  <span className="text-white/70 text-xs uppercase tracking-wider">{award.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Decorative line */}
          <div className="absolute bottom-16 left-16 w-[0.5px] h-32 bg-gradient-to-b from-[#789dbe]/50 to-transparent hidden lg:block" />
        </div>

        {/* Right - Scrolling Content */}
        <div className="relative flex flex-col justify-center p-6 lg:p-16 lg:py-32 space-y-24">
          <motion.div style={{ y }} className="space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <p className="text-white/80 text-xl leading-relaxed mb-6">
                ML Event Entertainment is a Charleston institution. Led by Mikey Lee, we are a &ldquo;The Knot Hall of
                Fame&rdquo; inductee and multi-year &ldquo;Couples&apos; Choice&rdquo; winner.
              </p>
              <p className="text-white/50 leading-relaxed">
                We don&apos;t just &ldquo;play music&rdquo;—we curate the energy, handle the timeline, and ensure that
                every guest leaves saying it was the best wedding they&apos;ve ever attended.
              </p>
            </motion.div>

            {/* Audio Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass rounded-2xl p-8 max-w-lg glow"
            >
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Audio Excellence</p>
              <h3 className="font-serif text-2xl text-white mb-4">Premium Sound Systems</h3>
              <p className="text-white/50 leading-relaxed">
                We utilize premium, industry-standard sound and lighting (QSC, Pioneer, Chauvet) for flawless execution.
                From intimate gatherings to grand ballrooms, our sound engineering creates the perfect acoustic
                environment.
              </p>
            </motion.div>

            {/* Visual Artistry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass rounded-2xl p-8 max-w-lg"
            >
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Visual Artistry</p>
              <h3 className="font-serif text-2xl text-white mb-4">Lighting & Atmosphere</h3>
              <p className="text-white/50 leading-relaxed">
                Transform your space with our intelligent lighting design. From elegant uplighting that bathes your
                venue in your wedding colors to dramatic cold spark fountains that create movie-moment send-offs,
                we&apos;re masters of visual atmosphere.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-4">Our Philosophy</p>
              <p className="font-serif text-3xl text-white leading-snug">
                &ldquo;Every celebration deserves a soundtrack that moves the soul and memories that last
                forever.&rdquo;
              </p>
              <p className="text-[#789dbe] text-sm mt-6">— Mikey Lee, Founder</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
