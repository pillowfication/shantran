import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4' +
  ' [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export const Alert = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ variant, className, children, ...props }, ref) => (
  <div
    ref={ref}
    role='alert'
    className={cn(
      alertVariants({ variant }),
      className
    )}
    {...props}
  >
    {children}
  </div>
))
Alert.displayName = 'Alert'

export const AlertTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn(
      'mb-1 font-medium leading-none tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h5>
))
AlertTitle.displayName = 'AlertTitle'

export const AlertDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-sm [&_p]:leading-relaxed',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
AlertDescription.displayName = 'AlertDescription'

export default Object.assign(Alert, {
  Title: AlertTitle,
  Description: AlertDescription
})
