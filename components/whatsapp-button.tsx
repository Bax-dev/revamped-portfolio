"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/config"

// WhatsApp SVG Icon Component
const WhatsAppIcon = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
)

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [customMessage, setCustomMessage] = useState("")

  const defaultMessage = `Hi ${siteConfig.name}! 👋

I found your portfolio and I'm interested in discussing a project with you.

I'm looking for help with:
- Backend Development
- Mechatronics Engineering
- API Development
- IoT Solutions

Could we schedule a time to chat about my requirements?

Best regards!`

  const whatsappNumber = "+2349059412565"

  const sendWhatsAppMessage = () => {
    const message = customMessage.trim() || defaultMessage
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
    setIsOpen(false)
    setCustomMessage("")
  }

  const quickMessages = [
    {
      title: "Backend Project",
      message: `Hi ${siteConfig.name}! I need help with a backend development project using Node.js/Python. Can we discuss the requirements?`,
    },
    {
      title: "Mechatronics Solution",
      message: `Hello! I'm looking for a mechatronics engineer to help with an automation project. Are you available for consultation?`,
    },
    {
      title: "API Development",
      message: `Hi there! I need to develop REST APIs for my application. Could you help with the architecture and implementation?`,
    },
    {
      title: "IoT Integration",
      message: `Hello ${siteConfig.name}! I have an IoT project that needs backend integration. Can we schedule a call to discuss?`,
    },
  ]

  return (
    <>
      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact via WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 3 }}
          className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          Chat on WhatsApp
          <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
        </motion.div>
      </motion.div>

      {/* WhatsApp Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
            >
              <Card className="bg-background border-[#25D366]/30 shadow-2xl">
                <CardHeader className="bg-[#25D366] text-white rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <WhatsAppIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">WhatsApp Chat</CardTitle>
                        <p className="text-green-100 text-sm">Send me a message</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 h-8 w-8"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="p-4 space-y-4">
                  {/* Quick Message Templates */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">Quick Messages:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {quickMessages.map((template, index) => (
                        <motion.button
                          key={template.title}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                          onClick={() => setCustomMessage(template.message)}
                          className="p-2 text-xs bg-muted hover:bg-[#25D366]/10 rounded-lg transition-colors text-left border border-[#25D366]/20 hover:border-[#25D366]/40"
                        >
                          <div className="font-medium text-[#25D366]">{template.title}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Message Input */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Your Message:</label>
                    <Textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder={defaultMessage}
                      className="min-h-[120px] resize-none border-[#25D366]/30 focus:border-[#25D366]"
                      rows={5}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {customMessage.trim() ? "Custom message" : "Default message will be used"}
                    </p>
                  </div>

                  {/* Send Button */}
                  <Button
                    onClick={sendWhatsAppMessage}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-2"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send WhatsApp Message
                  </Button>

                  {/* Contact Info */}
                  <div className="text-center pt-2 border-t border-[#25D366]/20">
                    <p className="text-xs text-muted-foreground">Response time: Usually within 2-4 hours</p>
                    <p className="text-xs text-muted-foreground">Available: Mon-Fri, 9 AM - 6 PM PST</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
