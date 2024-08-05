import { cn } from '@/lib/utils'
import { forwardRef, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react'

export const Table = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, children, ...props }, ref) => (
  <table
    ref={ref}
    className={cn(
      'w-full h-full caption-bottom text-sm border-separate border-spacing-0',
      className
    )}
    {...props}
  >
    {children}
  </table>
))
Table.displayName = 'Table'

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      'bg-secondary text-secondary-foreground [&_tr]:border-b',
      className
    )}
    {...props}
  >
    {children}
  </thead>
))
TableHeader.displayName = 'TableHeader'

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      '[&_tr:last-child]:border-0',
      className
    )}
    {...props}
  >
    {children}
  </tbody>
))
TableBody.displayName = 'TableBody'

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, children, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  >
    {children}
  </tfoot>
))
TableFooter.displayName = 'TableFooter'

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, children, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted [&:not(:last-child)>td]:border-b [&>th]:border-b',
      className
    )}
    {...props}
  >
    {children}
  </tr>
))
TableRow.displayName = 'TableRow'

export const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-8 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:px-3',
      className
    )}
    {...props}
  >
    {children}
  </th>
))
TableHead.displayName = 'TableHead'

export const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, children, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'px-2 py-1 align-middle',
      className
    )}
    {...props}
  >
    {children}
  </td>
))
TableCell.displayName = 'TableCell'

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  HTMLAttributes<HTMLTableCaptionElement>
>(({ className, children, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      'mt-4 text-sm text-muted-foreground',
      className
    )}
    {...props}
  >
    {children}
  </caption>
))
TableCaption.displayName = 'TableCaption'

export const TableContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'max-h-full max-w-full border rounded-md overflow-auto [&_thead]:sticky [&_thead]:top-0',
      className
    )}
    {...props}
  >
    {children}
  </div>
))
TableContainer.displayName = 'TableContainer'

export default Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
  Container: TableContainer
})
