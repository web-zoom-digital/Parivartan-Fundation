"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

const images = [
  { src: "/images/food_distribution/food_distribution_1.jpeg", alt: "Volunteers serving hot meals to needy individuals" },
  { src: "/images/blanket_distribution/blanket_distribution_2.jpeg", alt: "Volunteers distributing warm winter blankets" },
  { src: "/images/plantation/plantation_image_2.jpeg", alt: "Tree plantation drive by volunteers" },
  { src: "/images/blanket_distribution/blanket_distribution_7.jpeg", alt: "Community blanket distribution camp" },
  { src: "/images/food_distribution/food_distribution_5.jpeg", alt: "Street food distribution by Parivartan Welfare Society" },
]

export function GalleryPreview() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badge="Ground Work"
            title="Glimpses of Hope"
            subtitle="Real photographs from our daily food drives, winter blanket distribution, and tree plantation initiatives."
            className="mb-0"
          />
          <Button variant="outline" className="hidden md:flex" asChild>
            <Link href="/gallery">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px] md:h-[500px]">
          <motion.div
            className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {images.slice(1).map((img, idx) => (
            <motion.div
              key={img.src}
              className="relative rounded-3xl overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden flex justify-center">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
