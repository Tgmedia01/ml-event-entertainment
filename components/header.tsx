"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Weddings", href: "/services/weddings" },
      { label: "Corporate Events", href: "/services/corporate" },
      { label: "Photo Booth", href: "/services/photo-booth" },
      { label: "Add-Ons", href: "/add-ons" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "FAQs", href: "/faq" },
      { label: "Client Login", href: "/client-portal" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "py-3" : "py-6"}`}
    >
      <div className="mx-4 lg:mx-16" ref={dropdownRef}>
        <div className={`glass rounded-full px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-[#004563]/70" : "bg-transparent border-transparent"}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/ml-event-entertainment-logo-scaled.webp"
              alt="ML Event Entertainment"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                const t = e.target as HTMLImageElement
                t.style.display = "none"
                const next = t.nextElementSibling as HTMLElement
                if (next) next.style.display = "block"
              }}
            />
            <span className="hidden font-serif text-xl text-white tracking-wide">
              ML <span className="text-[#789dbe]">Event</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300 py-2"
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300 py-2 group block"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#789dbe] transition-all duration-300 group-hover:w-full" />
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass rounded-2xl py-3 min-w-[180px] overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-6 py-3 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white hover:bg-[#789dbe]/10 transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/client-portal" className="px-5 py-2.5 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#789dbe]/10 transition-all duration-500">
              Client Portal
            </Link>
            <Link href="/get-quote" className="px-7 py-2.5 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(120,157,190,0.5)]">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white p-2">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mx-4 mt-3"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                  {item.children ? (
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40 py-2 px-2">{item.label}</p>
                      <div className="pl-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link key={child.label} href={child.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-white/70 hover:text-white py-2 px-2 transition-colors duration-200">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300 py-2 px-2 block">
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="border-t border-[#789dbe]/20 mt-2 pt-4 flex flex-col gap-3">
                <Link href="/client-portal" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] font-medium rounded-full text-center">
                  Client Portal
                </Link>
                <Link href="/get-quote" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
