'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

export const Collapsible = CollapsiblePrimitive.Root

export const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

export const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

export default Object.assign(Collapsible, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent
})
