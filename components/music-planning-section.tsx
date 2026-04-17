"use client"

import { motion } from "framer-motion"
import { Music, ListMusic, MicVocal, HeartHandshake } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Music,
    title: "Must Play List",
    description: "Build your essential floor-fillers the songs that absolutely cannot be missed.",
  },
  {
    icon: ListMusic,
    title: "Do Not Play List",
    description: "Keep the playlist exactly how you want it by flagging anything you do not want heard.",
  },
  {
    icon: HeartHandshake,
    title: "Special Moments",
    description: "Choose your first dance, ceremony music, cake cutting, introductions, and dedications all in one place.",
  },
  {
    icon: MicVocal,
    title: "Guest Requests",
    description: "Browse the most-requested wedding songs and allow guests to submit requests in advance.",
  },
]

export function MusicPlanningSection() {
  return (
    <section className="relative py-32 lg:py-48 bg-[#030508] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#004563]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">After Booking</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-8">
              YOUR MUSIC
              <br />
              <span className="italic text-[#789dbe]">YOUR WAY</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              Choosing the right music for your wedding can feel overwhelming but with ML Event Entertainment, it
              does not have to be.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              After booking, you receive your very own private online planning account. From the moment we save your
              date, you have full control over your event music: building playlists, flagging must-plays, and
              ensuring nothing you dislike ever gets played.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              Do not know where to start? Just pick the most important songs and let us do the rest. We will always
              navigate requests in a way that keeps your dance floor exactly where it should be packed and moving.
            </p>
            <Link
              href="/get-quote"
              data-cursor="pointer"
              className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
            >
              <span className="group-hover:text-white transition-colors duration-300">Start Planning</span>
              <span className="w-12 h-[0.5px] bg-[#789dbe] group-hover:w-20 transition-all duration-500" />
            </Link>
          </motion.div>

          {/* Right Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 group hover:bg-[#789dbe]/5 transition-colors duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-[#789dbe]/20 flex items-center justify-center mb-5 group-hover:bg-[#789dbe]/30 transition-colors duration-500">
                  <feature.icon className="w-5 h-5 text-[#789dbe]" />
                </div>
                <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 glass rounded-2xl p-8 lg:p-12 text-center"
        >
          <p className="text-[#789dbe] text-xs uppercase tracking-[0.4em] mb-4">Pro Tip</p>
          <p className="font-serif text-2xl lg:text-3xl text-white max-w-3xl mx-auto leading-snug">
            A great event DJ always navigates their way through song requests to suit the energy on your dance floor.
            Give your DJ creative control alongside your must-plays and watch the magic happen.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
