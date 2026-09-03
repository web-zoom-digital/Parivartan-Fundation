"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Quote } from "lucide-react"

export function SuccessStories() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <SectionHeader 
          align="center"
          badge="Real Impact"
          title="Lives We've Changed"
          subtitle="Behind every statistic is a human story. See how your support translates into real-world change."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          
          <motion.div 
            className="premium-card flex flex-col md:flex-row overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <img 
                src="/images/food_distribution/food_distribution_3.jpeg" 
                alt="Volunteers distributing warm meals to people"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-[#f0f2ef]/50">
              <Quote className="w-8 h-8 text-emerald-200 mb-4" />
              <p className="text-[#273029] italic mb-4">
                &ldquo;Jab hamare paas khane ke paise nahi the, tab Parivartan Foundation ke volunteers ne hame garma garam khana diya. Har roz inka khana hamare liye ek sahara hai.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#273029]">Ram Kishor</p>
                <p className="text-xs text-[#798576] font-medium">Daily Wage Worker &mdash; Food Drive Beneficiary</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="premium-card flex flex-col md:flex-row overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
              <img 
                src="/images/blanket_distribution/blanket_distribution_11.jpeg" 
                alt="Blanket distribution drive during cold winter"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center bg-orange-50/50">
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-[#273029] italic mb-4">
                &ldquo;Kafati thand me hum sadak par sote the. Parivartan ki team ne hame mota kambal diya. Ab mere bachhe thand se bache rahte hain.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[#273029]">Sunita Devi</p>
                <p className="text-xs text-[#798576] font-medium">Winter Blanket Drive Beneficiary</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
