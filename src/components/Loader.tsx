"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useColorScheme } from '../hooks/useColorScheme'  // Assuming this is a custom hook
import Image from 'next/image'

export function Loader() {
  const colorScheme = useColorScheme()  // Get the current color scheme (light or dark)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    // Set a random delay for loader visibility
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2000 + Math.random() * 1000)  // Random duration between 2-4 seconds

    return () => clearTimeout(timer)
  }, [])

  // Dynamically select the logo based on the color scheme
  const logoSrc = colorScheme === 'dark' ? '/logo-white.png' : '/logo-black.png'

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-background z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: "linear", repeat: Infinity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logoSrc}  // Use the dynamically selected logo source
                alt="Logo"
                width={100}
                height={100}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
