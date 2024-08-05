import Toaster from '@/components/ui/toaster'
import { cn } from '@/lib/utils'
import { type Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { type ReactElement, type ReactNode } from 'react'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Shantran',
  description: 'TODO'
}

export default function RootLayout ({ children }: { children: ReactNode }): ReactElement {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' rel='stylesheet' />
      </head>
      <body className={cn('min-h-screen bg-background font-sans antialiased text-xl font', fontSans.variable)}>
        <nav className='px-5'>
          <div className='mx-auto w-full max-w-screen-xl'>
            <ul className='flex w-full [&>li]:inline-block [&>li]:px-2 [&>li]:py-5'>
              <li className='flex-grow'>SHANNON TRAN</li>
              <li><a href='#about'>About</a></li>
              <li><a href='#research'>Research</a></li>
              <li><a href='#cv'>CV</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        </nav>
        <main className='mx-auto w-full max-w-screen-xl mt-2 px-10'>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}
