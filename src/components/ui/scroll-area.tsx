'use client'

import { cn } from '@/lib/utils'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react'

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & Partial<{
    enableVertical: boolean
    enableHorizontal: boolean
  }>
>(({ enableVertical = true, enableHorizontal = false, className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn(
      'relative overflow-hidden',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
      {children}
    </ScrollAreaPrimitive.Viewport>
    {enableVertical && (
      <ScrollAreaScrollbar />
    )}
    <ScrollAreaScrollbar />
    {enableHorizontal && (
      <ScrollAreaScrollbar orientation='horizontal' />
    )}
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export const ScrollAreaScrollbar = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ orientation = 'vertical', className, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-3 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-3 flex-col border-t border-t-transparent p-[1px]',
      className
    )}
    orientation={orientation}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className='relative flex-1 rounded-full bg-gray-300' />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export default Object.assign(ScrollArea, {
  Scrollbar: ScrollAreaScrollbar
})
