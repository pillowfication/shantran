import Alert from '@/components/ui/alert'
import { buttonVariants } from '@/components/ui/button'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'
import { type ReactElement } from 'react'

export default function NotFound (): ReactElement {
  return (
    <div className='pt-4 px-2'>
      <h1 className='text-3xl font-bold text-gray-800 mb-2'>Not Found</h1>
      <div className='mb-2'>
        <Alert variant='destructive'>
          <AlertTriangleIcon className='w-4 h-4' />
          <Alert.Title>404 Not Found</Alert.Title>
          <Alert.Description>This page does not exist!</Alert.Description>
        </Alert>
      </div>
      <Link href='/' className={buttonVariants()}>Go back home</Link>
    </div>
  )
}
