import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { ContactSection } from '@/components/sections/contact'
import { Chatbot } from '@/components/chatbot'

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Chatbot />
    </div>
  )
}