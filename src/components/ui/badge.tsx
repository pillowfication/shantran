import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

export const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors' +
  ' focus:outline-none focus:ring-inset focus:ring-1 focus:ring-ring' +
  ' disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground'
      },
      size: {
        sm: 'text-xs font-semibold',
        lg: 'text-sm'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm'
    }
  }
)

export const Badge = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
>(({ variant, size, className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      badgeVariants({ variant, size }),
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Badge.displayName = 'Badge'

export default Badge
