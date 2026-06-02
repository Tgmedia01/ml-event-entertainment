"use client"

import { motion } from "framer-motion"
import { Check, Camera, Printer, Smartphone, Sparkles } from "lucide-react"
import Link from "next/link"

const features = [
  { icon: Camera, title: "HD Photos & Boomerangs", description: "2x6 or 4x6 high definition prints plus boomerang videos your guests can share instantly." },
  { icon: Sparkles, title: "Beauty Filters", description: "B&W beauty filters and skin smooth technology make every guest look their best in every shot." },
  { icon: Printer, title: "Instant Prints", description: "Personalised keepsake prints on the spot. Guests walk away with a tangible memory from your day." },
  { icon: Smartphone, title: "Text & Email Sharing", description: "Instantly share to any device via text, email, and social media directly from the booth." },
]

const included = [
  "Modern open air photo booth with touchscreen display",
  "Choice of classic white front OR reflective mirror front",
  "Full backdrop selection (choose from 12+ options)",
  "Wedding props package included",
  "On site friendly attendant throughout your event",
  "2x6 or 4x6 HD photo prints",
  "Boomerang video mode",
  "Online gallery for all photos",
  "Text & email sharing",
  "Skin smooth beauty filters",
  "Personalised event branding on prints",
]

const backdrops = [
  { name: "Gold Sequin", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Gold-Sequin-.png" },
  { name: "Botanical Garden", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Botanical-Garden-.png" },
  { name: "Wedding Curtain", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Wedding-Curtain-.png" },
  { name: "Plain White", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/White-.png" },
  { name: "Gold Geometric", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Gold-Geometric-.png" },
  { name: "Green Screen", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Green-Screen-.png" },
  { name: "Black", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Black-.png" },
  { name: "White Geometric", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/White-Geometric-Texture-.png" },
  { name: "Red Brick Wall", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Red-Bricl-Wall-.png" },
  { name: "Golden Lattice", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Golden-Lattice-.png" },
  { name: "Champagne Glitter", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Champagne-Glitter-.png" },
  { name: "Golden Trefoils", src: "https://mlevententertainment.com/wp-content/uploads/2025/07/Golden-Trefoils-.png" },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export function PhotoBoothPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/photo-booth-couple-rings.png" alt="Newlyweds in photo booth" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/50 to-[#004563]/40" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Photo Booth</motion.p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              YOUR GUESTS WILL HAVE
              <br />
              <span className="italic text-[#789dbe] text-glow">THE TIME OF THEIR LIVES</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Booth Hardware */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Modern Photo Experience</p>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              Our photo booth is a modern style open air booth with cutting edge technology. Your guests will love
              sharing awesome pictures, boomerangs, and video messages as well as printing cool personalised
              wedding day keepsakes.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              One of the best reasons to have a photo booth is to keep your guests entertained during wedding
              downtime. At the majority of weddings, formal photos are taken during the cocktail hour. Our
              photo booth gives guests something fun and interactive to enjoy while they wait.
            </p>
            <p className="text-white/50 leading-relaxed">
              The slick, modern, interactive touchscreen display looks picture perfect in any venue. Available
              with a classic white front OR our popular reflective mirror front ensuring the perfect selfie
              every time. Plus it does not take up too much space, making it the ultimate centerpiece for your reception.
            </p>
          </motion.div>

          {/* Booth hardware image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://mlevententertainment.com/wp-content/uploads/2025/07/Ml-Event-Photobooth.png"
                alt="ML Event Entertainment Photo Booth"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  const t = e.target as HTMLImageElement
                  t.src = "/images/photo-booth-mirror.png"
                }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 glass rounded-full px-6 py-3"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#789dbe]">White & Mirror Front Options</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Props gallery */}
      <section className="py-16 px-6 lg:px-16 bg-[#004563]/5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {[
            { src: "/images/photo-booth-group-props.png", caption: "Fun for everyone" },
            { src: "/images/photo-booth-props-married.png", caption: "Wedding props included" },
            { src: "/images/photo-booth-props-cheers.png", caption: "Huge props selection" },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="relative aspect-square rounded-2xl overflow-hidden group">
              <img src={item.src} alt={item.caption} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/80 to-transparent" />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="absolute bottom-5 left-5 text-white/80 text-xs uppercase tracking-[0.2em]"
              >
                {item.caption}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Features</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            EVERYTHING
            <br />
            <span className="italic text-[#789dbe]">INCLUDED</span>
          </h2>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="glass rounded-2xl p-8 flex gap-6">
              <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 text-[#789dbe]" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="glass rounded-2xl p-8 lg:p-12 max-w-3xl">
          <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">What You Get</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#789dbe] flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Backdrops */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#004563]/10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Choose Your Style</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            12 BACKDROP
            <br />
            <span className="italic text-[#789dbe]">OPTIONS</span>
          </h2>
          <p className="text-white/50 mt-6 max-w-2xl leading-relaxed">
            Choose the backdrop that matches your venue aesthetic and wedding colors.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {backdrops.map((backdrop) => (
            <motion.div key={backdrop.name} variants={itemVariants} whileHover={{ scale: 1.04 }} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3">
                <img
                  src={backdrop.src}
                  alt={backdrop.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.jpg" }}
                />
                <div className="absolute inset-0 bg-[#789dbe]/0 group-hover:bg-[#789dbe]/20 transition-all duration-300" />
              </div>
              <p className="text-white/50 text-xs text-center group-hover:text-white transition-colors duration-300">{backdrop.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="mt-12 glass rounded-2xl p-8 max-w-2xl">
          <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-3">Good To Know</p>
          <p className="text-white/60 leading-relaxed">
            Our photo booth can be booked as a standalone service or as part of our Ultimate Reception and
            Ultimate Full Service wedding packages for a multi service discount.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508] text-center border-t border-[#789dbe]/10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Add the <span className="italic text-[#789dbe]">Photo Booth?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">Get in touch today and let us build the perfect package for your event.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="/get-quote" className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500">
              Request Pricing
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
