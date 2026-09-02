"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Plus, Minus } from "lucide-react"
import { homeFaqs } from "@/data/homeFaqs"

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="section-spacing bg-white" id="faq">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          align="center"
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Clear answers about donations, volunteering, and in-kind support."
        />

        <div className="flex flex-col gap-4 mt-12">
          {homeFaqs.map((faq, idx) => (
            <motion.div
              key={faq.q}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? "bg-[#eef2eb]/50 border-[rgba(35,54,29,0.2)]" : "bg-white border-[#ddd9d0]"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
                id={`faq-button-${idx}`}
              >
                <span className={`font-bold ${openIndex === idx ? "text-[#1b2916]" : "text-[#273029]"}`}>
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? "bg-[#23361D] text-white" : "bg-[#F6F2E8] text-[#798576]"}`}
                >
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-button-${idx}`}
                      className="px-6 pb-6 pt-0 text-[#798576] leading-relaxed text-sm"
                    >
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
