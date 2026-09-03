"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Heart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionHeader } from "@/components/ui/SectionHeader"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

const causes = [
  {
    emoji: "❤️",
    title: "One-Time Support",
    desc: "Every contribution goes directly to the ground — helping us buy rice, wheat, blankets, or tree saplings for our ongoing community drives.",
    features: ["Direct Ground Impact", "Any Amount Helps", "Instant Support"],
    primaryBtn: "Donate Now",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-rose-500 to-pink-500",
    softBg: "bg-rose-50",
    borderColor: "border-rose-100",
    iconBg: "bg-rose-100",
    image: "/images/food_distribution/food_distribution_2.jpeg",
    alt: "Parivartan Welfare Society volunteers distributing hot meals",
  },
  {
    emoji: "📅",
    title: "Monthly Seva Partner",
    desc: "Support our work regularly so our team can plan daily food distribution and winter blanket drives month after month without stopping.",
    features: ["Regular Food Drives", "Winter Relief", "Sustained Ground Action"],
    primaryBtn: "Become Monthly Supporter",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-blue-600 to-blue-400",
    softBg: "bg-[#eef2eb]",
    borderColor: "border-[rgba(35,54,29,0.15)]",
    iconBg: "bg-[#eef2eb]",
    image: "/images/blanket_distribution/blanket_distribution_4.jpeg",
    alt: "Parivartan Welfare Society volunteers handing warm blankets in cold weather",
  },
  {
    emoji: "🍛",
    title: "Sponsor a Meal Drive",
    desc: "Help us serve hot, freshly cooked meals to daily wage workers, street vendors, and underprivileged families waiting in line.",
    features: ["Fresh Hot Meals", "Community Kitchen", "Zero Hunger"],
    primaryBtn: "Sponsor Meals",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-orange-500 to-amber-400",
    softBg: "bg-orange-50",
    borderColor: "border-orange-100",
    iconBg: "bg-[#fdf3e3]",
    image: "/images/food_distribution/food_distribution_4.jpeg",
    alt: "Volunteers packing and distributing warm meals on the street",
  },
  {
    emoji: "🧥",
    title: "Winter Blanket Distribution",
    desc: "Severe winter cold poses a real threat to elderly people and children living outdoors. Gift a warm blanket and protect a life.",
    features: ["Thick Winter Blankets", "Elderly Protection", "Night Street Drives"],
    primaryBtn: "Gift a Blanket",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-emerald-600 to-emerald-400",
    softBg: "bg-[#f0f2ef]",
    borderColor: "border-[rgba(121,133,118,0.2)]",
    iconBg: "bg-[#eef2eb]",
    image: "/images/blanket_distribution/blanket_distribution_7.jpeg",
    alt: "Volunteers distributing thick blankets to people outdoors",
  },
  {
    emoji: "🌱",
    title: "Tree Plantation Drive",
    desc: "Join our green mission by supporting tree plantation in public spaces and parks. We plant saplings and ensure they get regular water and care.",
    features: ["Planting Saplings", "Cleaner Air", "Community Care"],
    primaryBtn: "Plant a Tree",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-purple-600 to-purple-400",
    softBg: "bg-purple-50",
    borderColor: "border-purple-100",
    iconBg: "bg-purple-100",
    image: "/images/plantation/plantation_image_5.jpeg",
    alt: "Volunteers planting and watering saplings",
  },
  {
    emoji: "🍲",
    title: "Emergency Meal Relief",
    desc: "When families suddenly lose their livelihood or face unexpected crisis, our volunteer team steps in immediately with cooked food packets.",
    features: ["Rapid Food Response", "Fresh Meal Packets", "Direct Relief"],
    primaryBtn: "Support Emergency Relief",
    primaryHref: "/donate",
    learnHref: "/donate",
    gradient: "from-red-600 to-red-400",
    softBg: "bg-red-50",
    borderColor: "border-red-100",
    iconBg: "bg-red-100",
    image: "/images/food_distribution/food_distribution_5.jpeg",
    alt: "Emergency food packet distribution by Parivartan Welfare Society",
  },
]

const trustItems = [
  "Secure Donation",
  "Transparent Fund Utilization",
  "Verified NGO",
  "Impact Reports Available",
  "Dedicated Volunteers",
  "Community Driven",
]

export function DonationCausesSection() {
  return (
    <section className="section-spacing bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] bg-[#fdf3e3]/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[220px] sm:w-[340px] h-[220px] sm:h-[340px] bg-[#eef2eb]/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/4" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-5">
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <Heart className="w-4 h-4 text-[#C37C24] fill-orange-500" />
            </motion.span>
            <span className="text-sm font-semibold text-orange-700">Choose Your Cause</span>
          </motion.div>
        </div>

        <SectionHeader
          badge=""
          title="Choose a Cause to Support"
          subtitle="Every contribution, no matter how big or small, helps us bring hope, dignity, and essential support to people and animals in need. Select the cause closest to your heart and make a meaningful difference today."
          align="center"
          className="mb-16 text-center"
        />

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {causes.map((cause, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i * 0.08}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`group relative bg-white rounded-3xl border ${cause.borderColor} shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img src={cause.image} alt={cause.alt}
                  className="w-full h-full  group-hover:scale-110 transition-transform duration-700" />
                {/* Floating emoji icon */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                  {cause.emoji}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-extrabold text-[#273029] text-lg mb-2 leading-snug">{cause.title}</h3>
                <p className="text-[#798576] text-sm leading-relaxed mb-4 flex-1">{cause.desc}</p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {cause.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#273029] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C37C24] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="space-y-2">
                  <Link href={cause.primaryHref} className="block">
                    <button className={`w-full h-10 rounded-full bg-gradient-to-r ${cause.gradient} text-white text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md`}>
                      {cause.primaryBtn} <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <Link href={cause.learnHref} className="block">
                    <button className="w-full h-10 rounded-full border border-[#ddd9d0] text-[#273029] text-sm font-semibold hover:bg-[#F6F2E8] transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>

              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cause.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Trust Strip */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0.6} viewport={{ once: true }}
          className="mt-14 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-semibold text-[#273029]">
                <CheckCircle2 className="w-4 h-4 text-[#C37C24] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" custom={0.7} viewport={{ once: true }}
          className="mt-10 text-center">
          <h3 className="text-2xl font-extrabold text-[#273029] mb-3">Your Kindness Can Change Lives</h3>
          <p className="text-[#798576] max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you choose to feed a family, support a child&apos;s education, provide medical care, protect rescued cows, or help during emergencies — your generosity creates real and lasting impact. Together, we can build a more compassionate and hopeful future.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
            <Link href="/donate">
              <Button variant="primary" className="w-full sm:w-auto text-white rounded-full px-10 h-12 sm:h-13 font-bold text-sm sm:text-base shadow-lg shadow-[rgba(35,54,29,0.25)]">
                ❤️ Donate Now
              </Button>
            </Link>
            <a href="https://wa.me/918299461699" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="w-full text-white sm:w-auto rounded-full px-8 h-12 sm:h-13 font-bold text-sm sm:text-base">
                💬 WhatsApp Us
              </Button>
            </a>
            <a href="tel:+918299461699">
              <Button variant="primary" className="w-full sm:w-auto text-white rounded-full px-8 h-12 sm:h-13 font-bold text-sm sm:text-base">
                📞 Call Us
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="primary" className="w-full sm:w-auto text-white rounded-full px-8 h-12 sm:h-13 font-bold text-sm sm:text-base">
                🤝 Volunteer
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
