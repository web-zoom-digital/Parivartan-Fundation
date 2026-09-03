"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { HandCoins } from "lucide-react"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"

const causes = [
  {
    title: "Daily Meal Seva",
    desc: "Serving freshly prepared hot meals to daily wage earners, poor families, and homeless individuals on the street every day.",
    focus: "Food Distribution",
    image: "/images/food_distribution/food_distribution_1.jpeg",
    href: "/donate?amount=501",
  },
  {
    title: "Winter Blanket Distribution",
    desc: "Providing thick, warm blankets to families and elders sleeping in the cold to keep them safe during freezing winter nights.",
    focus: "Winter Relief",
    image: "/images/blanket_distribution/blanket_distribution_2.jpeg",
    href: "/donate?amount=1100",
  },
  {
    title: "Tree Plantation Seva",
    desc: "Planting saplings and caring for young trees in local areas to create cleaner air and a greener future for our children.",
    focus: "Tree Plantation",
    image: "/images/plantation/plantation_image_2.jpeg",
    href: "/donate?amount=2501",
  },
]

export function FeaturedCauses() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <SectionHeader
          align="center"
          badge="Priority Needs"
          title="Where Your Donation Goes First"
          subtitle="Three active programme areas you can support today — no fake fundraising bars, just clear ways to help."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, idx) => (
            <motion.div
              key={cause.title}
              className="premium-card overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <Image
                  src={cause.image}
                  alt={cause.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#23361D] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  {cause.focus}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#273029] mb-3">{cause.title}</h3>
                <p className="text-[#798576] text-sm leading-relaxed mb-6 flex-1">{cause.desc}</p>

                <Button variant="primary" className="w-full" asChild>
                  <Link href={cause.href}>
                    Donate Now <HandCoins className="w-4 h-4 ml-2 inline-block" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
