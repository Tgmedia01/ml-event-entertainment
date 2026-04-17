"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"

const teaserFaqs = [
  {
    question: "When should I book my date?",
    answer: "Charleston is one of the most popular wedding destinations in the US and certain months book up well in advance. We recommend booking as soon as you know your date it is 100% locked in once your deposit is paid.",
  },
  {
    question: "What does your DJ package include?",
    answer: "All packages include setup, breakdown, travel, clean music edits, online planning tools, and full insurance. Packages range from our Reception Package (5 hours, dance floor lighting, wireless mics) up to our Ultimate Full Service bundle which adds Photo Booth, Cold Sparks, and Venue Uplighting.",
  },
  {
    question: "Can we choose our own music?",
    answer: "Absolutely. After booking you receive a private online planning account to build your Must Play list, Do Not Play list, special moment songs, and dedications. If you have no idea where to start, just give us the important songs and we handle the rest.",
  },
  {
    question: "Do you provide a contract and insurance?",
    answer: "Yes. ML Event Entertainment is a fully licensed and insured LLC. Every booking includes a professional e-signature contract. We would never recommend booking any entertainer without one.",
  },
]

export function FAQTeaserSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-24 lg:py-40 bg-[#030508]">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#004563]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Common Questions</p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-8">
              GOT
              <br />
              <span className="italic text-[#789dbe]">QUESTIONS?</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-sm lg:text-base">
              Here are the questions we get asked most. For everything else, visit our full FAQ page.
            </p>
            <Link
              href="/faq"
              data-cursor="pointer"
              className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
            >
              <span className="group-hover:text-white transition-colors duration-300">View All FAQs</span>
              <span className="w-12 h-[0.5px] bg-[#789dbe] group-hover:w-20 transition-all duration-500" />
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {teaserFaqs.map((faq, index) => (
              <div key={index} className="border-b border-[#789dbe]/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`font-serif text-base sm:text-lg transition-colors duration-300 ${openIndex === index ? "text-[#789dbe]" : "text-white group-hover:text-[#789dbe]"}`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-[#789dbe]/30 flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-[#789dbe] border-[#789dbe]" : "group-hover:border-[#789dbe]"}`}>
                    {openIndex === index
                      ? <Minus className="w-3 h-3 text-[#030508]" />
                      : <Plus className="w-3 h-3 text-[#789dbe]" />
                    }
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-white/60 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
