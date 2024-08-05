'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { type ComponentProps, type ReactElement } from 'react'
import { DayPicker } from 'react-day-picker'

export const Calendar = ({ showOutsideDays = true, className, classNames, ...props }: ComponentProps<typeof DayPicker>): ReactElement => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn(
      'inline-block p-3',
      className
    )}
    classNames={{
      months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
      month: 'space-y-4',
      caption: 'flex justify-center pt-1 relative items-center',
      caption_label: 'text-sm font-medium',
      nav: 'flex items-center space-x-1',
      nav_button: cn(buttonVariants({ variant: 'outline' }), 'w-6 h-6 p-0 bg-transparent opacity-50 hover:opacity-100'),
      nav_button_previous: 'absolute left-1',
      nav_button_next: 'absolute right-1',
      table: 'w-full border-collapse space-y-1',
      head_row: 'flex',
      head_cell: 'w-8 text-muted-foreground font-normal text-[0.8rem]',
      row: 'flex w-full mt-1',
      cell: 'w-8 h-8 p-0 text-center text-sm relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
      day: cn(buttonVariants({ variant: 'ghost' }), 'w-8 h-8 p-0 font-normal aria-selected:opacity-100'),
      day_range_end: 'day-range-end',
      day_selected: 'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
      day_today: 'bg-accent text-accent-foreground',
      day_outside: 'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
      day_disabled: 'text-muted-foreground opacity-50',
      day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
      day_hidden: 'invisible',
      ...classNames
    }}
    components={{
      IconLeft: () => <ChevronLeftIcon className='w-4 h-4' />,
      IconRight: () => <ChevronRightIcon className='w-4 h-4' />
    }}
    {...props}
  />
)
Calendar.displayName = 'Calendar'

export default Calendar
