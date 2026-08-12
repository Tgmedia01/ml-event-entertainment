"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Reception Package",
    subtitle: "Also Includes Cocktail Hour & Dinner Hour Music",
    features: [
      "Up to five hours of services",
      "Personal online music planning tools",
      "Clean music edits",
      "Cocktail & dinner hour music",
      "Announcing all wedding day events",
      "Elegant DJ booth & linens",
      "Dance floor lighting included",
      "Handheld wireless microphones",
      "Liability insurance",
    ],
    popular: false,
  },
  {
    name: "Full Service Package",
    subtitle: "Includes Everything In Reception Plus Ceremony",
    features: [
      "Up to six hours of DJ/MC services",
      "Guest arrival music (up to 1 hour before)",
      "All ceremony music",
      "Lapel microphone for officiant",
      "Wireless ceremony microphone",
      "Cocktail & dinner hour music",
      "Announcing all wedding day events",
      "Elegant DJ booth & linens",
      "Dance floor party lighting",
      "Two handheld wireless microphones",
      "Flexible payment & e-signing",
      "Liability insurance",
      "Setup, breakdown & travel fees",
    ],
    popular: false,
  },
  {
    name: "Ultimate Reception",
    subtitle: "Multi-Service Discount Package",
    features: [
      "Everything in Reception Package, plus:",
      "3hr Photo Booth with backdrops, props & attendant",
      "10ft Cold Spark Machines",
      "16 Wireless Venue Uplighting uplights",
      "Enhanced Dance Floor Lighting",
    ],
    popular: false,
    isBundle: false,
  },
  {
    name: "Ultimate Full Service",
    subtitle: "Multi-Service Discount Package",
    features: [
      "Everything in Full Service Package, plus:",
      "3hr Photo Booth with backdrops, props & attendant",
      "10ft Cold Spark Machines",
      "16 Wireless Venue Uplighting uplights",
      "Enhanced Dance Floor Lighting",
    ],
    popular: true,
    isBundle: false,
  },
]

export function PackagesSection() {
  return (
    <section id="packages" className="relative py-24 lg:py-32 bg-[#030508] overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#004563]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Investment</p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            WEDDING DJ
            <br />
            <span className="italic text-[#789dbe]">PACKAGES</span>
          </h2>
          <p className="text-white/50 text-base mt-6 max-w-2xl leading-relaxed">
            All packages include setup, breakdown, travel, and taxes plus clean music edits, online planning tools,
            and full insurance. Flexible payment and e-signing available.
          </p>
        </motion.div>

        <div className="packages-grid grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8 max-w-5xl">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative glass rounded-2xl p-6 lg:p-8 ${pkg.popular ? "border-[#789dbe]/50 glow" : ""} `}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#789dbe] text-[#030508] px-4 py-1.5 rounded-full whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  <span className="text-xs uppercase tracking-wider font-medium">Most Popular</span>
                </div>
              )}
              <div className="mb-5">
                <h3 className="font-serif text-xl lg:text-2xl text-white mb-2">{pkg.name}</h3>
                <p className="text-[#789dbe] text-xs leading-snug">{pkg.subtitle}</p>
              </div>
              <ul className="space-y-2.5 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#789dbe] flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/get-quote"
                className={`block w-full text-center py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ${
                  pkg.popular
                    ? "bg-[#789dbe] text-[#030508] hover:bg-white"
                    : "border border-[#789dbe] text-[#789dbe] hover:bg-[#789dbe]/10"
                }`}
              >
                Request Pricing
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 mb-4 text-sm">Need something custom?</p>
          <Link href="/get-quote" className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group">
            <span className="group-hover:text-white transition-colors duration-300">Let&apos;s Build Your Perfect Package</span>
            <span className="w-8 h-[0.5px] bg-[#789dbe] group-hover:w-16 transition-all duration-500" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
