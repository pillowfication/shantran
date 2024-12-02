import { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Shannon Tran',
  description: 'yippee!'
}

export default function HomeLayout ({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='container mx-auto xl:max-w-screen-lg'>
      <nav className='flex px-4 items-center'>
        <div className='flex-grow text-3xl font-phitagate font-bold text-center md:text-left py-4 md:py-0'>
          Shannon P. Tran
        </div>
        <ul className='hidden md:block [&>li]:inline-block [&>li]:px-2 [&>li]:py-5'>
          <li><a href='#about-me'>About</a></li>
          <li><a href='#research'>Research</a></li>
          <li><a href='/cv'>CV</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <main className='mb-20 px-4'>
        {children}
      </main>
    </div>
  )
}
