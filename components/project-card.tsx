"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Link2, X } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Project } from '@/lib/types'

export function ProjectCard({ project }: { project: Project }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden group border border-border/50 hover:border-primary/50 transition-all duration-300">
        <div className="overflow-hidden relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={340}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button onClick={() => setIsOpen(true)}>
              View Details
            </Button>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-muted-foreground line-clamp-3 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="px-6 py-4 border-t flex justify-between">
          <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
            Details
          </Button>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button size="icon" variant="ghost" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site">
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button size="icon" variant="ghost" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Project Details Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <DialogDescription>
              {project.category} • {project.date}
            </DialogDescription>
          </DialogHeader>
          
          <div className="relative aspect-video my-4 overflow-hidden rounded-md">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Overview</h4>
              <p className="text-muted-foreground">{project.fullDescription || project.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <ul className="list-disc pl-5 text-muted-foreground">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || <li>Feature information not available</li>}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">My Role</h4>
              <p className="text-muted-foreground">{project.role || 'Role information not available'}</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Link2 className="mr-2 h-4 w-4" /> Live Site
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Source Code
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}