"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ArrowRight, Utensils, BookOpen, Stethoscope, Home } from "lucide-react"
import { Button } from "@/components/ui/Button"

const programs = [
  {
    id: "food",
    title: "Daily Food Distribution Drive",
    desc: "Every day, our volunteers prepare and distribute fresh, warm meals to daily wage labourers, elderly individuals, and families in need on the streets.",
    icon: Utensils,
    color: "text-[#C37C24]",
    bg: "bg-[#fdf3e3]",
    image: "/images/food_distribution/food_distribution_1.jpeg",
    alt: "Parivartan Welfare Society volunteers distributing hot meals to people"
  },
  {
    id: "blankets",
    title: "Winter Blanket Distribution",
    desc: "During cold winter nights, our team delivers thick, protective blankets to people sleeping outdoors and elderly citizens in vulnerable areas.",
    icon: Home,
    color: "text-[#2e4626]",
    bg: "bg-[#eef2eb]",
    image: "/images/blanket_distribution/blanket_distribution_1.jpeg",
    alt: "Volunteers distributing warm blankets to needy families"
  },
  {
    id: "plantation",
    title: "Tree Plantation Drive",
    desc: "We organize local tree plantation drives to plant native saplings, water them regularly, and create green, healthy spaces in our neighbourhoods.",
    icon: BookOpen,
    color: "text-[#C37C24]",
    bg: "bg-[#eef2eb]",
    image: "/images/plantation/plantation_image_1.jpeg",
    alt: "Volunteers planting saplings during a tree plantation drive"
  },
  {
    id: "community",
    title: "Community Relief & Outreach",
    desc: "From emergency meal distribution to helping struggling families during hardship, our volunteers work hand-in-hand with local communities.",
    icon: Stethoscope,
    color: "text-[#C37C24]",
    bg: "bg-[#fdf3e3]",
    image: "/images/blanket_distribution/blanket_distribution_8.jpeg",
    alt: "Community outreach and blanket relief distribution by Parivartan Welfare Society"
  }
]

export function OurPrograms() {
  return (
    <section className="section-spacing bg-[#F6F2E8]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader 
            badge="What We Do"
            title="Our Flagship Programs"
            subtitle="Targeted initiatives designed to address the most critical needs of our society."
            className="mb-0"
          />
          <Button variant="outline" className="hidden md:flex">
            View All Programs
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon
            return (
              <motion.div
                key={prog.id}
                className="premium-card overflow-hidden group flex flex-col sm:flex-row"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Image */}
                <div className="w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden">
                  <img 
                    src={prog.image} 
                    alt={prog.alt || prog.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center">
                  <div className={`w-12 h-12 rounded-xl ${prog.bg} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${prog.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-[#273029] mb-3">{prog.title}</h3>
                  <p className="text-[#798576] text-sm leading-relaxed mb-6 flex-1">
                    {prog.desc}
                  </p>
                  <a href={`/programs/${prog.id}`} className="inline-flex items-center text-sm font-bold text-[#23361D] hover:text-[#1b2916] group/link">
                    Explore Program
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
          <Button variant="outline" className="w-full">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
