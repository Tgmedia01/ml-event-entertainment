"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/mlevententertainment", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/mlevententertainment", label: "Facebook" },
    { icon: Mail, href: "mailto:mikeylee@mlevententertainment.com", label: "Email" },
  ]

  const serviceLinks = [
    { label: "Weddings", href: "/services/weddings" },
    { label: "Corporate Events", href: "/services/corporate" },
    { label: "Photo Booth", href: "/services/photo-booth" },
    { label: "Add-Ons", href: "/add-ons" },
  ]

  const infoLinks = [
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Get a Quote", href: "/get-quote" },
    { label: "Client Portal", href: "/client-portal" },
  ]

  return (
    <footer className="py-16 lg:py-24 px-6 lg:px-16 border-t border-[#789dbe]/10 bg-[#030508]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" data-cursor="pointer">
              <img
                src="/images/ml-event-entertainment-logo-scaled.webp"
                alt="ML Event Entertainment"
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = "none"
                  target.nextElementSibling?.classList.remove("hidden")
                }}
              />
              <span className="hidden font-serif text-2xl text-white tracking-wide">
                ML <span className="text-[#789dbe]">Event</span>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/50 mt-1">Entertainment</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6">
              Charleston&apos;s premier wedding DJ and entertainment company. Award-winning service creating unforgettable
              moments throughout the Lowcountry.
            </p>
            <div className="space-y-2">
              <a
                href="tel:4246539365"
                className="flex items-center gap-3 text-white/40 hover:text-[#789dbe] transition-colors duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                424.653.9365
              </a>
              <a
                href="mailto:mikeylee@mlevententertainment.com"
                className="flex items-center gap-3 text-white/40 hover:text-[#789dbe] transition-colors duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                mikeylee@mlevententertainment.com
              </a>
              <p className="text-white/30 text-sm pl-7">Charleston, South Carolina</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">Services</p>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                    data-cursor="pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">Information</p>
            <ul className="space-y-4 mb-8">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm"
                    data-cursor="pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-3">Client Planning</p>
            <p className="text-white/40 text-sm leading-relaxed">
              Manage your event timeline and music via your private planning portal.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#789dbe]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
                className="text-white/40 hover:text-[#789dbe] transition-colors duration-300"
                data-cursor="pointer"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
            © {currentYear} ML Event Entertainment. All rights reserved.
          </p>

          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Charleston, South Carolina</p>
        </div>
      </div>
    </footer>
  )
}
