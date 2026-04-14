"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Music, Camera, Lightbulb, Sparkles, Users, Mic } from "lucide-react"

const mainServices = [
  {
    icon: Lightbulb,
    title: "Venue Uplighting",
    subtitle: "Bring Your Venue To Life",
    description:
      "A subtle yet effective way to create an ambiance to match the look and feel you are envisioning for your event is by simply adding color. Our 100% wireless LED uplights will transform the look of any space, with the option of matching your reception decor! We can also switch from an elegant atmosphere to a party style vibe with our unique 'Party Mode' feature that will keep the color constantly changing with the beat of the music once your dance floor has officially opened.",
    features: [
      "100% Wireless LED Uplights",
      "Custom Color Matching",
      "Weather-Resistant",
      "Party Mode Feature",
      "Beat-Synced Lighting",
      "Indoor & Outdoor Use",
    ],
    image: "/images/486805890-1225907382869985-1453893794816927731-n.jpg",
  },
  {
    icon: Camera,
    title: "Photo Booth",
    subtitle: "Your Guests Will Have The Time Of Their Lives",
    description:
      "Our awesome photo booth is a modern style photo booth with cutting edge technology. Your guests will love sharing awesome pictures, boomerangs and video messages via text, email and across social media platforms, as well as being able to print cool personalized wedding day keepsakes. The slick, modern, interactive touchscreen display will look picture perfect in any venue, with the option of a classic white front OR our popular reflective mirror front ensuring the perfect selfie every time.",
    features: [
      "Instant Photo Prints",
      "Boomerangs & Videos",
      "Social Media Sharing",
      "Custom Backdrops",
      "Wedding Props Included",
      "Friendly Attendant",
    ],
    image: "/images/photobooth-203.jpg",
  },
  {
    icon: Sparkles,
    title: "Cold Sparks",
    subtitle: "Make Your Wedding Unique",
    description:
      "Cold sparks are the ultimate wow factor for weddings and events, creating a stunning, safe, and unforgettable visual effect. Our cold spark machines produce a beautiful, fountain like burst of cool sparks that are perfect for grand entrances, first dances, special announcements, or send offs. Unlike traditional pyrotechnics, cold sparks are completely safe for indoor and outdoor use - no heat, no smoke, and no fire hazard, just pure magic.",
    features: [
      "Indoor & Outdoor Safe",
      "No Heat or Smoke",
      "8-10ft Spark Effects",
      "Grand Entrances",
      "First Dance Moments",
      "Send-Off Finale",
    ],
    image: "/images/ml-event-entertainment-photo-booth-charleston-event-add-ons.jpg",
  },
  {
    icon: Music,
    title: "Dance Floor Lighting",
    subtitle: "Elevate Your Dance Experience",
    description:
      "Our dynamic dance floor lighting transforms your space into a vibrant party zone, elevating every beat and movement with synchronized effects that pulse to the rhythm of the music. From colorful washes and strobes to intelligent moving fixtures, we tailor the look to your event's style and energy - keeping your guests dancing all night long.",
    features: [
      "Club-Style Lighting",
      "Beat-Synced Effects",
      "Moving Head Fixtures",
      "Colorful Washes",
      "Strobe Effects",
      "Custom Programming",
    ],
    image: "/images/wedding-20dj.jpg",
  },
]

const addOns = [
  {
    icon: Camera,
    title: "Photo Booth Props",
    description:
      "Complete wedding props collection, large backdrops, and a friendly photo booth attendant to ensure everyone has a blast.",
    image: "/images/photobooth2.jpg",
  },
  {
    icon: Sparkles,
    title: "Spark Machine Package",
    description:
      "Multiple wireless cold spark machines for dramatic effects at key moments throughout your reception.",
    image: "/images/ml-event-entertainment-photo-booth-charleston-event-add-ons.jpg",
  },
  {
    icon: Mic,
    title: "Online Planning Tools",
    description:
      "Create and build playlists including 'MUST PLAY' songs, 'DO NOT PLAY' lists, dedications, and so much more with your personal planning account.",
    image: "/images/hero-20image.jpg",
  },
]

export function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 pt-32">
        <div className="absolute inset-0">
          <img
            src="/images/hero-20image.jpg"
            alt="Wedding reception with packed dance floor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/70 to-[#004563]/50" />
        </div>

        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">What We Offer</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.85]">
              OUR
              <br />
              <span className="italic text-[#789dbe] text-glow">SERVICES</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-32">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#789dbe]" />
                  </div>
                  <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em]">{service.subtitle}</p>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">{service.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-8">{service.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#789dbe]" />
                      <span className="text-white/50 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-4 text-[#789dbe] text-sm uppercase tracking-[0.2em] group"
                >
                  <span className="group-hover:text-white transition-colors duration-300">Get a Quote</span>
                  <span className="w-8 h-[0.5px] bg-[#789dbe] group-hover:w-16 transition-all duration-500" />
                </Link>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden group">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-24 lg:py-32 bg-[#004563]/10">
        <div className="px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Enhance Your Event</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white">
              Premium <span className="italic text-[#789dbe]">Add-Ons</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={addon.image || "/placeholder.svg"}
                    alt={addon.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <addon.icon className="w-5 h-5 text-[#789dbe]" />
                    <h3 className="font-serif text-xl text-white">{addon.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{addon.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 lg:p-16 text-center glow"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Custom Packages</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Every Event is <span className="italic text-[#789dbe]">Unique</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              We create custom packages tailored to your vision, venue, and budget. From intimate ceremonies to grand
              celebrations, we&apos;ll craft the perfect entertainment experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-quote"
                className="px-10 py-4 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500"
              >
                Request Quote
              </Link>
              <Link
                href="/faq"
                className="px-10 py-4 border border-[#789dbe] text-[#789dbe] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#789dbe]/10 transition-all duration-500"
              >
                View FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
