"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 lg:pb-24 pt-40 bg-[#030508]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#789dbe]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="relative z-10 px-6 lg:px-16 w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs mb-6">Get In Touch</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85]">
              LET&apos;S TALK
              <br />
              <span className="italic text-[#789dbe] text-glow">ABOUT YOUR EVENT</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-[#030508]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <p className="text-white/70 text-xl leading-relaxed mb-12">
              Ready to start planning? We would love to hear from you. Reach out using any of the methods below
              and we will get back to you quickly usually the same day.
            </p>

            <div className="space-y-8 mb-16">
              <a href="tel:4246539365" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-white group-hover:text-[#789dbe] transition-colors duration-300">424.653.9365</p>
                </div>
              </a>

              <a href="mailto:mikeylee@mlevententertainment.com" className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center group-hover:bg-[#789dbe]/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-white group-hover:text-[#789dbe] transition-colors duration-300">mikeylee@mlevententertainment.com</p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#789dbe]/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#789dbe]" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-white">Charleston, South Carolina</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-[#3f566d] text-xs uppercase tracking-[0.3em] mb-6">Follow Us</p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/mlevententertainment", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/mlevententertainment", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 rounded-full border border-[#789dbe]/30 flex items-center justify-center text-white/40 hover:text-[#789dbe] hover:border-[#789dbe] transition-all duration-300"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Quick enquiry form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }}>
            <div className="glass rounded-3xl p-8 lg:p-12">
              <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">Quick Enquiry</p>
              <form
                action="mailto:mikeylee@mlevententertainment.com"
                method="get"
                encType="text/plain"
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">First Name</label>
                    <input name="first_name" type="text" className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300" placeholder="Jane" />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Last Name</label>
                    <input name="last_name" type="text" className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300" placeholder="Smith" />
                  </div>
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Email Address</label>
                  <input name="email" type="email" className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300" placeholder="jane@example.com" />
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Phone Number</label>
                  <input name="phone" type="tel" className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300" placeholder="(843) 000-0000" />
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Event Date</label>
                  <input name="event_date" type="date" className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300" />
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Event Type</label>
                  <select name="event_type" className="w-full bg-[#030508] border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300">
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="photo_booth">Photo Booth</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-white/40 text-xs uppercase tracking-[0.2em] block mb-2">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-white/5 border border-[#789dbe]/20 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#789dbe] transition-colors duration-300 resize-none" placeholder="Tell us about your event..." />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(120,157,190,0.4)]"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
