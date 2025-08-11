"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-primary/30">
      <div className="container mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-primary">{siteConfig.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{siteConfig.title}</p>
            <p className="text-muted-foreground text-sm">
              Building innovative digital solutions with modern technologies and best practices.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {siteConfig.navigation.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  whileHover={{ x: 5 }}
                  className="text-muted-foreground hover:text-primary transition-colors text-left text-sm"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Email:</span>{" "}
                <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Phone:</span>{" "}
                <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Location:</span> {siteConfig.contact.location}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-6">
            {siteConfig.social.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:text-primary-foreground group"
                aria-label={`Visit ${social.name} profile`}
              >
                <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary/20 mb-6"></div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">Designed and developed by {siteConfig.name}</p>
          </div>

          {/* <div className="flex items-center space-x-6 text-xs text-muted-foreground">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Privacy Policy
            </motion.button>
            <span>•</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Terms of Service
            </motion.button>
            <span>•</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hover:text-primary transition-colors"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Contact
            </motion.button>
          </div> */}
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <motion.button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <span className="text-lg">↑</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
