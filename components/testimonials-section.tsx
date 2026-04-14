"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "ML Event Entertainment made our wedding absolutely unforgettable. The dance floor was packed all night, and our guests are STILL talking about it months later!",
    author: "Sarah & Michael",
    event: "Charleston Wedding, 2024",
  },
  {
    quote:
      "From the initial consultation to the last song of the night, the team was professional, creative, and genuinely invested in making our day perfect.",
    author: "Emily & James",
    event: "Kiawah Island Wedding, 2024",
  },
  {
    quote:
      "The lighting transformed our venue into something out of a dream. Combined with the DJ's incredible energy, it was pure magic.",
    author: "Amanda & David",
    event: "Downtown Charleston Reception, 2025",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            What Our <span className="italic text-primary">Couples</span> Say
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
              <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-relaxed mb-8 text-balance">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="space-y-1">
                <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium">
                  {testimonials[current].author}
                </p>
                <p className="text-muted-foreground text-sm">{testimonials[current].event}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 border border-border hover:border-primary hover:text-primary transition-all duration-300 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
