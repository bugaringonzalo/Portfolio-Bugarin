"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { faqData } from '@/lib/data'

interface Message {
  id: string
  text: string
  sender: 'bot' | 'user'
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: '1', 
      text: "Hi there! I'm John's virtual assistant. How can I help you today?", 
      sender: 'bot' 
    }
  ])
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages])

  const handleQuestionClick = (question: string, answer: string) => {
    // Add user question
    setMessages(prev => [...prev, { 
      id: Date.now().toString(), 
      text: question, 
      sender: 'user' 
    }])
    
    // Simulate bot typing with a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        text: answer, 
        sender: 'bot' 
      }])
    }, 500)
  }

  return (
    <>
      {/* Chat button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Button
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open chatbot"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="shadow-xl border-border/50">
              <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-sm">John's Assistant</h3>
                    <p className="text-xs text-muted-foreground">Ask me anything</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chatbot"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>

              <ScrollArea className="h-80" ref={scrollAreaRef}>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`rounded-lg px-4 py-2 max-w-[80%] ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </ScrollArea>

              <CardFooter className="p-4 border-t">
                <div className="space-y-2 w-full">
                  <p className="text-xs text-muted-foreground mb-2">Select a question:</p>
                  <div className="flex flex-wrap gap-2">
                    {faqData.slice(0, 3).map((faq) => (
                      <Button
                        key={faq.id}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleQuestionClick(faq.question, faq.answer)}
                      >
                        {faq.question.length > 25
                          ? `${faq.question.substring(0, 25)}...`
                          : faq.question}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}