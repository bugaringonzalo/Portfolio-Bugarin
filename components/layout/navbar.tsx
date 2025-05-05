// filepath: c:\Users\Gonzalo\Downloads\portfolio-template-2\project\components\layout\navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
// Remove LanguageToggle import
import { SimpleLanguageToggle } from "@/components/ui/simple-language-toggle"; // Import the new toggle
// Remove useTranslations import
import { useLanguage } from "@/context/LanguageContext"; // Import the context hook
import { cn } from "@/lib/utils";

// Define translations directly or import from a central object
const navTranslations = {
  home: { en: "Home", es: "Inicio" },
  about: { en: "About", es: "Acerca de" },
  projects: { en: "Projects", es: "Proyectos" },
  testimonials: { en: "Testimonials", es: "Testimonios" },
  contact: { en: "Contact", es: "Contacto" },
};

// Update navItems to use keys matching the translations object
const navItems: { nameKey: keyof typeof navTranslations; href: string }[] = [
  { nameKey: "home", href: "/" },
  { nameKey: "about", href: "#about" },
  { nameKey: "projects", href: "#projects" },
  { nameKey: "testimonials", href: "#testimonials" },
  { nameKey: "contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage(); // Use the language context hook

  // ... useEffect for scroll ...

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold transition-colors hover:text-primary"
          >
            <span className="sr-only">John Doe</span>
            JD
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.nameKey}
                href={item.href}
                className="font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={handleNavItemClick}
              >
                {/* Use the t function with the translation object */}
                {t(navTranslations[item.nameKey])}
              </Link>
            ))}
            <ThemeToggle />
            <SimpleLanguageToggle /> {/* Use the new toggle */}
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <SimpleLanguageToggle /> {/* Use the new toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t({
                en: isOpen ? "Close menu" : "Open menu",
                es: isOpen ? "Cerrar menú" : "Abrir menú",
              })}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.nameKey}
                    href={item.href}
                    className="py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={handleNavItemClick}
                  >
                    {t(navTranslations[item.nameKey])}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
