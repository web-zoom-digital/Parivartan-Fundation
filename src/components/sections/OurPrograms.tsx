"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ArrowRight, Utensils, BookOpen, Stethoscope, Home, GraduationCap, Award } from "lucide-react"
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
    image: "/images/plantation/plantation_image_3.jpeg",
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
  },
  {
    id: "women-education",
    title: "Women Education & Awareness",
    desc: "Organizing community awareness sessions and educational workshops for women and young girls to foster self-reliance, health literacy, and knowledge.",
    icon: GraduationCap,
    color: "text-[#2e4626]",
    bg: "bg-[#eef2eb]",
    image: "/images/Women education and empowerment/WhatsApp Image 2026-09-03 at 12.31.14 PM.jpeg",
    alt: "Women Education and Awareness Workshop by Parivartan Welfare Society"
  },
  {
    id: "girl-child-empowerment",
    title: "Girl Child & Skill Empowerment",
    desc: "Providing books, study kits, and educational guidance directly to young girls to support their continuous education and independent future.",
    icon: Award,
    color: "text-[#C37C24]",
    bg: "bg-[#fdf3e3]",
    image: "/images/Women education and empowerment/WhatsApp Image 2026-09-03 at 12.31.15 PM.jpeg",
    alt: "Girl Child Skill and Educational Support by Parivartan Welfare Society"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((prog, idx) => {
            const Icon = prog.icon
            return (
              <motion.div
                key={prog.id}
                className="premium-card rounded-2xl overflow-hidden group flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Image */}
                <div className="w-full aspect-[16/10] relative overflow-hidden shrink-0 border-b border-slate-100">
                  <img 
                    src={prog.image} 
                    alt={prog.alt || prog.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-10 h-10 rounded-xl ${prog.bg} flex items-center justify-center shadow-md`}>
                      <Icon className={`w-5 h-5 ${prog.color}`} />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#273029] mb-2">{prog.title}</h3>
                    <p className="text-[#798576] text-sm leading-relaxed mb-4 line-clamp-3">
                      {prog.desc}
                    </p>
                  </div>
                  <a href="/programs" className="inline-flex items-center text-sm font-bold text-[#23361D] hover:text-[#1b2916] group/link mt-auto pt-2">
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
