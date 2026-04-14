"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Do you provide a contract and insurance?",
    answer:
      "Yes, we are a fully licensed and insured LLC. We provide professional contracts for every event to protect your investment.",
  },
  {
    question: "How do we secure our date?",
    answer: "A signed contract and a non-refundable retainer are required to officially lock in your date.",
  },
  {
    question: "Can we choose our own music?",
    answer: "Absolutely. You receive a private planning portal to curate your 'Must Play' and 'Do Not Play' lists.",
  },
  {
    question: "What equipment do you use?",
    answer: "We utilize premium, industry-standard sound and lighting (QSC, Pioneer, Chauvet) for flawless execution.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 lg:py-48 bg-[#030508]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#004563]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-8 lg:px-16 max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Common Questions</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            THE
            <br />
            <span className="italic text-[#789dbe]">DETAILS</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#789dbe]/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
                data-cursor="pointer"
              >
                <span
                  className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${
                    openIndex === index ? "text-[#789dbe]" : "text-white group-hover:text-[#789dbe]"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`ml-4 flex-shrink-0 w-10 h-10 rounded-full border border-[#789dbe]/30 flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-[#789dbe] border-[#789dbe]" : "group-hover:border-[#789dbe]"
                  }`}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-[#030508]" />
                  ) : (
                    <Plus className="w-4 h-4 text-[#789dbe]" />
                  )}
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
                    <p className="pb-8 text-white/60 text-lg leading-relaxed max-w-2xl">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
