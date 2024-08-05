import { cn } from '@/lib/utils'
import { forwardRef, type TextareaHTMLAttributes } from 'react'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'flex min-h-20 rounded-md border border-input bg-background px-3 py-2 text-sm' +
      ' placeholder:text-muted-foreground' +
      ' focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-ring' +
      ' disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
))
Textarea.displayName = 'Textarea'

export default Textarea
