import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Shannon Tran',
  description: 'yippee!'
}

export default function HomeLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='container mx-auto'>
      <nav>
        <ul className='flex w-full [&>li]:inline-block [&>li]:px-2 [&>li]:py-5'>
          <li className='flex-grow'>SHANNON TRAN</li>
          <li><a href='#about-me'>About</a></li>
          <li><a href='#research'>Research</a></li>
          <li><a href='/cv'>CV</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <main className='mb-20'>
        {children}
      </main>
    </div>
  )
}
