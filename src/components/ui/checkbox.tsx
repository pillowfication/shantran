'use client'

import { cn } from '@/lib/utils'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'

export function getCheckedState (checkedList: boolean[]): CheckboxPrimitive.CheckedState {
  if (checkedList.length === 0) {
    return false
  }

  let trueCount = 0
  let falseCount = 0

  for (const checked of checkedList) {
    if (checked) {
      ++trueCount
    } else {
      ++falseCount
    }
  }

  if (trueCount === checkedList.length) {
    return true
  } else if (falseCount === checkedList.length) {
    return false
  } else {
    return 'indeterminate'
  }
}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive.Root>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer w-4 h-4 shrink-0 rounded-sm border border-primary ring-offset-background' +
      ' focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2' +
      ' disabled:cursor-not-allowed disabled:opacity-50' +
      ' data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className='flex items-center justify-center text-current'>
      <CheckIcon className='w-4 h-4' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
