import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, type CollapsibleProps } from '@/components/ui/collapsible'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

function CollapsibleAbstract ({ buttonText, className, children, ...props }: CollapsibleProps & Readonly<{ buttonText: string }>) {
  return (
    <Collapsible className={cn('group/collapsible', className)} {...props}>
      <div className='text-right'>
        <CollapsibleTrigger asChild>
          <Button variant='link' className='group/button hover:no-underline'>
            <span className='group-hover/button:underline'>{buttonText}</span>
            <span className='text-xs text-gray-400 no-underline transition-transform group-data-[state=open]/collapsible:rotate-90'><ChevronRight /></span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleAbstract

// <span className='no-underline transition-transform group-data-[state=open]:rotate-90'>&gt;</span>
