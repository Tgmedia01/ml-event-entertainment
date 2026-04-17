"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "ML Event Entertainment made our wedding absolutely unforgettable. The dance floor was packed all night and our guests are STILL talking about it months later.",
    author: "Sarah & Michael",
    event: "Charleston Wedding",
  },
  {
    quote: "From the initial consultation to the last song of the night, Mikey was professional, creative, and genuinely invested in making our day perfect. Couldn't recommend more highly.",
    author: "Emily & James",
    event: "Kiawah Island Wedding",
  },
  {
    quote: "The lighting transformed our venue into something out of a dream. Combined with the energy behind the decks, it was pure magic from start to finish.",
    author: "Amanda & David",
    event: "Downtown Charleston Reception",
  },
  {
    quote: "We had so many guests say it was the best wedding they had ever been to. That is entirely down to Mikey reading the room and keeping everyone on the floor all night.",
    author: "Lauren & Chris",
    event: "Charleston Plantation Wedding",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-24 lg:py-48 bg-[#030508] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#004563]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16 max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-20"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Kind Words</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            WHAT OUR
            <br />
            <span className="italic text-[#789dbe]">COUPLES SAY</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="mb-10 lg:mb-16"
          >
            <p className="font-serif text-6xl sm:text-7xl lg:text-[120px] leading-none text-[#789dbe]/20 -ml-2 select-none">&ldquo;</p>
            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-snug -mt-4 sm:-mt-6 lg:-mt-8 mb-8 max-w-4xl">
              {testimonials[current].quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-8 h-[0.5px] bg-[#789dbe]" />
              <div>
                <p className="text-[#789dbe] text-sm uppercase tracking-[0.2em]">{testimonials[current].author}</p>
                <p className="text-white/30 text-xs uppercase tracking-[0.15em] mt-1">{testimonials[current].event}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4 flex-wrap">
          <button onClick={prev} className="w-11 h-11 rounded-full border border-[#789dbe]/30 flex items-center justify-center hover:border-[#789dbe] hover:bg-[#789dbe]/10 transition-all duration-300" aria-label="Previous">
            <ChevronLeft className="w-4 h-4 text-[#789dbe]" />
          </button>
          <button onClick={next} className="w-11 h-11 rounded-full border border-[#789dbe]/30 flex items-center justify-center hover:border-[#789dbe] hover:bg-[#789dbe]/10 transition-all duration-300" aria-label="Next">
            <ChevronRight className="w-4 h-4 text-[#789dbe]" />
          </button>
          <div className="flex gap-2 ml-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-[2px] transition-all duration-500 ${index === current ? "w-8 bg-[#789dbe]" : "w-2 bg-[#789dbe]/30"}`}
              />
            ))}
          </div>
          <p className="ml-auto text-white/20 text-xs uppercase tracking-[0.3em]">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
