import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactElement } from 'react'

export const spinnerVariants = cva(
  'inline-block border-primary border-solid rounded-full animate-spin',
  {
    variants: {
      size: {
        sm: 'w-6 h-6 border-t-4',
        md: 'w-12 h-12 border-t-[6px]',
        lg: 'w-24 h-24 border-t-8',
        inline: 'w-[1.15em] h-[1.15em] border-t-[0.25em] align-middle'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
)

export const Spinner = ({
  size,
  fadeIn = false,
  className
}: VariantProps<typeof spinnerVariants> & {
  fadeIn?: boolean
  className?: string
}): ReactElement => {
  return (
    <div className={cn('inline-block', fadeIn && 'animate-fade-in')}>
      <div
        className={cn(
          spinnerVariants({ size }),
          className
        )}
      />
    </div>
  )
}

export default Spinner
