"use client"

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ProjectCard } from '@/components/project-card'
import { Badge } from '@/components/ui/badge'
import { projectsData } from '@/lib/data'

type ProjectCategory = 'all' | 'web' | 'mobile' | 'design'

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'design', label: 'UI/UX Design' },
  ]

  const filteredProjects = projectsData.filter(
    project => activeCategory === 'all' || project.category === activeCategory
  )

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
            <p className="text-xl text-muted-foreground">
              A showcase of my recent work and personal projects.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              onClick={() => setActiveCategory(category.value)}
              className="mb-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}