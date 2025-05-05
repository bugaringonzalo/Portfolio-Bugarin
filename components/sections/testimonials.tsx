"use client"

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { testimonialData } from '@/lib/data'

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              What people are saying about working with me.
            </p>
          </motion.div>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonialData.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full border border-border/50">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                      
                      <blockquote className="text-muted-foreground italic mb-6 flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4 border">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}