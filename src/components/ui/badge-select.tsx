import { badgeVariants } from '@/components/ui/badge'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { type VariantProps } from 'class-variance-authority'
import { Check, PlusIcon, XIcon } from 'lucide-react'
import { useState, type ReactElement } from 'react'

export const BadgeSelect = ({
  size = 'lg',
  options,
  selectedValues,
  onChange,
  disabled,
  numberItems = false,
  placeholder = 'Add',
  searchMessage = placeholder,
  noResultsMessage = 'No results.'
}: {
  size?: VariantProps<typeof badgeVariants>['size']
  options: Array<{
    label: string
    value: string
  }>
  selectedValues: string[]
  onChange: (newSelectedValues: string[], type: 'add' | 'remove', value: string) => void
  disabled?: boolean
  numberItems?: boolean
  placeholder?: string
  searchMessage?: string
  noResultsMessage?: string
}): ReactElement => {
  const [open, setOpen] = useState(false)

  const addValue = (value: string): void => {
    onChange([...selectedValues, value], 'add', value)
  }
  const removeValue = (value: string): void => {
    onChange(selectedValues.filter(oldValue => oldValue !== value), 'remove', value)
  }

  return (
    <div className='flex flex-wrap gap-1'>
      {selectedValues.map((value, index) => (
        <button
          key={value}
          onClick={() => { removeValue(value) }}
          disabled={disabled}
          className={cn('font-normal', badgeVariants({ variant: 'outline', size }))}
        >
          <XIcon className='w-4 h-4 -ml-1 mr-1 text-gray-500' />
          {numberItems && `${index + 1}. `}
          {options.find(option => option.value === value)?.label}
        </button>
      ))}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            disabled={disabled}
            className={cn('font-normal', badgeVariants({ variant: 'secondary', size }))}
          >
            <PlusIcon className='w-4 h-4 -ml-1 mr-1 text-gray-500' />
            {placeholder}
          </button>
        </PopoverTrigger>
        <PopoverContent className='w-[250px] p-0'>
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
                      if (selectedValues.includes(option.value)) {
                        removeValue(option.value)
                      } else {
                        addValue(option.value)
                      }
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        selectedValues.includes(option.value) ? 'opacity-100' : 'opacity-0'
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
    </div>
  )
}

export default BadgeSelect
