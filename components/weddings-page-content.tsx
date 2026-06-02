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
    ],
    popular: true,
    isBundle: false,
  },
]


const galleryImages = [
  { src: "/images/wedding-reception-crowd-tent.jpg", alt: "Packed wedding reception" },
  { src: "/images/wedding-couple-dancing-singing.jpg", alt: "Couple dancing and singing" },
  { src: "/images/wedding-first-dance-outdoor.jpg", alt: "First dance at outdoor venue" },
  { src: "/images/wedding-first-dance-dip-bw.jpg", alt: "Wedding dip kiss" },
  { src: "/images/bride-at-dj-decks.jpg", alt: "Bride having a go at the decks" },
  { src: "/images/wedding-cold-sparks-street.jpg", alt: "Cold sparks send-off" },
  { src: "/images/bride-heart-sunglasses-bw.png", alt: "Bride dancing in heart sunglasses" },
  { src: "/images/wedding-glow-sticks.png", alt: "Guests with LED glow sticks" },
  { src: "/images/wedding-bride-green-uplighting.png", alt: "Bride dancing with uplighting" },
]

export function WeddingsPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/cold-sparks-bride-groom.png" alt="Wedding reception with cold sparks" className="w-full h-full object-cover object-[center_30%]" style={{objectPosition: "center 30%"}} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/50 to-[#004563]/40" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">DJ Services</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              PRESSING PLAY
              <br />
              <span className="italic text-[#789dbe] text-glow">ON YOUR BIG DAY</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Music &amp; Love Mixed Right</p>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              If it is one thing we know here at ML Event Entertainment, it is weddings. We provide an unbeatable
              sound and music mixing style tailored entirely to the feel of your big day.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              We do not just turn up and play music. We read the room, coordinate your timeline, work seamlessly
              with your other vendors, and make every announcement so you can be fully present for every moment.
            </p>
            <p className="text-white/50 leading-relaxed">
              All packages include setup, breakdown, travel, clean music edits, online planning tools, and full
              liability insurance. Flexible payment options and electronic e-signing available on every booking.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="/images/wedding-dance-floor-bw.png" alt="Wedding reception dancing" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-6 lg:px-16 bg-[#030508]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden group"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#030508]/0 group-hover:bg-[#789dbe]/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="relative py-24 lg:py-32 bg-[#030508] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Investment</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
              CHOOSE YOUR
              <br />
              <span className="italic text-[#789dbe]">PACKAGE</span>
            </h2>
          </motion.div>

          <div className="packages-grid grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative glass rounded-2xl p-8 ${pkg.popular ? "border-[#789dbe]/50 glow" : ""} ${pkg.isBundle ? "border-[#789dbe]/30 bg-[#789dbe]/5" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#789dbe] text-[#030508] px-4 py-1.5 rounded-full">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider font-medium">Most Popular</span>
                  </div>
                )}
                {pkg.isBundle && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#004563] border border-[#789dbe]/40 text-[#789dbe] px-4 py-1.5 rounded-full">
                    <span className="text-xs uppercase tracking-wider">Bundle &amp; Save</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">{pkg.name}</h3>
                  <p className="text-[#789dbe] text-sm">{pkg.subtitle}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#789dbe] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/get-quote" className={`block w-full text-center py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ${pkg.popular ? "bg-[#789dbe] text-[#030508] hover:bg-white" : "border border-[#789dbe] text-[#789dbe] hover:bg-[#789dbe]/10"}`}>
                  Request Pricing
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Planning */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#004563]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">After Booking</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-[0.9] mb-8">
              YOUR ONLINE
              <br />
              <span className="italic text-[#789dbe]">PLANNING TOOLS</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              Planning your music should be the fun part, not the stressful part. After booking, you receive your
              own private online planning account to stay organized from day one.
            </p>
            <p className="text-white/50 leading-relaxed mb-4">
              Build your Must Play list, Do Not Play list, special moment songs (first dance, cake cutting, ceremony
              selections, introductions), and browse the most requested wedding songs. Submit dedications, manage
              timelines, and communicate with us directly through your portal.
            </p>
            <p className="text-white/50 leading-relaxed">
              Not sure where to start? Just give us the most important songs and let us handle the rest. A great
              wedding DJ reads the room, giving us creative control alongside your must plays is the secret to
              keeping every guest on the floor all night long.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508] text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Let&apos;s Talk About <span className="italic text-[#789dbe]">Your Day</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">Tell us about your wedding and we will put together the perfect package for you.</p>
          <Link href="/get-quote" className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500">
            Check Availability
          </Link>
        </motion.div>
      </section>
    </>
  )
}
