import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { formatDate } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { type ComponentProps, type ReactElement } from 'react'

export const DatePicker = ({
  date,
  onSelect,
  className,
  ...props
}: Omit<ComponentProps<typeof Button>, 'onSelect'> & {
  date: Date
  onSelect: (date: Date) => void
}): ReactElement => (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        variant='outline'
        className={cn(
          'w-100 justify-start text-left font-normal',
          className
        )}
        {...props}
      >
        <CalendarIcon className='mr-2 w-4 h-4' />
        {formatDate(date, 'MM/dd/yyyy')}
      </Button>
    </PopoverTrigger>
    <PopoverContent className='w-auto p-0'>
      <Calendar
        mode='single'
        selected={date}
        defaultMonth={date}
        onSelect={date => {
          if (date !== undefined) {
            onSelect(date)
          }
        }}
        initialFocus
      />
    </PopoverContent>
  </Popover>
)

export default DatePicker
