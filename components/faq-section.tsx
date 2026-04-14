"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqGroups = [
  {
    label: "Before You Book",
    faqs: [
      {
        question: "When should I book my date?",
        answer:
          "Charleston happens to be one of the most popular wedding and event destinations in the US — certain months book up well in advance. We highly recommend securing your favourite DJ as soon as you know your event date to avoid disappointment. Your date is 100% locked in as soon as your deposit is paid.",
      },
      {
        question: "How much do you charge?",
        answer:
          "All of our DJ packages start at a fixed price. Prices will vary for each event depending on your specific needs. In order to give you the best price we need a little information from you first — reach out today and we will get you a personalised quote.",
      },
      {
        question: "Where are you based and do you charge a travel fee?",
        answer:
          "ML Event Entertainment is based in Mount Pleasant, South Carolina. All packages come with NO added travel fees up to 30 miles outside Charleston. If your venue exceeds the 30-mile cap, a small travel fee will be added to your final package price.",
      },
      {
        question: "Can we see you perform at a live event?",
        answer:
          "ML Event Entertainment respects the privacy of all our clients — weddings are an extremely personal day for a couple and their family. A reputable DJ would never allow a potential client to attend someone else's event. Instead, you can rely on our online reviews, vendor recommendations, and the videos and photos on our social media platforms. We have a ton of 5-star reviews and are very happy to share them!",
      },
      {
        question: "What type of music do you play?",
        answer:
          "The music we play depends on the type of event — but most importantly, what YOU love to hear is the biggest part of what we do. Every client who books ML Event Entertainment receives their own private online music planning system so your playlist is completely yours.",
      },
      {
        question: "What are your payment terms?",
        answer:
          "A $500 deposit is required at the time of booking to save your event date, with the remaining balance due 30 days prior to your event. Payments can be made through our secure online planning system via PayPal, Square, Venmo, or Cash App.",
      },
      {
        question: "What types of events do you specialise in?",
        answer:
          "We specialise in weddings, corporate events, and social events. We can perform for any type of occasion in front of any size crowd.",
      },
      {
        question: "What DJ experience do you have?",
        answer:
          "Almost 2 decades of full-time entertainment experience across Europe and the United States — including London, Ibiza, Miami, and Los Angeles. Mikey has also performed as a pro DJ aboard some of the world's largest cruise ships, covering weddings, clubs, beach parties, and high-profile corporate events.",
      },
      {
        question: "Do you have any videos or live samples we can see?",
        answer:
          "You can find live videos on our social media platforms via Facebook and Instagram by searching ML Event Entertainment. We do not post pre-recorded music mixes as every event we do is unique to each client.",
      },
      {
        question: "What should a couple look for when choosing their wedding DJ?",
        answer:
          "Your DJ should be someone you trust, who communicates well in the lead-up to your event, and who takes the time to get to know YOU. Check their website, social media, online videos, and reviews — then fine-tune your questions and listen carefully to what they say. The best DJs make your wedding feel uniquely yours.",
      },
      {
        question: "Another DJ is quoting significantly less — can you match it?",
        answer:
          "If it is not a friend or relative helping out, always research their experience and verify they are a full-time professional events DJ. Ask for a detailed breakdown of what is actually included at that lower price. That said, if another quote comes back cheaper and they are genuinely offering a similar top-tier setup and years of full-time experience, we are always happy to discuss tailoring a package to your budget.",
      },
      {
        question: "Will you take last-minute bookings?",
        answer:
          "Absolutely — providing the date is available in our calendar! We can book, sign, and iron out all the event details the same day. Our response time is fast.",
      },
    ],
  },
  {
    label: "After You Book",
    faqs: [
      {
        question: "Do we sign a contract once we have booked?",
        answer:
          "Yes — and this is extremely important. Upon booking, ML Event Entertainment will provide a written contract outlining the terms of your service, which can be signed via our easy online e-signature form. We would never suggest booking any DJ service without a written contract.",
      },
      {
        question: "Do you mix the music live?",
        answer:
          "All of our music at every event is 100% mixed live. With an extensive background DJing vacation destinations, events, and cruise ships around the world, Mikey Lee brings a skill set that allows him to seamlessly blend and transition different songs, requests, and genres — creating fun, unique remixes that keep your guests on the dance floor.",
      },
      {
        question: "Will our DJ also make announcements?",
        answer:
          "Absolutely. Unless told otherwise, we make all announcements needed to coordinate a smooth transition through activities at your event, working closely with your event planner or catering manager. If you are not using a planner, a planning call will be arranged at your convenience before the big day — so you do not have to think about a thing on the day.",
      },
      {
        question: "What equipment comes with our package?",
        answer:
          "We pride ourselves on using only the best equipment. All packages come with premium sound equipment (QSC), 100% wireless microphones, and an elegant DJ booth. We also utilise Pioneer DJ systems and Chauvet lighting for flawless execution every time.",
      },
      {
        question: "Do we pick the music or does our DJ?",
        answer:
          "Both! When you book, you receive your own private online planning account to build playlists including your Must Play songs, a Do Not Play list, dedications, first dance, ceremony selections, cake cutting, and more. If you have no idea where to start — just pick the most important songs and let us handle the rest. We will always aim to play as many of your favourites as possible while reading the room.",
      },
      {
        question: "Have you DJ'd my venue before?",
        answer:
          "Chances are — yes! As full-time career DJs, we are fortunate to perform at some of the most beautiful venues Charleston has to offer, from historic buildings, creek clubs, and aquariums to plantations, golf clubs, and hotels. We pride ourselves on the word-of-mouth relationships we have built with top local vendors.",
      },
      {
        question: "Can we upgrade our package or add extras after booking?",
        answer:
          "Of course! Even our basic package includes everything you need for an amazing event. If your budget allows an upgrade at a later date, we can absolutely make that happen. We just ask that any changes are made no later than one week before your event date.",
      },
      {
        question: "Are we expected to tip the DJ?",
        answer:
          "Gratuity is not included in our package price and is entirely your choice — we are simply grateful you chose us for your event. If your DJ did a great job and you would like to show your appreciation, you are more than welcome to do so.",
      },
      {
        question: "When is our music due?",
        answer:
          "We recommend submitting all main music selections no later than two weeks prior to your event date. This gives us time to create your personalised playlists and source any additional music you have requested. Once the dance floor opens, you and your guests are welcome to make requests on the spot.",
      },
      {
        question: "What time will you arrive to set up?",
        answer:
          "Unless instructed otherwise, we always aim to arrive two hours before the event starts — giving us plenty of time to check in with all vendors, complete a venue walk-through, set up all equipment, change into professional attire, and ensure background music is playing before the first guests arrive.",
      },
      {
        question: "Do you require a vendor meal at our wedding?",
        answer:
          "You should always plan to feed any wedding professional who will be with you at the reception, including your photographer, videographer, DJ, and planner — many of whom will be working 5 to 10 hours. Check with your caterer to confirm whether to include them in your meal count.",
      },
    ],
  },
]

