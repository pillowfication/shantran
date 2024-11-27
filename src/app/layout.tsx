import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={cn('antialiased', inter.className)}>
      <body>
        {children}
      </body>
    </html>
  )
}
