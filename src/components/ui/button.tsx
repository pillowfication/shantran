import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { Spinner } from './spinner'

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors' +
  ' focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-ring' +
  ' disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 [&_.spinner]:border-t-primary-foreground',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 [&_.spinner]:border-t-destructive-foreground',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 [&_.spinner]:border-t-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        sm: 'h-6 rounded-md px-3',
        md: 'h-8 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'w-6 h-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md'
    }
  }
)

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    pending?: boolean
  }
>(({ variant, size, asChild = false, pending, className, children, ...props }, ref) => {
  const Component = asChild ? Slot : 'button'

  return (
    <Component
      ref={ref}
      className={cn(
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    >
      {pending !== undefined
        ? (
          <>
            <div className={cn('absolute top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center transition-opacity', pending ? 'opacity-100' : 'opacity-0')}>
              <Spinner size='inline' className='spinner' />
            </div>
            <div className={cn('transition-opacity', pending ? 'opacity-0' : 'opacity-100')}>
              {children}
            </div>
          </>
        )
        : children}
    </Component>
  )
})
Button.displayName = 'Button'

export default Button
