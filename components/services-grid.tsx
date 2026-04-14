"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Music2, Camera, Sparkles } from "lucide-react"
import Image from "next/image"

const services = [
  {
    title: "Award-Winning DJs",
    description: "Professional DJs who read the room and keep your dance floor packed all night long.",
    icon: Music2,
    image: "https://static.wixstatic.com/media/078d10_1c1c1f727409403a9f733157f8646e33~mv2.jpg",
    large: true,
  },
  {
    title: "Photo Booths",
    description: "Modern, sleek photo experiences with instant prints and digital sharing.",
    icon: Camera,
    image: "https://static.wixstatic.com/media/078d10_7908c6a084c8438b813b1f5e61919864~mv2.jpg",
    large: false,
  },
  {
    title: "Lighting & Atmosphere",
    description: "Uplighting, cold sparks, and LED glow to transform any venue into a stunning backdrop.",
    icon: Sparkles,
    image: null,
    large: false,
    isLighting: true,
  },
]

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-lg border border-border/50 bg-card ${
        service.large ? "md:col-span-2 md:row-span-2" : ""
      } ${service.isLighting ? "animate-pulse-glow" : ""}`}
    >
      {service.image ? (
        <>
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <service.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">{service.description}</p>
          </div>
        </>
      ) : (
        <div className="relative h-full min-h-[300px] p-6 md:p-8 flex flex-col justify-end bg-gradient-to-br from-secondary via-card to-background">
          {/* Animated lighting effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-500" />
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
          <div className="relative z-10">
            <service.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
          </div>
        </div>
      )}

      {/* Hover border glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-lg transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground text-balance">
            Curated Entertainment <br />
            <span className="italic text-primary">Experiences</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
