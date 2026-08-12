"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const addOns = [
  {
    id: "cold-sparks",
    number: "01",
    title: "Cold Sparks",
    subtitle: "The Wow Factor",
    description:
      "Cold sparks are the ultimate wow factor for weddings and events, creating a stunning, safe, and unforgettable visual effect. Our cold spark machines produce a beautiful fountain-like burst of cool sparks perfect for grand entrances, first dances, special announcements, or send-offs.",
    detail:
      "Unlike traditional pyrotechnics, cold sparks are completely safe for indoor and outdoor use with no heat, no smoke, and no fire hazard. Just pure magic that shoots 8 to 10ft high at key moments your guests will never forget.",
    features: [
      "Safe for indoor and outdoor use",
      "No heat, smoke or fire hazard",
      "8 to 10ft fountain effect",
      "Perfect for first dances and send-offs",
      "Wireless and cordless setup",
      "Dramatic visual impact on photos and video",
    ],
    images: [
      { src: "/images/wedding-cold-sparks-bubbles-sendoff.jpg", caption: "Grand send-off with cold sparks" },
      { src: "/images/wedding-cold-sparks-street.jpg", caption: "Outdoor cold spark moment" },
      { src: "/images/cold-sparks-bride-groom.png", caption: "First dance cold sparks" },
    ],
    cta: "Add Cold Sparks",
  },
  {
    id: "photo-booth",
    number: "02",
    title: "Photo Booth",
    subtitle: "Instant Memories",
    description:
      "Our modern open-air photo booth with cutting edge technology gives your guests a fun, interactive experience they will talk about long after the night ends. Choose between our classic white front or our popular reflective mirror front.",
    detail:
      "Your guests will love sharing awesome pictures, boomerangs, and video messages via text, email, and across social media platforms, as well as printing cool personalised wedding day keepsakes. Includes a friendly on-site attendant throughout your event.",
    features: [
      "Modern open-air touchscreen booth",
      "Classic white OR reflective mirror front",
      "2x6 or 4x6 HD photo prints",
      "Boomerang and video mode",
      "Text, email and social media sharing",
      "Online gallery included",
      "12+ backdrop options to choose from",
      "Wedding props package included",
      "On-site attendant throughout",
      "Personalised event branding on prints",
    ],
    images: [
      { src: "/images/reception(293).JPG", caption: "Guests having a blast" },
      { src: "/images/photo-booth-mirror.png", caption: "Mirror front in action" },
      { src: "/images/photobooth-props.jpg", caption: "Fun props selection" },
    ],
    cta: "Add Photo Booth",
  },
  {
    id: "uplighting",
    number: "03",
    title: "Venue Uplighting",
    subtitle: "Transform Your Space",
    description:
      "A subtle yet powerful way to create an ambiance that matches the look and feel you are envisioning for your event is simply by adding color. Our 100% wireless LED uplights will transform the look of any space.",
    detail:
      "With the option of matching your reception decor perfectly, we can also switch from an elegant atmosphere to a party style vibe with our unique Party Mode feature that keeps the color constantly changing with the beat of the music once your dance floor officially opens.",
    features: [
      "100% wireless LED uplights",
      "Any color to match your theme",
      "Weather-resistant for indoor and outdoor use",
      "Party Mode that pulses to the beat",
      "Transforms any venue instantly",
      "Elegant or party vibe settings",
    ],
    images: [
      { src: "/images/748612_7157284f603845e18b75ff233120f50b_mv2-scaled.png", caption: "Indoor venue uplighting" },
      { src: "/images/McKissick_4.jpg", caption: "Purple and blue ambient uplighting" },
      { src: "/images/wedding-first-dance-outdoor.jpg", caption: "Uplighting in action" },
    ],
    cta: "Add Uplighting",
  },
  {
    id: "dance-floor-lighting",
    number: "04",
    title: "Enhanced Dance Floor Lighting",
    subtitle: "Club Style Energy",
    description:
      "Our dynamic dance floor lighting transforms your reception space into a vibrant party zone, elevating every beat and movement with synchronised effects that pulse to the rhythm of the music.",
    detail:
      "From colorful washes and strobes to intelligent moving fixtures, we tailor the look to your event's style and energy, keeping your guests dancing all night long.",
    features: [
      "Synchronised to the music",
      "Colorful washes and strobes",
      "Intelligent moving fixtures",
      "Tailored to your event style",
      "Club quality production",
    ],
    images: [
      { src: "/images/Nicole-Thomas-1649.jpg", caption: "Enhanced Tube Lighting" },
      { src: "/images/DSC00641-2.jpg", caption: "Couple on the floor" },
      { src: "/images/s_wphotography_ashleytony_1393.jpg", caption: "Enhanced Tube Lighting" },
    ],
    cta: "Find Out More",
  },
]

