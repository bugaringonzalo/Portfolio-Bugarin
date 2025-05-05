import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json()
    
    // Validate form data
    const result = contactFormSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      )
    }
    
    const { name, email, subject, message } = result.data
    
    // In a real implementation, you would use your own email credentials
    // For demonstration purposes, we're creating a fake transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.example.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
    })
    
    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM || 'contact@example.com'}>`,
      to: process.env.EMAIL_TO || 'john@example.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div>
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    }
    
    // In a real implementation, you would uncomment this line
    // await transporter.sendMail(mailOptions)
    
    // For demonstration purposes, we'll just log the mail content
    console.log('Mail would be sent with:', mailOptions)
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}