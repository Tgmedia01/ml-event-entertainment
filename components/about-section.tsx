"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const awards = [
  { src: "/the-knot-hall-of-fame-gold-badge.jpg", alt: "The Knot Hall of Fame" },
  { src: "/the-knot-best-of-weddings-2025-badge.jpg", alt: "The Knot Best of Weddings 2025" },
  { src: "/weddingwire-couples-choice-award.jpg", alt: "WeddingWire Couples Choice Award" },
  { src: "/charleston-choice-award-badge.jpg", alt: "Charleston Choice Award" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen bg-[#030508]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Sticky Title */}
        <div className="relative flex items-center justify-center p-6 lg:p-16 lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight">
              THE
              <br />
              ART
              <br />
              OF THE
              <br />
              <span className="italic text-[#789dbe] text-glow">VIBE.</span>
            </h2>

            {/* Award Badges */}
            <div className="mt-12 grid grid-cols-2 gap-3">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-lg bg-white/5 border border-[#789dbe]/20 p-2 flex items-center justify-center"
                >
                  <img
                    src={award.src}
                    alt={award.alt}
                    className="h-16 w-auto object-contain opacity-90"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="absolute bottom-16 left-16 w-[0.5px] h-32 bg-gradient-to-b from-[#789dbe]/50 to-transparent hidden lg:block" />
        </div>

        {/* Right Scrolling Content */}
        <div className="relative flex flex-col justify-center p-6 lg:p-16 lg:py-32 space-y-24">
          <motion.div style={{ y }} className="space-y-24">

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <p className="text-white/80 text-xl leading-relaxed mb-6">
                ML Event Entertainment provides exceptional music, sound, lighting, photo booth and visual effect services
                for weddings and special events throughout the Lowcountry.
              </p>
              <p className="text-white/50 leading-relaxed">
                Your event means the world to us. That is why we believe in getting to know you, your music taste, and your
                vision. Our key value is to guarantee a celebration of unforgettable fun and lasting memories no matter
                how big or small.
              </p>
            </motion.div>

            {/* Mikey Lee Bio */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass rounded-2xl p-8 max-w-lg glow"
            >
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Meet Your DJ</p>
              <h3 className="font-serif text-2xl text-white mb-4">Mikey Lee</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Mikey Lee is the founder and lead DJ of ML Event Entertainment, bringing over 15 years of full-time DJ
                experience to weddings, private events, and parties around the world. His career has taken him across
                Europe, the United States, and aboard some of the largest cruise ships sailing today covering London,
                Ibiza, Miami, and Los Angeles along the way.
              </p>
              <p className="text-white/50 leading-relaxed">
                After meeting his now wife, Katelin, Mikey made the move to Charleston, South Carolina a city that
                inspired him to launch his own company. What began as a passion project quickly grew into one of the
                Lowcountry's most awarded entertainment services.
              </p>
            </motion.div>

            {/* Audio Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass rounded-2xl p-8 max-w-lg"
            >
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Audio Excellence</p>
              <h3 className="font-serif text-2xl text-white mb-4">Premium Sound Systems</h3>
              <p className="text-white/50 leading-relaxed">
                We utilise premium, industry-standard sound and lighting QSC, Pioneer, and Chauvet for flawless
                execution at every event. From intimate gatherings to grand ballrooms, our sound engineering creates
                the perfect acoustic environment so every song lands exactly as it should.
              </p>
            </motion.div>

            {/* Visual Artistry */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass rounded-2xl p-8 max-w-lg"
            >
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-4">Visual Artistry</p>
              <h3 className="font-serif text-2xl text-white mb-4">Lighting &amp; Atmosphere</h3>
              <p className="text-white/50 leading-relaxed">
                Transform your space with our intelligent lighting design. From elegant uplighting that bathes your
                venue in your wedding colors to dramatic cold spark fountains for movie-moment send-offs, we are
                masters of visual atmosphere that makes every photograph and every memory more vivid.
              </p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-4">Recognition</p>
              <p className="text-white/70 text-lg leading-relaxed mb-4">
                Under Mikey's leadership, ML Event Entertainment has earned a reputation for exceptional service and
                unforgettable events receiving The Knot and WeddingWire's Best of Weddings and Couples' Choice Hall
                of Fame awards, as well as being voted Charleston's Choice for Best Party Entertainment by The Post &amp; Courier.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-lg"
            >
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-4">Our Philosophy</p>
              <p className="font-serif text-3xl text-white leading-snug">
                &ldquo;Every celebration deserves a soundtrack that moves the soul and memories that last forever.&rdquo;
              </p>
              <p className="text-[#789dbe] text-sm mt-6">— Mikey Lee, Founder</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
