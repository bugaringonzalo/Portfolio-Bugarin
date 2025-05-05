"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, href: 'https://github.com/johndoe' },
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com/in/johndoe' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com/johndoe' },
    { name: 'Email', icon: <Mail className="h-5 w-5" />, href: 'mailto:contact@johndoe.dev' },
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              John Doe
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Web developer specialized in creating professional, interactive and high-performance web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    aria-label={link.name}
                  >
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>New York, NY</li>
              <li>contact@johndoe.dev</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}