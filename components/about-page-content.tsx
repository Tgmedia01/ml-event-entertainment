"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram } from "lucide-react"

const stats = [
  { number: "1000+", label: "Events Performed" },
  { number: "20+", label: "Years Experience" },
  { number: "10x", label: "Award Winner" },
  { number: "5★", label: "Across All Platforms" },
]

const awards = [
  {
    src: "/images/award-the-knot-hall-of-fame.png",
    alt: "The Knot Hall of Fame",
    href: "https://www.theknot.com/marketplace/ml-event-entertainment-hanahan-sc-2040669",
    label: "Hall of Fame",
    year: "Inducted",
  },
  {
    src: "/images/award-the-knot-best-weddings.png",
    alt: "The Knot Best of Weddings",
    href: "https://www.theknot.com/marketplace/ml-event-entertainment-hanahan-sc-2040669",
    label: "The Knot Best of Weddings",
    year: "2020 to 2026",
  },
  {
    src: "/images/award-weddingwire-couples-choice.png",
    alt: "WeddingWire Couples Choice",
    href: "https://www.weddingwire.com/reviews/ml-event-entertainment/9456544ce61db414.html",
    label: "WeddingWire Couples Choice",
    year: "2019 to 2026",
  },
  {
    src: "/images/Charleston-Choice-Email-Signature-Logo-300px-1.png",
    alt: "Charleston\'s Choice Winner",
    href: "#",
    label: "Charleston\'s Choice",
    year: "Best Party Entertainment",
  },
]

const team = [
  {
    name: "Mikey Lee",
    role: "Founder & Lead DJ",
    image: "/images/8AFF7056-C15D-4F14-828F-4C2FF7EE67A3.jpg",
    bio: "Mikey Lee is the founder and lead DJ of ML Event Entertainment, bringing over 20 years of full time DJ experience to weddings, private events, and parties around the world. His career has taken him across Europe, the United States, and aboard some of the largest cruise ships sailing today covering London, Ibiza, Miami, and Los Angeles along the way. After meeting his now wife Katelin, Mikey made the move to Charleston, South Carolina, a city that inspired him to launch his own company. What began as a passion project quickly grew into one of the Lowcountry's most awarded entertainment services.",
  },
  {
    name: "Katelin McTigue",
    role: "Director of Operations",
    image: "/images/Katelin-M-Headshots-scaled.png",
    bio: "Katelin McTigue is the Director of Operations at ML Event Entertainment and the organizational force behind the scenes. As the wife of founder Mikey Lee, she plays a key role in the client experience. Katelin's background in event planning and sales brings a wealth of experience to her role, allowing her to expertly guide clients with professionalism, warmth, and efficiency. Her strong communication skills and attention to detail ensure that every event starts off on the right foot.",
  },
  {
    name: "Davis",
    role: "DJ",
    image: "/images/rsw_1200h_1200cg_true.webp",
    bio: "DJ Davis is a highly sought after talent known for his passion, professionalism, and commitment to delivering top tier entertainment. As a trusted member of the ML Event Entertainment team, Davis shares founder Mikey Lee's dedication to excellence bringing the same high quality experience to every event he performs. With an innate ability to read the room and curate unforgettable moments through music, DJ Davis specialises in creating an atmosphere that is both electric and deeply personal.",
  },
  {
    name: "Aaron",
    role: "DJ AARO",
    image: "/images/rsw_1200h_1200cg_true-mikey.png",
    bio: "With over 15 years of experience behind the decks, DJ AARO has built a reputation for delivering high-energy, unforgettable events with a personal touch. He brings passion, professionalism, and nonstop fun to every celebration. Originally honing his craft in New Jersey before bringing his talents to Charleston, South Carolina, DJ AARO developed a deep appreciation for all music genres and knows how to create a soundtrack that connects with every crowd. Whether it's timeless classics, current hits, or throwback anthems, he knows how to keep the dance floor packed all night long. Known for his infectious personality and ability to truly read the room, DJ AARO works closely with every client to bring their vision to life and ensure every detail feels seamless from start to finish.",
  },
]


