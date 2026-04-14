"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consult",
    description:
      "We start with a conversation. Tell us your vision, your must-play songs, your do-not-play list, and everything in between. This is where we learn your story.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Our team crafts a custom timeline and entertainment strategy. From ceremony to send-off, every moment is choreographed to flow seamlessly.",
  },
  {
    number: "03",
    title: "Party",
    description:
      "On your big day, we handle everything. You focus on celebrating while we create an atmosphere that keeps the energy high and the memories unforgettable.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-32 lg:py-48 bg-[#030508] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#004563]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 lg:mb-32 max-w-4xl"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">The Workflow</p>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
            HOW WE
            <br />
            <span className="italic text-[#789dbe]">WORK</span>
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[0.5px] bg-gradient-to-r from-[#789dbe]/30 to-transparent z-0" />
              )}

              <div className="glass rounded-3xl p-8 lg:p-10 h-full relative z-10 group-hover:bg-[#789dbe]/5 transition-colors duration-500">
                {/* Number */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif text-7xl lg:text-8xl text-[#789dbe]/20 leading-none group-hover:text-[#789dbe]/40 transition-colors duration-500">
                    {step.number}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#789dbe] mt-4 group-hover:shadow-[0_0_20px_rgba(120,157,190,0.5)] transition-shadow duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-3xl lg:text-4xl text-white mb-4">{step.title}</h3>
                <p className="text-white/50 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a
            href="#contact"
            data-cursor="pointer"
            className="inline-flex items-center gap-6 px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.4)]"
          >
            Start Your Consultation
          </a>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
