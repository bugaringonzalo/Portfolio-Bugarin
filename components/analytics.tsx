"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // This is where you would initialize your analytics
      // For demonstration purposes, we'll just log the page view
      console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ''}`)
      
      // Replace with your actual analytics code
      // Example for Google Analytics:
      // window.gtag('config', 'GA-MEASUREMENT-ID', {
      //   page_path: pathname + (searchParams ? `?${searchParams}` : ''),
      // })
    }
  }, [pathname, searchParams])

  return null
}