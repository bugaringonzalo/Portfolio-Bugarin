"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type TechCategory = 'frontend' | 'backend' | 'mobile' | 'other'

interface TechItem {
  name: string
  icon: string
  category: TechCategory
  proficiency: number // 1-10
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', icon: '⚛️', category: 'frontend', proficiency: 9 },
  { name: 'Next.js', icon: '▲', category: 'frontend', proficiency: 8 },
  { name: 'TypeScript', icon: '📘', category: 'frontend', proficiency: 8 },
  { name: 'TailwindCSS', icon: '🌊', category: 'frontend', proficiency: 9 },
  { name: 'Redux', icon: '🔄', category: 'frontend', proficiency: 7 },
  { name: 'HTML/CSS', icon: '🎨', category: 'frontend', proficiency: 9 },
  
  // Backend
  { name: 'Node.js', icon: '🟢', category: 'backend', proficiency: 8 },
  { name: 'Express', icon: '🚂', category: 'backend', proficiency: 8 },
  { name: 'MongoDB', icon: '🍃', category: 'backend', proficiency: 7 },
  { name: 'Firebase', icon: '🔥', category: 'backend', proficiency: 8 },
  { name: 'REST API', icon: '🔄', category: 'backend', proficiency: 9 },
  { name: 'GraphQL', icon: '◢', category: 'backend', proficiency: 7 },
  
  // Mobile
  { name: 'React Native', icon: '📱', category: 'mobile', proficiency: 7 },
  { name: 'Expo', icon: '🔮', category: 'mobile', proficiency: 7 },
  
  // Other
  { name: 'Git', icon: '🔀', category: 'other', proficiency: 8 },
  { name: 'Webpack', icon: '📦', category: 'other', proficiency: 7 },
  { name: 'Jest', icon: '🃏', category: 'other', proficiency: 7 },
  { name: 'CI/CD', icon: '🔄', category: 'other', proficiency: 6 },
  { name: 'WordPress', icon: '📰', category: 'other', proficiency: 8 },
]

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>('frontend')
  
  const filteredTech = techStack.filter(item => 
    activeCategory === 'frontend' ? item.category === 'frontend' : 
    activeCategory === 'backend' ? item.category === 'backend' : 
    activeCategory === 'mobile' ? item.category === 'mobile' : 
    item.category === 'other'
  )
  
  return (
    <Tabs defaultValue="frontend" onValueChange={(value) => setActiveCategory(value as TechCategory)}>
      <TabsList className="mb-6 w-full md:w-auto">
        <TabsTrigger value="frontend">Frontend</TabsTrigger>
        <TabsTrigger value="backend">Backend</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      
      {['frontend', 'backend', 'mobile', 'other'].map((category) => (
        <TabsContent 
          key={category} 
          value={category}
          className="mt-0"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {filteredTech.map((tech, index) => (
              <TechItem key={tech.name} tech={tech} index={index} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function TechItem({ tech, index }: { tech: TechItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full overflow-hidden border border-border/50 hover:border-primary/50 transition-colors">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <div className="text-2xl mb-2">{tech.icon}</div>
          <h4 className="font-medium mb-1">{tech.name}</h4>
          <div className="w-full bg-muted h-1.5 rounded-full mt-2 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full",
                tech.proficiency >= 8 ? "bg-primary" : 
                tech.proficiency >= 6 ? "bg-info" : "bg-muted-foreground"
              )}
              style={{ width: `${tech.proficiency * 10}%` }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}