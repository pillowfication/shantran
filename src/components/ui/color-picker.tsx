'use client'

import { cn } from '@/lib/utils'
import { type ChangeEvent, type ReactElement } from 'react'
import { SketchPicker, type SketchPickerProps } from 'react-color'

interface Color {
  r: number
  g: number
  b: number
  a: number
}

export const ColorPicker = ({ color, onChange, className, ...props }: Omit<SketchPickerProps, 'color' | 'onChange'> & {
  color: Color
  onChange: (color: Color, event: ChangeEvent<HTMLInputElement>) => void
}): ReactElement => (
  <SketchPicker
    color={{
      r: color.r,
      g: color.g,
      b: color.b,
      a: color.a / 0xFF
    }}
    onChange={(color, event) => {
      onChange({
        r: color.rgb.r,
        g: color.rgb.g,
        b: color.rgb.b,
        a: (color.rgb.a ?? 1) * 0xFF
      }, event)
    }}
    className={cn(
      'border !shadow-none [&>div:nth-child(3)_input]:!w-full [&>div:nth-child(3)_input]:rounded',
      className
    )}
    {...props}
  />
)
ColorPicker.displayName = 'ColorPicker'

export default ColorPicker
