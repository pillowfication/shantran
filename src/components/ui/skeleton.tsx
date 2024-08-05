import { cn } from '@/lib/utils'
import { type HTMLAttributes, type ReactElement } from 'react'

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactElement => (
  <div
    className={cn(
      'animate-pulse rounded-md bg-muted',
      className
    )}
    {...props}
  />
)

export default Skeleton
