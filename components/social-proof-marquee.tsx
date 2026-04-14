"use client"

import { Award, Trophy, Star, Medal } from "lucide-react"

const awards = [
  {
    icon: Trophy,
    text: "The Knot Best of Weddings 2025",
  },
  {
    icon: Award,
    text: "WeddingWire Couples' Choice",
  },
  {
    icon: Medal,
    text: "Hall of Fame Inductee",
  },
  {
    icon: Star,
    text: "Charleston Choice Award",
  },
]

export function SocialProofMarquee() {
  return (
    <section className="py-8 bg-[#004563]/30 border-y border-[#789dbe]/10 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap items-center">
        {[...awards, ...awards, ...awards, ...awards].map((award, index) => (
          <div key={index} className="flex items-center gap-4 mx-12">
            <award.icon className="h-8 w-8 text-[#789dbe]" />
            <span className="text-white/80 text-sm uppercase tracking-[0.2em]">{award.text}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#789dbe]/50 ml-8" />
          </div>
        ))}
      </div>
    </section>
  )
}
