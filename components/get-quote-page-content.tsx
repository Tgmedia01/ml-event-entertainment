"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Music, Camera, Lightbulb, Sparkles, Mail, Phone, Clock } from "lucide-react"

const services = [
  { id: "dj", label: "DJ Services", icon: Music },
  { id: "photobooth", label: "Photo Booth", icon: Camera },
  { id: "uplighting", label: "Uplighting", icon: Lightbulb },
  { id: "coldsparks", label: "Cold Sparks", icon: Sparkles },]

export function GetQuotePageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    venue: "",
    guestCount: "",
    eventType: "wedding",
    services: [] as string[],
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("https://formspree.io/f/FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          venue: formData.venue,
          guestCount: formData.guestCount,
          eventType: formData.eventType,
          services: formData.services.join(", "),
          message: formData.message,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please email us directly at mikeylee@mlevententertainment.com")
      }
    } catch {
      alert("Something went wrong. Please email us directly at mikeylee@mlevententertainment.com")
    }
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 lg:px-16 pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-[#789dbe]/20 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-[#789dbe]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Thank <span className="italic text-[#789dbe]">You!</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            We&apos;ve received your inquiry and will get back to you within 24-48 hours. We can&apos;t wait to learn
            more about your celebration!
          </p>
          <a
            href="/"
            className="inline-block px-10 py-4 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500"
          >
            Return Home
          </a>
        </motion.div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#004563]/30 to-transparent" />
        <div className="relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-[#789dbe] uppercase tracking-[0.4em] text-xs md:text-sm mb-6">Start Planning</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85] mb-6">
              GET A
              <br />
              <span className="italic text-[#789dbe] text-glow">QUOTE</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Tell us about your event and we&apos;ll create a custom package tailored to your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 lg:py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="font-serif text-xl text-white mb-6 pb-4 border-b border-[#789dbe]/20">
                    Your Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#789dbe] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#789dbe] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#789dbe] focus:outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="font-serif text-xl text-white mb-6 pb-4 border-b border-[#789dbe]/20">
                    Event Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white focus:border-[#789dbe] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Guest Count
                      </label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full bg-[#030508] border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white focus:border-[#789dbe] focus:outline-none transition-colors"
                      >
                        <option value="">Select guest count</option>
                        <option value="under50">Under 50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-150">100-150</option>
                        <option value="150-200">150-200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Venue Name & Location
                      </label>
                      <input
                        type="text"
                        value={formData.venue}
                        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                        className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#789dbe] focus:outline-none transition-colors"
                        placeholder="Venue name, City"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Event Type</label>
                      <div className="flex flex-wrap gap-4">
                        {["wedding", "corporate", "private", "other"].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, eventType: type })}
                            className={`px-6 py-2 rounded-full border text-sm uppercase tracking-[0.15em] transition-all duration-300 ${
                              formData.eventType === type
                                ? "bg-[#789dbe] border-[#789dbe] text-[#030508]"
                                : "border-[#789dbe]/30 text-white/70 hover:border-[#789dbe]"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="font-serif text-xl text-white mb-6 pb-4 border-b border-[#789dbe]/20">
                    Services Interested In
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                          formData.services.includes(service.id)
                            ? "bg-[#789dbe]/20 border-[#789dbe] text-white"
                            : "border-[#789dbe]/20 text-white/50 hover:border-[#789dbe]/50"
                        }`}
                      >
                        <service.icon
                          className={`w-5 h-5 mb-2 ${formData.services.includes(service.id) ? "text-[#789dbe]" : ""}`}
                        />
                        <span className="text-sm">{service.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <h3 className="font-serif text-xl text-white mb-6 pb-4 border-b border-[#789dbe]/20">
                    Additional Details
                  </h3>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-transparent border border-[#789dbe]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:border-[#789dbe] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vision for the event, any special requests, or questions you have..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-10 py-5 bg-[#789dbe] text-[#030508] text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="glass rounded-2xl p-8">
                <h3 className="font-serif text-xl text-white mb-6">Prefer to Talk?</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@mlevententertainment.com"
                    className="flex items-center gap-4 text-white/60 hover:text-[#789dbe] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#789dbe]/10 flex items-center justify-center group-hover:bg-[#789dbe]/20 transition-colors">
                      <Mail className="w-5 h-5 text-[#789dbe]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Email</p>
                      <p className="text-sm">hello@mlevententertainment.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+18431234567"
                    className="flex items-center gap-4 text-white/60 hover:text-[#789dbe] transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#789dbe]/10 flex items-center justify-center group-hover:bg-[#789dbe]/20 transition-colors">
                      <Phone className="w-5 h-5 text-[#789dbe]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1">Phone</p>
                      <p className="text-sm">(843) 123-4567</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-8">
                <h3 className="font-serif text-xl text-white mb-4">Response Time</h3>
                <div className="flex items-center gap-3 text-white/60">
                  <Clock className="w-5 h-5 text-[#789dbe]" />
                  <p className="text-sm">We respond within 24-48 hours</p>
                </div>
              </div>

              <div className="glass rounded-2xl p-8 glow">
                <p className="text-[#789dbe] text-xs uppercase tracking-[0.2em] mb-3">Pro Tip</p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Book early! Popular dates fill up 6-12 months in advance, especially for peak wedding season
                  (April-October).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
