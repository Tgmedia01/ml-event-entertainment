"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Testimonials", href: "/#testimonials" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? "py-4" : "py-8"}`}
    >
      <div className="mx-4 lg:mx-16">
        <div
          className={`glass rounded-full px-6 lg:px-8 py-4 flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "bg-[#004563]/60" : "bg-transparent border-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2" data-cursor="pointer">
            <span className="font-serif text-xl lg:text-2xl text-white tracking-wide">
              ML <span className="text-[#789dbe]">Event</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                data-cursor="pointer"
                className="relative text-xs uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300 py-2 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[0.5px] bg-[#789dbe] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/client-portal"
              data-cursor="pointer"
              className="px-6 py-3 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#789dbe]/10 transition-all duration-500"
            >
              Client Portal
            </Link>
            <Link
              href="/get-quote"
              data-cursor="pointer"
              className="px-8 py-3 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(120,157,190,0.5)]"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            data-cursor="pointer"
          >
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
            className="lg:hidden mx-4 mt-4"
          >
            <div className="glass rounded-3xl p-8 flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors duration-300 py-2 block"
                    data-cursor="pointer"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link
                  href="/client-portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-2 px-8 py-4 border border-[#789dbe] text-[#789dbe] text-xs uppercase tracking-[0.2em] font-medium rounded-full text-center hover:bg-[#789dbe]/10 transition-all duration-500 block"
                  data-cursor="pointer"
                >
                  Client Portal
                </Link>
              </motion.div>
              <Link
                href="/get-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-4 bg-[#789dbe] text-[#030508] text-xs uppercase tracking-[0.2em] font-medium rounded-full text-center hover:bg-white transition-all duration-500 block"
                data-cursor="pointer"
              >
                Get Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
