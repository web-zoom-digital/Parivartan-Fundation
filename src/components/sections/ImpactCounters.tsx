"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Users, Utensils, HeartHandshake, MapPin } from "lucide-react"

const stats = [
  { label: "Meals Served", value: "5,000,000+", icon: Utensils, color: "text-[#C37C24]", bg: "bg-[#fdf3e3]" },
  { label: "Active Volunteers", value: "15,000+", icon: Users, color: "text-[#2e4626]", bg: "bg-[#eef2eb]" },
  { label: "Families Helped", value: "250,000+", icon: HeartHandshake, color: "text-[#C37C24]", bg: "bg-[#eef2eb]" },
  { label: "Cities Covered", value: "120+", icon: MapPin, color: "text-[#C37C24]", bg: "bg-[#fdf3e3]" },
]

export function ImpactCounters() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-12 bg-white relative z-20" ref={ref} aria-label="Programme impact overview">
      <div className="container-custom">
        <div className="premium-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-2xl ${stat.bg} flex items-center justify-center mb-2 shadow-sm`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#273029]">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#798576] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
          <p className="mt-8 text-center text-xs sm:text-sm text-[#798576] leading-relaxed max-w-3xl mx-auto">
            Figures are cumulative programme estimates maintained by Parivartan Welfare Society since
            2015 across food, volunteer engagement, family support and outreach locations.{" "}
            <Link href="/impact" className="text-[#23361D] font-semibold hover:underline">
              See impact notes
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
