'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import img from '../assets/cute-img.jpg'

interface RevealProps {
  children: React.ReactNode
}

export function Reveal({ children }: RevealProps) {
  const [isRevealing, setIsRevealing] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Begin the reveal after a short loading pause
    const timer = setTimeout(() => {
      setIsRevealing(true)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Fixed loading overlay */}
      <AnimatePresence onExitComplete={() => setIsDone(true)}>
        {!isRevealing && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center
             bg-zinc-800"
            exit={{
              clipPath: [
                'circle(150% at 100% 100%)',
                'circle(0% at 100% 100%)',
              ],
              opacity: 0
            }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {/* Loading indicator */}
            <motion.div
                    animate={{ opacity: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.8,
                        ease: 'easeOut',
                    }}
             className="flex flex-col items-center gap-6">
               <img src={img.src} alt="" className='size-24 rounded-lg ' />
               <p className="font-mono text-zinc-300">
                Loading...
               </p>
           </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content revealed after the overlay exits */}
      <AnimatePresence>
        {isDone && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{  ease: 'easeIn' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}