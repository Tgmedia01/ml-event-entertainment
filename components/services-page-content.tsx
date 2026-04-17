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



const steps = [
  {
    number: "01",
    title: "Consult",
    description: "We start with a conversation about your vision, your must-play songs, your do-not-play list. This is where we learn your story.",
  },
  {
    number: "02",
    title: "Plan",
    description: "You get a private online planning account to build playlists and manage every musical detail. We craft your timeline and coordinate with your other vendors.",
  },
  {
    number: "03",
    title: "Party",
    description: "On your big day we handle everything from setup and vendor communication to reading the room and keeping the energy high from first song to last.",
  },
]

const addOns = [
  {
    title: "Venue Uplighting",
    description:
      "Our 100% wireless LED uplights transform any space with color matching your reception decor. Features a unique Party Mode that pulses color changes to the beat once your dance floor officially opens. Weather-resistant and wireless, they work beautifully indoors and out.",
    image: "/wedding-venue-uplighting-purple-blue-ambient-elega.jpg",
  },
  {
    title: "Photo Booth",
    description:
      "Modern open-air booth with interactive touchscreen. Guests share photos, boomerangs, and video messages instantly. Available with classic white or reflective mirror front, props, backdrop, and on-site attendant.",
    image: "/images/ml-event-entertainment-photo-booth-charleston-event-add-ons.jpg",
  },
  {
    title: "Cold Sparks",
    description:
      "Fountain-like spark effects shooting 8 to 10ft high, perfect for grand entrances, first dances, and send-offs. Completely safe for indoor and outdoor use with no heat, no smoke, no fire hazard.",
    image: "/cold-sparks-wedding-fountain-effect-dramatic-light.jpg",
  },
  {
    title: "Dance Floor Lighting",
    description:
      "Dynamic synchronized lighting that pulses to the rhythm of the music, from colorful washes and strobes to intelligent moving fixtures tailored to your event energy. Included in all packages.",
    image: "/wedding-dj-party-dance-floor-crowd-celebration-pur.jpg",
  },
]

export function ServicesPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end pb-16 lg:pb-24 pt-32">
        <div className="absolute inset-0">
          <img
            src="/images/wedding-20dj.jpg"
            alt="ML Event Entertainment Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/60 to-[#004563]/40" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Weddings & Events</p>
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
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              If it is one thing we know here at ML Event Entertainment, it is weddings. We provide an unbeatable sound
              and music mixing style tailored entirely to the feel of your big day.
            </p>
            <p className="text-white/40 leading-relaxed">
              We do not just turn up and play music. We read the room, coordinate your timeline, work seamlessly with
              your other vendors, and make all the announcements so you can be fully present and enjoy every moment.
              All packages include setup, breakdown, travel, clean music edits, online planning tools, and full insurance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative py-24 lg:py-32 bg-[#030508] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="px-6 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Investment</p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
              WEDDING DJ
              <br />
              <span className="italic text-[#789dbe]">PACKAGES</span>
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
                    <span className="text-xs uppercase tracking-wider">Bundle & Save</span>
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
                <Link
                  href="/get-quote"
                  className={`block w-full text-center py-4 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ${
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
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
      </section>

      {/* Add-ons */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Enhance Your Event</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            ADD-<span className="italic text-[#789dbe]">ONS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={addon.image} alt={addon.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508] to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-white mb-3">{addon.title}</h3>
                <p className="text-white/50 leading-relaxed">{addon.description}</p>
              </div>
            </motion.div>
          ))}
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
              <span className="italic text-[#789dbe]">MUSIC PLANNING TOOLS</span>
            </h2>
            <p className="text-white/70 text-xl leading-relaxed mb-6">
              Planning just got a whole lot easier. After booking, you receive your own private online planning
              account so you stay organized from the moment we save your date.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              Build your Must Play list, your Do Not Play list, dedications, special moment songs (first dance,
              cake cutting, ceremony selections, introductions), and browse the most requested wedding songs
              of all time.
            </p>
            <p className="text-white/50 leading-relaxed">
              Do not know where to start? Just pick the most important songs and let us handle the rest. A great
              DJ reads the room giving your DJ creative control alongside your must-plays is the secret to
              keeping the floor packed all night.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">The Process</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            HOW WE
            <br />
            <span className="italic text-[#789dbe]">WORK</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 lg:p-10 group hover:bg-[#789dbe]/5 transition-colors duration-500"
            >
              <span className="font-serif text-7xl text-[#789dbe]/20 leading-none group-hover:text-[#789dbe]/40 transition-colors duration-500 block mb-6">
                {step.number}
              </span>
              <h3 className="font-serif text-3xl text-white mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508] text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to <span className="italic text-[#789dbe]">Talk?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Tell us about your day and we will put together the perfect package for you.
          </p>
          <Link
            href="/get-quote"
            className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.5)]"
          >
            Check Availability
          </Link>
        </motion.div>
      </section>
    </>
  )
}