export function FAQSection() {
  const [openGroup, setOpenGroup] = useState<number>(0)
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  return (
    <section id="faq" className="relative py-32 lg:py-48 bg-[#030508]">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#004563]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="px-8 lg:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <p className="text-[#3f566d] text-xs uppercase tracking-[0.4em] mb-6">Common Questions</p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[0.85]">
            THE
            <br />
            <span className="italic text-[#789dbe]">DETAILS</span>
          </h2>
          <p className="text-white/50 text-lg mt-8 max-w-2xl">
            Assembled with the help of our amazing clients — so you can feel fully informed, even before you are ready to book.
          </p>
        </motion.div>

        <div className="flex gap-8 mb-14">
          {faqGroups.map((group, gi) => (
            <button
              key={gi}
              onClick={() => { setOpenGroup(gi); setOpenIndex(null) }}
              className={`text-xs uppercase tracking-[0.3em] pb-2 border-b transition-all duration-300 ${
                openGroup === gi
                  ? "text-[#789dbe] border-[#789dbe]"
                  : "text-white/40 border-transparent hover:text-white/70"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={openGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-0"
          >
            {faqGroups[openGroup].faqs.map((faq, index) => {
              const key = `${openGroup}-${index}`
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="border-b border-[#789dbe]/20"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === key ? null : key)}
                    className="w-full py-7 flex items-center justify-between text-left group"
                    data-cursor="pointer"
                  >
                    <span
                      className={`font-serif text-lg md:text-xl transition-colors duration-300 ${
                        openIndex === key ? "text-[#789dbe]" : "text-white group-hover:text-[#789dbe]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`ml-4 flex-shrink-0 w-9 h-9 rounded-full border border-[#789dbe]/30 flex items-center justify-center transition-all duration-300 ${
                        openIndex === key ? "bg-[#789dbe] border-[#789dbe]" : "group-hover:border-[#789dbe]"
                      }`}
                    >
                      {openIndex === key ? (
                        <Minus className="w-4 h-4 text-[#030508]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#789dbe]" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === key && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 text-white/60 text-base leading-relaxed max-w-2xl">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#789dbe]/20 to-transparent" />
    </section>
  )
}
