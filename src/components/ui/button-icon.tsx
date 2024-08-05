import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { type ComponentProps, type ReactElement } from 'react'

export const ButtonIcon = ({ tooltip, className, children, ...props }: ComponentProps<typeof Button> & {
  tooltip: string
}): ReactElement => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant='ghost'
        size='icon'
        className={cn('p-0', className)}
        {...props}
      >
        {children}
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      {tooltip}
    </TooltipContent>
  </Tooltip>
)

export default ButtonIcon
