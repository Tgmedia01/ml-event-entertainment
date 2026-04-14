"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/mlevententertainment", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/mlevententertainment", label: "Facebook" },
    { icon: Youtube, href: "https://youtube.com/mlevententertainment", label: "YouTube" },
    { icon: Mail, href: "mailto:hello@mlevententertainment.com", label: "Email" },
  ]

  const footerLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Get Quote", href: "/get-quote" },
  ]

  return (
    <footer className="py-16 lg:py-24 px-6 lg:px-16 border-t border-[#789dbe]/10 bg-[#030508]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6" data-cursor="pointer">
              <span className="font-serif text-2xl text-white tracking-wide">
                ML <span className="text-[#789dbe]">Event</span>
                <span className="block text-xs uppercase tracking-[0.3em] text-white/50 mt-1">Entertainment</span>
              </span>
            </Link>
            <p className="text-white/50 max-w-sm leading-relaxed">
              Charleston&apos;s premier wedding DJ and entertainment company. Creating unforgettable moments since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">Quick Links</p>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
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

          <div>
            <p className="text-[#789dbe] text-xs uppercase tracking-[0.3em] mb-6">Client Planning</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Manage your event timeline and music via our Private Portal.
            </p>
            <Link
              href="/client-portal"
              className="inline-flex items-center gap-2 text-[#789dbe] text-sm hover:text-white transition-colors duration-300 group"
              data-cursor="pointer"
            >
              <span>Access Portal</span>
              <span className="w-4 h-[0.5px] bg-[#789dbe] group-hover:w-8 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#789dbe]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
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

          {/* Copyright */}
          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">
            © {currentYear} ML Event Entertainment. All rights reserved.
          </p>

          {/* Location */}
          <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Charleston, SC</p>
        </div>
      </div>
    </footer>
  )
}
