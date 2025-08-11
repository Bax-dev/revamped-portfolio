"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"
import { siteConfig } from "@/lib/config"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadResume = () => {
    try {
      // Create a temporary link element
      const link = document.createElement("a")
      link.href = "https://drive.google.com/uc?export=download&id=157s-nL4evgche4imNNVUvStvvebeMamH"
      link.target = "_blank"
      link.rel = "noopener noreferrer"
      
      // Append to DOM, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error opening resume link:", error)
      // Fallback: open in new tab
      window.open("https://drive.google.com/file/d/157s-nL4evgche4imNNVUvStvvebeMamH/view?usp=sharing", "_blank")
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-8"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* SEO Hidden Content */}
      <div className="sr-only">
        <h1 itemProp="name">{siteConfig.name} - Backend Developer & Mechatronics Engineer</h1>
        <p itemProp="jobTitle">{siteConfig.title}</p>
        <p itemProp="description">{siteConfig.seo.description}</p>
        <span itemProp="knowsAbout">
          Backend Development, Mechatronics Engineering, Node.js, Python, React, Next.js, API Development, Database
          Design, Embedded Systems, Robotics, Automation, IoT
        </span>
        <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
          <span itemProp="name">Freelance Developer</span>
        </span>
        <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">{siteConfig.contact.location}</span>
        </address>
        <a itemProp="email" href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        <a itemProp="telephone" href={`tel:${siteConfig.contact.phone}`}>
          {siteConfig.contact.phone}
        </a>
      </div>

      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-16 h-16 bg-primary rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 right-32 w-12 h-12 bg-primary/50 rounded-lg"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-20 w-8 h-8 bg-primary/30 rounded-full"
        />
      </div>

      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
            itemProp="name"
          >
            {siteConfig.name}
          </motion.h1>

          {/* Professional Titles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4" itemProp="jobTitle">
              Backend Developer & Mechatronics Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-muted-foreground">
              <span className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                🚀 Backend Development
              </span>
              <span className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                🤖 Mechatronics Engineering
              </span>
              <span className="bg-primary/10 px-4 py-2 rounded-full border border-primary/20"> API Architecture</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto"
            itemProp="description"
          >
            {siteConfig.tagline}
          </motion.p>

       
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-8 text-sm text-muted-foreground/70"
          >
            {/* <p className="max-w-4xl mx-auto">
              Specializing in <strong>Node.js</strong>, <strong>Python</strong>, <strong>API Development</strong>,
              <strong> Database Design</strong>, <strong>Microservices</strong>, <strong>Cloud Architecture</strong>,
              <strong> Embedded Systems</strong>, <strong>Robotics</strong>, <strong>IoT Solutions</strong>, and
              <strong> Industrial Automation</strong>
            </p> */}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              Get In Touch
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault()
                console.log("Download Resume button clicked!")
                handleDownloadResume()
              }}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-4">Discover my work</p>
            <motion.button
              onClick={() => scrollToSection("about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
