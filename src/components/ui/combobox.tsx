'use client'

import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useState, type ComponentProps, type ReactElement } from 'react'

export const Combobox = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  searchMessage = placeholder,
  noResultsMessage = 'No results.',
  ButtonProps
}: {
  options: Array<{
    value: string
    label: string
  }>
  value: string | null
  onChange: (value: string | null) => void
  placeholder?: string
  searchMessage?: string
  noResultsMessage?: string
  ButtonProps?: ComponentProps<typeof Button>
}): ReactElement => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          {...ButtonProps}
          className={cn(
            'w-[200px] px-3 justify-between font-normal',
            ButtonProps?.className
          )}
        >
          {value !== null
            ? options.find(option => option.value === value)?.label
            : placeholder}
          <ChevronDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder={searchMessage} />
          <CommandList>
            <CommandEmpty>{noResultsMessage}</CommandEmpty>
            <CommandGroup>
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  keywords={[option.label]}
                  onSelect={() => {
                    onChange(option.value === value ? null : option.value)
                    setOpen(false)
                  }}
                >
                  <CheckIcon
                    className={cn(
                      'mr-2 h-4 w-4',
                      option.value === value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Combobox
