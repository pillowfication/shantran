import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const phitagate = localFont({
  src: '../components/fonts/Phitagate-Regular.otf',
  weight: '400',
  style: 'normal',
  display: 'swap',
  variable: '--font-phitagate'
})

export default function RootLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={cn(inter.variable, phitagate.variable, 'antialiased font-sans')}>
      <body>
        {children}
      </body>
    </html>
  )
}
