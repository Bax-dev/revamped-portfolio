"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="/backend-developer-workspace.png"
                alt="Backend Developer and Mechatronics Engineer workspace with multiple monitors, code, and electronic components"
                className="w-full h-80 object-cover rounded-lg border border-primary/30 shadow-lg"
              />
              {/* Tech overlay badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  Node.js
                </span>
                <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  Python
                </span>
              </div>
              <div className="absolute bottom-4 right-4 flex flex-wrap gap-2">
                <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  Arduino
                </span>
                <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">IoT</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {siteConfig.about.bio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Key Highlights */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Expertise</h3>
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
