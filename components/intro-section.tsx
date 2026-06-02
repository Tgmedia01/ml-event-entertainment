"use client"

import { motion } from "framer-motion"

const stats = [
  { number: "20+", label: "Years Experience" },
  { number: "1000+", label: "Events Performed" },
  { number: "10x", label: "Award Winner" },
  { number: "5★", label: "Rated Across All Platforms" },
]

export function IntroSection() {
  return (
    <section className="relative bg-[#030508] py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004563]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.4em] mb-3">ML Event Entertainment</p>
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-6">Professional DJ Company Based in Charleston, SC</p>

            <p className="text-white/70 text-lg leading-relaxed mb-4">
              ML Event Entertainment provides exceptional DJ services, sound, lighting, photo booth, and visual
              effects for weddings and special events throughout the Lowcountry.
            </p>
            <p className="text-white/50 leading-relaxed">
              Led by Mikey Lee, a Hall of Fame inductee with nearly two decades of experience across Europe,
              the US, and aboard the world&apos;s largest cruise ships, we do not just turn up and play music.
              We take ownership of your event from the first song to the last.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 lg:p-8 text-center group hover:bg-[#789dbe]/5 transition-colors duration-500"
              >
                <p className="font-serif text-4xl lg:text-5xl text-[#789dbe] mb-3 text-glow">{stat.number}</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em] leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
