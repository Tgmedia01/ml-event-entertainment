"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://static.wixstatic.com/media/078d10_8f6d628f8f0144f899b823e2069b7752~mv2.jpg",
    alt: "Crowd at wedding reception",
  },
  {
    src: "https://static.wixstatic.com/media/078d10_1c1c1f727409403a9f733157f8646e33~mv2.jpg",
    alt: "DJ performance",
  },
  {
    src: "https://static.wixstatic.com/media/078d10_7908c6a084c8438b813b1f5e61919864~mv2.jpg",
    alt: "Photo booth experience",
  },
]

export function ExperienceGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">The Experience</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            Moments That <span className="italic text-primary">Move</span> You
          </h2>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Gallery */}
      <motion.div style={{ x }} className="flex gap-6 pl-6">
        {[...galleryImages, ...galleryImages].map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] aspect-[16/10] rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
