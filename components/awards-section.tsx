"use client"

import { motion } from "framer-motion"

const awards = [
  { src: "/images/award-the-knot-hall-of-fame.png", alt: "The Knot Hall of Fame", href: "https://www.theknot.com/marketplace/ml-event-entertainment-hanahan-sc-2040669" },
  { src: "/images/award-the-knot-best-weddings.png", alt: "The Knot Best of Weddings", href: "https://www.theknot.com/marketplace/ml-event-entertainment-hanahan-sc-2040669" },
  { src: "/images/award-weddingwire-couples-choice.png", alt: "WeddingWire Couples Choice", href: "https://www.weddingwire.com/reviews/ml-event-entertainment/9456544ce61db414.html" },
  { src: "https://mlevententertainment.com/wp-content/uploads/2025/06/Charleston-Choice-Email-Signature-Logo-300px-1.png", alt: "Charleston's Choice Winner", href: "#" },
]

export function AwardsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#030508]">
      <div className="px-6 lg:px-16 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-16"
        >
          Award Winning Service
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20 items-center justify-items-center">
          {awards.map((award, index) => (
            <motion.a
              key={index}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="group"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="h-32 lg:h-40 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
