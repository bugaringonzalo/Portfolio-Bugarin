"use client"

import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface Experience {
  id: number
  role: string
  company: string
  location: string
  duration: string
  description: string
  skills: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "New York, NY",
    duration: "Jan 2022 - Present",
    description: "Lead the frontend development team in creating enterprise applications. Improved site performance by 40% through code optimization and modern React practices.",
    skills: ["React", "TypeScript", "GraphQL", "Next.js"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "InnovateSoft",
    location: "Remote",
    duration: "Mar 2020 - Dec 2021",
    description: "Developed and maintained multiple web applications for clients across various industries. Implemented CI/CD pipelines and improved development workflows.",
    skills: ["Node.js", "Express", "MongoDB", "React"]
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "WebSolutions Agency",
    location: "Boston, MA",
    duration: "Jun 2018 - Feb 2020",
    description: "Created responsive websites for small businesses. Collaborated with designers to implement pixel-perfect designs and optimized site performance.",
    skills: ["JavaScript", "HTML/CSS", "WordPress", "PHP"]
  }
]

export function ExperienceTimeline() {
  return (
    <div className="relative pl-6 border-l border-border space-y-10">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline node */}
          <div className="absolute -left-[29px] h-6 w-6 rounded-full border-2 border-primary bg-background flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          
          <Card className="border border-border/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="font-bold text-lg">{experience.role}</h4>
                  <p className="text-primary">{experience.company}</p>
                  <p className="text-muted-foreground text-sm">{experience.location}</p>
                </div>
                <div className="flex items-center text-muted-foreground text-sm gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{experience.duration}</span>
                </div>
              </div>
              
              <p className="mb-4 text-muted-foreground">
                {experience.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {experience.skills.map(skill => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}