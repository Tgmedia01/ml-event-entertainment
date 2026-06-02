"use client"

import { motion } from "framer-motion"
import { Music, Clock, FileText, MessageSquare, ExternalLink, Shield, CheckCircle } from "lucide-react"

const portalFeatures = [
  {
    icon: Music,
    title: "Music Planner",
    description:
      "Create your 'Must Play' and 'Do Not Play' lists. Browse our extensive music library by genre and era.",
  },
  {
    icon: Clock,
    title: "Timeline Builder",
    description: "Collaborate on your event timeline. Mark special moments and coordinate with your vendors.",
  },
  {
    icon: FileText,
    title: "Documents",
    description: "Access your contract, invoices, and any important documents related to your event.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Communicate directly with your DJ and our team. Ask questions and share updates.",
  },
]

const steps = [
  { step: "01", title: "Book Your Event", description: "Sign your contract and submit your retainer" },
  { step: "02", title: "Receive Login", description: "We'll email your private portal credentials" },
  { step: "03", title: "Start Planning", description: "Access all planning tools and features" },
]

export function ClientPortalPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">For Booked Clients</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6">
              CLIENT
              <br />
              <span className="italic text-[#789dbe] text-glow">PORTAL</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Your private planning hub for managing your event details, music preferences, and timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login CTA */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 lg:p-12 text-center glow"
          >
            <div className="w-16 h-16 rounded-full bg-[#789dbe]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#789dbe]" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Already a <span className="italic text-[#789dbe]">Client?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
              Access your private event planning portal to manage your music, timeline, and communicate with our team.
            </p>
            <a
              href="https://mlevententertainment.com/client-login/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.5)]"
            >
              <span>Login to Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <p className="text-white/40 text-sm mt-6">
              Forgot your login?{" "}
              <a href="mailto:hello@mlevententertainment.com" className="text-[#789dbe] hover:text-white">
                Contact us
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Planning Tools</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              What&apos;s <span className="italic text-[#789dbe]">Inside</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 group hover:bg-[#789dbe]/5 transition-colors duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-[#789dbe]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#789dbe]/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#789dbe]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-3">{feature.title}</h3>
                    <p className="text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-24 lg:py-32 bg-[#004563]/10 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Getting Started</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              How to <span className="italic text-[#789dbe]">Access</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-8"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#789dbe]/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-3xl text-[#789dbe]">{item.step}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-[#789dbe]/20">
                  <h3 className="font-serif text-xl text-white mb-2">{item.title}</h3>
                  <p className="text-white/50">{item.description}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-[#789dbe]/30 flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Yet Booked CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Not Yet <span className="italic text-[#789dbe]">Booked?</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Ready to start planning your unforgettable celebration? Let&apos;s talk about your vision.
            </p>
            <a
              href="/get-quote"
              className="inline-block px-12 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(120,157,190,0.5)]"
            >
              Get a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
