"use client"

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, useInView } from 'framer-motion'
import { Loader2, Mail, MessageSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  // Form submission handler
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
      
      if (!response.ok) {
        throw new Error('Failed to send message')
      }
      
      form.reset()
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Have a project in mind or want to discuss work opportunities? I'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full space-y-8">
                <h3 className="text-xl font-bold">Contact Information</h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@johndoe.dev" className="text-muted-foreground hover:text-foreground transition-colors">
                        contact@johndoe.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 mr-3 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Social Media</p>
                      <div className="text-muted-foreground space-y-1">
                        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                          LinkedIn
                        </a>
                        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                          Twitter
                        </a>
                        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-muted-foreground text-sm">
                    I aim to respond to all inquiries within 24-48 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project, requirements, or any questions you might have..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}