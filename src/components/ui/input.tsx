'use client'

import { cn } from '@/lib/utils'
import { forwardRef, useEffect, useRef, useState, type ComponentProps, type InputHTMLAttributes, type ReactElement } from 'react'

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'flex h-8 border border-input rounded-md bg-background px-3 py-1 text-sm' +
      ' file:border-0 file:pl-0 file:bg-transparent file:text-sm file:font-medium' +
      ' placeholder:text-muted-foreground' +
      ' focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-1 focus-visible:ring-ring' +
      ' disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
))
Input.displayName = 'Input'

export const InputNumber = ({ value, onChange, onBlur, ...props }: {
  value: number
  onChange: (value: number) => void
} & Omit<ComponentProps<typeof Input>, 'type' | 'value' | 'onChange'>): ReactElement => {
  const [numericalValue, setNumericalValue] = useState(value)
  const [displayValue, setDisplayValue] = useState(String(value))

  useEffect(() => {
    if (numericalValue !== value) {
      setNumericalValue(value)
      setDisplayValue(String(value))
    }
  }, [value])

  return (
    <Input
      type='number'
      value={displayValue}
      onChange={event => {
        const newNumberValue = Number(event.target.value)
        setNumericalValue(newNumberValue)
        setDisplayValue(event.target.value)

        if (!isNaN(newNumberValue)) {
          onChange(newNumberValue)
        }
      }}
      onBlur={event => {
        setDisplayValue(String(numericalValue))
        onBlur?.(event)
      }}
      {...props}
    />
  )
}

export const InputFile = ({ file, onFileChange, ...props }: {
  file: File | null
  onFileChange: (file: File | null) => void
} & Omit<ComponentProps<typeof Input>, 'type' | 'value' | 'onChange'>): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current !== null) {
      const dataTransfer = new DataTransfer()
      if (file !== null) {
        dataTransfer.items.add(file)
      }
      inputRef.current.files = dataTransfer.files
    }
  }, [file])

  return (
    <Input
      type='file'
      ref={inputRef}
      onChange={event => { onFileChange(event.target.files?.item(0) ?? null) }}
      {...props}
    />
  )
}

export default Object.assign(Input, {
  Number: InputNumber,
  File: InputFile
})
