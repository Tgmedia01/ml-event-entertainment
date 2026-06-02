"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Only enable on non-touch devices
    const checkMobile = () => setIsMobile(window.matchMedia("(pointer: coarse)").matches)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
      const target = e.target as HTMLElement
      setIsPointer(
        target.closest("a, button, [data-cursor='pointer']") !== null ||
        window.getComputedStyle(target).cursor === "pointer"
      )
    }
    const handleLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMove)
    document.addEventListener("mouseleave", handleLeave)
    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [isMobile])

  if (isMobile || !isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#789dbe] pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: position.x - 6, y: position.y - 6, scale: isPointer ? 1.5 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#789dbe]/50 pointer-events-none z-[9998]"
        animate={{ x: position.x - 16, y: position.y - 16, scale: isPointer ? 1.8 : 1, opacity: isPointer ? 0.8 : 0.4 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
      />
    </>
  )
}
