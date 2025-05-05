"use client"

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/80 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div 
        style={{ opacity, y, scale }}
        className="container px-4 mx-auto relative z-10 text-center md:text-left py-12"
      >
        <div className="max-w-3xl mx-auto md:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hey, I'm <span className="text-primary">John Doe</span>
              <br />
              <span className="text-muted-foreground">Web Developer</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              I build exceptional digital experiences that are fast, accessible, and designed with best practices. Let's turn your vision into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button size="lg" asChild>
              <Link href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/resume.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <Link href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}