export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end pb-16 lg:pb-24 pt-32">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero-dance-floor.png"
            alt="ML Event Entertainment in action"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030508] via-[#030508]/50 to-[#004563]/30" />
        </div>
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Our Story</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              WHO WE ARE AND
              <br />
              <span className="italic text-[#789dbe] text-glow">WHAT WE DO</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-[#789dbe]/10 bg-[#004563]/20">
        <div className="px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-[#789dbe] mb-2 text-glow">{stat.number}</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Who We Are</p>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              ML Event Entertainment provides exceptional music, sound, lighting, photo booth, and visual effect services
              for weddings and special events throughout the Lowcountry.
            </p>
            <p className="text-white/50 leading-relaxed mb-6">
              Your event means the world to us and that is why we believe in getting to know you, your music taste,
              and your vision before we ever touch the decks. Our key value is to guarantee a celebration of
              unforgettable fun and lasting memories, no matter how big or small.
            </p>
            <p className="text-white/50 leading-relaxed">
              We do not just turn up and play music. We curate the energy, handle the timeline, coordinate with every
              vendor on your day, and ensure every single guest leaves saying it was the best event they have ever attended.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-[#004563]/10">
        <div className="px-6 lg:px-16 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-8">Our Philosophy</p>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-snug mb-8">
              &ldquo;Every celebration deserves a soundtrack that moves the soul and memories that last forever.&rdquo;
            </blockquote>
            <p className="text-[#789dbe] text-sm uppercase tracking-[0.2em]">Mikey Lee, Founder</p>
          </motion.div>
        </div>
      </section>

      {/* Team horizontal cards */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">The People Behind The Music</p>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            MEET THE
            <br />
            <span className="italic text-[#789dbe]">TEAM</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#789dbe]">{member.role}</span>
                </div>
              </div>
              {/* Text */}
              <h3 className="font-serif text-2xl text-white mb-1">{member.name}</h3>
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.2em] mb-4">{member.role}</p>
              <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards no white background */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#004563]/10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-16">
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Recognition</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
              AWARDS &amp;
              <br />
              <span className="italic text-[#789dbe]">ACCOLADES</span>
            </h2>
          </motion.div>

          {/* Award logos no background, greyscale, color on hover */}
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16 mb-16">
            {awards.map((award, i) => (
              <motion.a
                key={i}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className="h-24 lg:h-28 w-auto object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </motion.a>
            ))}
          </div>

          {/* Award text list */}
          <div className="space-y-0 max-w-3xl mx-auto">
            {awards.map((award, index) => (
              <motion.div
                key={award.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between py-5 border-b border-[#789dbe]/20"
              >
                <span className="font-serif text-lg md:text-xl text-white">{award.label}</span>
                <span className="text-[#789dbe] text-xs uppercase tracking-[0.2em]">{award.year}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Instagram className="w-5 h-5 text-[#789dbe]" />
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em]">Follow Along</p>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[0.85]">
            WE&apos;RE ON
            <br />
            <span className="italic text-[#789dbe]">INSTAGRAM</span>
          </h2>
          <a href="https://www.instagram.com/mlevententertainment" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-6 text-[#789dbe] text-sm uppercase tracking-[0.2em] group">
            <span className="group-hover:text-white transition-colors duration-300">@mlevententertainment</span>
            <span className="w-8 h-[0.5px] bg-[#789dbe] group-hover:w-16 transition-all duration-500" />
          </a>
        </motion.div>

        {/* Elfsight Instagram Feed */}
        <div className="elfsight-instagram-wrapper">
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-7588aeec-329e-4945-9edf-fa28783ccf5e" data-elfsight-app-lazy></div>
        </div>

        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/mlevententertainment" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[#789dbe] hover:text-[#030508] transition-all duration-500">
            Follow Us on Instagram
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508] text-center border-t border-[#789dbe]/10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Create <span className="italic text-[#789dbe]">Magic?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">Let&apos;s discuss how we can make your celebration unforgettable.</p>
          <Link href="/get-quote" className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500">
            Check Availability
          </Link>
        </motion.div>
      </section>
    </>
  )
}
