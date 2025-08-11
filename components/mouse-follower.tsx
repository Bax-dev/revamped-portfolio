"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 select-none"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 6,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 500,
        mass: 0.2,
      }}
    >
      {/* Angle Bracket Cursor */}
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 text-white text-sm font-bold opacity-30 blur-[1px]">&lt;/&gt;</div>

        {/* Main cursor */}
        <div className="text-white text-sm font-bold opacity-95 drop-shadow-sm filter drop-shadow-[0_0_3px_rgba(255,255,255,0.4)]">
          &lt;/&gt;
        </div>

        {/* Subtle animation dot */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_2px_rgba(255,255,255,0.6)]"
        />
      </div>
    </motion.div>
  )
}