export function AddOnsPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end pb-16 lg:pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Nicole-Thomas-1675.jpg"
            alt="Wedding add-ons in action"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/60 to-[#004563]/40" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Enhance Your Event</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-8xl text-white leading-[0.85]">
              TAKE IT TO THE
              <br />
              <span className="italic text-[#789dbe] text-glow">NEXT LEVEL</span>
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
              Every ML Event package delivers an incredible experience. Our add-ons transform it into something
              your guests will be talking about for years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons alternating layout */}
      {addOns.map((addon, index) => (
        <section
          key={addon.id}
          id={addon.id}
          className={`relative py-20 lg:py-32 ${index % 2 === 0 ? "bg-[#030508]" : "bg-[#004563]/10"} overflow-hidden`}
        >
          {/* Background glow */}
          <div className={`absolute ${index % 2 === 0 ? "top-0 right-0" : "bottom-0 left-0"} w-[400px] h-[400px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none`} />

          <div className="px-6 lg:px-16 max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-16"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-5xl lg:text-7xl text-[#789dbe]/20 leading-none">{addon.number}</span>
                <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em]">{addon.subtitle}</p>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-white leading-[0.85]">
                {addon.title.toUpperCase()}
              </h2>
            </motion.div>

            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>

              {/* Images */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                {/* Main image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 group">
                  <img
                    src={addon.images[0].src}
                    alt={addon.images[0].caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/60 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white/60 text-xs uppercase tracking-[0.2em]">
                    {addon.images[0].caption}
                  </p>
                </div>

                {/* Two smaller images */}
                <div className="grid grid-cols-2 gap-4">
                  {addon.images.slice(1).map((img, i) => (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/60 to-transparent" />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                <p className="text-white/70 text-lg leading-relaxed mb-5">{addon.description}</p>
                <p className="text-white/50 leading-relaxed mb-8">{addon.detail}</p>

                {/* Features */}
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3 mb-10"
                >
                  {addon.features.map((feature, i) => (
                    <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#789dbe] flex-shrink-0 mt-0.5" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                {addon.cta &&
                  ("included" in addon && addon.included ? (
                    <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#789dbe]/30 rounded-full">
                      <Check className="w-4 h-4 text-[#789dbe]" />
                      <span className="text-[#789dbe] text-xs uppercase tracking-[0.2em]">{addon.cta}</span>
                    </div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <Link
                        href="/get-quote"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500"
                      >
                        {addon.cta}
                        <span className="w-4 h-[0.5px] bg-[#030508]" />
                      </Link>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
        </section>
      ))}

      {/* Bundle section */}
      <section className="py-20 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-16 text-center"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Best Value</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[0.9] mb-6">
              GET EVERYTHING
              <br />
              <span className="italic text-[#789dbe]">TOGETHER</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Our Ultimate Reception and Ultimate Full Service packages bundle the DJ, Photo Booth, Cold Sparks,
              and Venue Uplighting together at a multi service discount. It is the best way to get everything
              you need for one incredible price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/services/weddings#packages"
                  className="block px-10 py-4 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500"
                >
                  View Packages
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/get-quote"
                  className="block px-10 py-4 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#789dbe]/10 transition-all duration-500"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
