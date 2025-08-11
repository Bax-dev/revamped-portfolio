"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { siteConfig } from "@/lib/config"
import { useEffect } from "react"

interface SidebarProps {
  activeSection: string
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

export default function Sidebar({ activeSection, isOpen, onToggle, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose() // Close sidebar after navigation on mobile
  }

  // const handleDownloadResume = () => {
  //   // Create a dummy PDF download
  //   const link = document.createElement("a")
  //   link.href = "/resume.pdf"
  //   link.download = "Alex_Johnson_Resume.pdf"
  //   link.click()
  // }

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar")
      const toggleButton = document.getElementById("sidebar-toggle")

      if (
        isOpen &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onClose])

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        id="sidebar-toggle"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onToggle}
        className="fixed top-6 left-6 z-50 w-12 h-12 bg-background/80 hover:bg-primary/80 border border-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/30"
      >
        {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            id="sidebar"
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-background via-card to-background border-r border-primary/30 backdrop-blur-sm z-50 flex flex-col shadow-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg"
                aria-label="Close sidebar"
              >
                <X className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </motion.button>
            </div>

            {/* Profile Section */}
            <div className="px-8 pb-8 text-center border-b border-primary/30">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/50">
                  <img
                    src="/picture.png"
                    alt={siteConfig.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl font-bold text-primary mb-2"
              >
                {siteConfig.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-muted-foreground mb-6"
              >
                {siteConfig.title}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-3"
              >
                {/* <Button
                  onClick={handleDownloadResume}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button> */}

                {/* Dark Mode Toggle */}
                <Button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  variant="outline"
                  className="w-full border-primary/30 hover:bg-primary/10 transition-all duration-300"
                >
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="ml-2">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                </Button>
              </motion.div>
            </div>

            
            <nav className="flex-1 p-6">
              <ul className="space-y-2">
                {siteConfig.navigation.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-300 font-medium ${
                        activeSection === item.id
                          ? "bg-primary/20 text-primary border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div className="p-6 border-t border-primary/30">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex justify-center space-x-4"
              >
                {siteConfig.social.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:text-primary-foreground"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
