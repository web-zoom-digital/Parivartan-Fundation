"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { ArrowRight } from "lucide-react"

const stories = [
  {
    title: "Serving hot meals on the street every single day",
    summary:
      "Our volunteers cook and distribute warm food packets directly to daily wage earners and families in need on the streets.",
    category: "Food Drive",
    image: "/images/food_distribution/food_distribution_1.jpeg",
    href: "/programs",
    cta: "See food drives",
  },
  {
    title: "Warm blankets for families sleeping in winter cold",
    summary:
      "When temperatures drop, our ground team hands out thick winter blankets to elders and children outdoors.",
    category: "Winter Relief",
    image: "/images/blanket_distribution/blanket_distribution_3.jpeg",
    href: "/programs",
    cta: "View blanket drives",
  },
  {
    title: "Planting native trees for a greener tomorrow",
    summary:
      "Joining hands with local communities to plant saplings and ensure regular watering for healthier neighborhood green cover.",
    category: "Tree Plantation",
    image: "/images/plantation/plantation_image_3.jpeg",
    href: "/programs",
    cta: "Support tree plantation",
  },
]

export function LatestBlogs() {
  return (
    <section className="section-spacing bg-[#F6F2E8]" aria-labelledby="ground-stories-heading">
      <div className="container-custom">
        <SectionHeader
          align="center"
          badge="From the Ground"
          title="Real Stories from Our Work"
          subtitle="Short updates drawn from programmes we run today — food, education and cow welfare — with links to full pages."
        />
        <h2 id="ground-stories-heading" className="sr-only">
          Real stories from Parivartan Welfare Society programmes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {stories.map((story, idx) => (
            <motion.article
              key={story.title}
              className="premium-card overflow-hidden group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={story.href} className="relative h-56 overflow-hidden block">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#23361D]">
                  {story.category}
                </div>
              </Link>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#273029] mb-3 group-hover:text-[#23361D] transition-colors">
                  {story.title}
                </h3>
                <p className="text-[#798576] text-sm leading-relaxed mb-5 flex-1">{story.summary}</p>
                <Link
                  href={story.href}
                  className="inline-flex items-center text-sm font-bold text-[#1b2916] hover:text-[#23361D] transition-colors"
                >
                  {story.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
