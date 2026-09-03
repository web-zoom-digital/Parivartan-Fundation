"use client"

import { motion } from "framer-motion"
import { ArrowRight, Utensils, BookOpen, Leaf, Users } from "lucide-react"

const stories = [
  {
    title: "Daily Meal Distribution",
    description: "Preparing and distributing hot, fresh meal packets to daily wage workers, rickshaw pullers, and needy families on the street.",
    icon: Utensils,
    image: "/images/food_distribution/food_distribution_1.jpeg",
    color: "bg-orange-500",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    title: "Winter Blanket Relief",
    description: "Handing out thick, warm blankets to elderly individuals and young families sleeping outdoors during chilly winter nights.",
    icon: Leaf,
    image: "/images/blanket_distribution/blanket_distribution_1.jpeg",
    color: "bg-[#798576]",
    gradient: "from-emerald-500/20 to-transparent",
  },
  {
    title: "Tree Plantation Drive",
    description: "Planting native trees in local community spaces to create cleaner air and greener, healthier surroundings for future generations.",
    icon: BookOpen,
    image: "/images/plantation/plantation_image_1.jpeg",
    color: "bg-[#2e4626]",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    title: "Community Outreach",
    description: "Visiting local neighbourhoods to distribute food, blankets, and essential supplies with love, care, and total transparency.",
    icon: Users,
    image: "/images/blanket_distribution/blanket_distribution_7.jpeg",
    color: "bg-purple-500",
    gradient: "from-purple-500/20 to-transparent",
  },
]

export function ImpactStoryCards() {
  return (
    <section className="py-24 bg-[#F6F2E8] border-y border-slate-100">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#273029] mb-6 tracking-tight">
            Stories Behind the <span className="text-[#23361D]">Impact</span>
          </h2>
          <p className="text-[#798576] text-lg">
            Every photograph in our gallery represents a real initiative and a real life changed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row"
            >
              <div className="w-full sm:w-2/5 aspect-[8/3] sm:aspect-auto relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r ${story.gradient}`} />
              </div>
              
              <div className="w-full sm:w-3/5 p-8 flex flex-col justify-center">
                <div className={`w-12 h-12 rounded-2xl ${story.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform`}>
                  <story.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#273029] mb-3">{story.title}</h3>
                <p className="text-[#798576] leading-relaxed mb-6">
                  {story.description}
                </p>
                <a href="/donate" className={`inline-flex items-center gap-2 font-bold ${story.color.replace('bg-', 'text-')} hover:opacity-80 transition-opacity`}>
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
