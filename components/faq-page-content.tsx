"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    category: "Booking & Pricing",
    questions: [
      {
        question: "How do we secure our date?",
        answer:
          "A signed contract and a non-refundable retainer are required to officially lock in your date. We recommend booking 6-12 months in advance for peak wedding season dates.",
      },
      {
        question: "Do you provide a contract and insurance?",
        answer:
          "Yes, we are a fully licensed and insured LLC. We provide professional contracts for every event to protect your investment. Our liability insurance meets or exceeds venue requirements.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "Our packages are customized based on your specific needs, event duration, and services required. We offer transparent pricing with no hidden fees. Contact us for a personalized quote.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes, we require a 25% non-refundable retainer to secure your date. The remaining balance is due two weeks before your event.",
      },
    ],
  },
  {
    category: "Music & Planning",
    questions: [
      {
        question: "Can we choose our own music?",
        answer:
          "Absolutely. You receive a private planning portal to curate your 'Must Play' and 'Do Not Play' lists. We encourage you to share your vision while also trusting our expertise to read the room.",
      },
      {
        question: "Do you take requests during the event?",
        answer:
          "We work with you beforehand to establish guidelines for guest requests. We can accommodate requests that fit your vision or politely redirect if they don't align with your preferences.",
      },
      {
        question: "Will you serve as MC for our reception?",
        answer:
          "Yes, all of our DJs are experienced MCs. We handle introductions, announcements, and timeline coordination seamlessly while keeping the energy flowing.",
      },
      {
        question: "How do you handle the timeline?",
        answer:
          "We work closely with your wedding planner and vendors to create a seamless timeline. Our DJs are experts at keeping everything on track while maintaining flexibility for special moments.",
      },
    ],
  },
  {
    category: "Equipment & Setup",
    questions: [
      {
        question: "What equipment do you use?",
        answer:
          "We utilize premium, industry-standard sound and lighting (QSC, Pioneer, Chauvet) for flawless execution. Our equipment is regularly maintained and we always bring backup gear.",
      },
      {
        question: "How early do you arrive for setup?",
        answer:
          "We typically arrive 2-3 hours before the event start time to ensure proper setup and sound checks. This timing may vary based on venue requirements and the complexity of your setup.",
      },
      {
        question: "Do you have backup equipment?",
        answer:
          "Yes, we always bring backup equipment to every event. Our commitment to reliability means we're prepared for any situation to ensure your celebration goes smoothly.",
      },
      {
        question: "Can you work with our venue's existing sound system?",
        answer:
          "In most cases, we prefer to use our own professional equipment for optimal sound quality and reliability. However, we can integrate with venue systems when required.",
      },
    ],
  },
  {
    category: "Add-Ons",
    questions: [

      {
        question: "Are cold sparks safe for indoor venues?",
        answer:
          "Yes! Our cold spark machines are designed specifically for indoor use. They produce a stunning visual effect without the fire hazard of traditional sparklers, making them venue-friendly.",
      },
      {
        question: "Can we add uplighting to our package?",
        answer:
          "Absolutely. Uplighting transforms your venue with color and ambiance. We offer wireless LED fixtures that can be programmed to match your wedding colors and change throughout the evening.",
      },
    ],
  },
]

export function FAQPageContent() {
  const [openItems, setOpenItems] = useState<Record<string, number | null>>({})

  const toggleItem = (category: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Common Questions</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6">
              THE
              <br />
              <span className="italic text-[#789dbe] text-glow">DETAILS</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Everything you need to know about working with ML Event Entertainment for your special day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-8 pb-4 border-b border-[#789dbe]/20">
                {category.category}
              </h2>
              <div className="space-y-0">
                {category.questions.map((faq, index) => (
                  <div key={index} className="border-b border-[#789dbe]/10">
                    <button
                      onClick={() => toggleItem(category.category, index)}
                      className="w-full py-6 flex items-center justify-between text-left group"
                      data-cursor="pointer"
                    >
                      <span
                        className={`font-serif text-lg md:text-xl transition-colors duration-300 pr-8 ${
                          openItems[category.category] === index
                            ? "text-[#789dbe]"
                            : "text-white group-hover:text-[#789dbe]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-10 h-10 rounded-full border border-[#789dbe]/30 flex items-center justify-center transition-all duration-300 ${
                          openItems[category.category] === index
                            ? "bg-[#789dbe] border-[#789dbe]"
                            : "group-hover:border-[#789dbe]"
                        }`}
                      >
                        {openItems[category.category] === index ? (
                          <Minus className="w-4 h-4 text-[#030508]" />
                        ) : (
                          <Plus className="w-4 h-4 text-[#789dbe]" />
                        )}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openItems[category.category] === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-white/60 text-lg leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#004563]/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Still Have <span className="italic text-[#789dbe]">Questions?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              We&apos;re here to help. Reach out and let&apos;s chat about your celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="px-10 py-4 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500"
              >
                Contact Us
              </Link>
              <a
                href="mailto:hello@mlevententertainment.com"
                className="px-10 py-4 border border-[#789dbe] text-[#789dbe] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#789dbe]/10 transition-all duration-500"
              >
                Email Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
