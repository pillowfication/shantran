import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { flexRender, type Column, type RowData, type Table as TanstackTable } from '@tanstack/react-table'
import { ChevronDownIcon, ChevronUpIcon, ColumnsIcon, GripVerticalIcon } from 'lucide-react'
import { memo, useState, type CSSProperties, type ComponentProps, type HTMLAttributes, type ReactElement, type ReactNode } from 'react'
import { useDrag, useDrop, type ConnectableElement } from 'react-dnd'

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    title?: string
    className?: string
    style?: CSSProperties
  }
}

const DND_COLUMN = 'dnd-column'

interface DndColumnItem {
  id: string
}

function DataTableFilter<TData> ({
  table,
  filterColumn,
  className,
  ...props
}: Omit<ComponentProps<typeof Input>, 'value' | 'onChange'> & {
  table: TanstackTable<TData>
  filterColumn: string
}): ReactElement {
  return (
    <Input
      value={(table.getColumn(filterColumn)?.getFilterValue() as string) ?? ''}
      onChange={event => { table.getColumn(filterColumn)?.setFilterValue(event.target.value) }}
      className={cn(
        'w-auto max-w-md',
        className
      )}
      {...props}
    />
  )
}

function DataTableColumnSelector<TData> ({
  table,
  onChange
}: {
  table: TanstackTable<TData>
  onChange: (columnIds: string[]) => void
}): ReactElement {
  const [columns, setColumns] = useState<DndColumnItem[]>(table
    .getAllLeafColumns()
    .filter(column => column.getCanHide())
    .map(column => ({ id: column.id }))
  )

  const [, drop] = useDrop(() => ({ accept: DND_COLUMN }))

  const findColumn = (id: string): { column: DndColumnItem | undefined, index: number } => {
    const index = columns.findIndex(column => column.id === id)
    return index !== -1 ? { column: columns[index], index } : { column: undefined, index: -1 }
  }

  const moveColumn = (id: string, index: number): void => {
    const { column, index: currentIndex } = findColumn(id)
    if (column !== undefined) {
      const newColumns = [...columns]
      newColumns.splice(currentIndex, 1)
      newColumns.splice(index, 0, column)
      setColumns(newColumns)
    }
  }

  const canDeselect = table.getVisibleLeafColumns().filter(column => column.getCanHide()).length > 1

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='text-muted-foreground p-2'>
              <ColumnsIcon />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          Columns
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align='end'>
        <ul ref={drop as any}>
          {columns
            .map(column => table.getColumn(column.id))
            .filter((column): column is Column<TData> => column !== undefined)
            .map(column => (
              <ColumnItem
                key={column.id}
                column={column}
                findColumn={findColumn}
                moveColumn={moveColumn}
                onDndEnd={() => { onChange(columns.map(column => column.id)) }}
                canDeselect={canDeselect}
              />
            ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function ColumnItem<TData, TValue> ({
  column,
  findColumn,
  moveColumn,
  onDndEnd,
  canDeselect
}: {
  column: Column<TData, TValue>
  findColumn: (id: string) => { column: DndColumnItem | undefined, index: number }
  moveColumn: (id: string, index: number) => void
  onDndEnd: () => void
  canDeselect: boolean
}): ReactElement {
  const [{ isDragging }, drag, preview] = useDrag<DndColumnItem, unknown, { isDragging: boolean }>(() => ({
    type: DND_COLUMN,
    item: { id: column.id },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
    end: onDndEnd
  }), [column.id, findColumn, moveColumn])

  const [, drop] = useDrop<DndColumnItem>(() => ({
    accept: DND_COLUMN,
    hover ({ id }) {
      if (id !== column.id) {
        const { index } = findColumn(column.id)
        if (index !== -1) {
          moveColumn(id, index)
        }
      }
    }
  }), [findColumn, moveColumn])

  return (
    <li
      ref={((node: ConnectableElement) => preview(drop(node))) as any}
      className={cn('flex items-center mx-1 my-2 space-x-1', isDragging && 'opacity-25')}
    >
      <div ref={drag as any} className='cursor-grab'>
        <GripVerticalIcon className='w-4 h-4 text-gray-500' />
      </div>
      <Checkbox
        checked={column.getIsVisible()}
        onCheckedChange={checked => { column.toggleVisibility(checked === true) }}
        disabled={column.getIsVisible() && !canDeselect}
      />
      <span className='text-sm leading-none px-1'>{column.columnDef.meta?.title ?? column.id}</span>
    </li>
  )
}

function DataTableHeader<T> ({
  table,
  ...props
}: HTMLAttributes<HTMLTableSectionElement> & {
  table: TanstackTable<T>
}): ReactElement {
  return (
    <TableHeader {...props}>
      {table.getHeaderGroups().map(headerGroup => (
        <TableRow key={headerGroup.id} className='[&>th:not(:last-child)]:border-r'>
          {headerGroup.headers.map(header => (
            <TableHead key={header.id}>
              {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  )
}

function DataTableEmptyRow<T> ({
  table,
  children = 'No results.'
}: {
  table: TanstackTable<T>
  children?: ReactNode
}): ReactElement {
  return (
    <TableRow>
      <TableCell colSpan={table.getVisibleLeafColumns().length} className='h-24 text-center'>
        {children}
      </TableCell>
    </TableRow>
  )
}

function DataTableErrorRow<T> ({
  table,
  error,
  retry
}: {
  table: TanstackTable<T>
  error?: string | null
  retry?: () => void
}): ReactElement {
  return (
    <DataTableEmptyRow table={table}>
      <div className='flex flex-col space-y-2'>
        <div>Error: {error ?? 'An unknown error has occurred'}</div>
        {retry !== undefined && (
          <div><Button size='sm' onClick={() => { retry() }}>Retry</Button></div>
        )}
      </div>
    </DataTableEmptyRow>
  )
}

function DataTableLoadingRows<T> ({
  table,
  rows = 3,
  skipColumns = []
}: {
  table: TanstackTable<T>
  rows?: number
  skipColumns?: string | string[]
}): ReactElement {
  return (
    <>
      {Array.from({ length: rows }, (_, index) => (
        <TableRow key={index}>
          {table.getVisibleLeafColumns().map(column => (
            <TableCell key={column.id}>
              {(Array.isArray(skipColumns) ? !skipColumns.includes(column.id) : column.id !== skipColumns) && (
                <Skeleton className='w-4/5 h-4' />
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  )
}

function createHeader<T> ({ column }: { column: Column<T> }): ReactElement {
  if (column.columnDef.enableSorting !== false) {
    const columnSort = column.getIsSorted()
    return (
      <Button
        variant='ghost'
        onClick={() => { column.toggleSorting(columnSort === 'asc') }}
        className='w-full h-full p-0'
      >
        {column.columnDef.meta?.title ?? column.columnDef.id}
        {columnSort !== false && (
          <div className='w-0 overflow-visible'>
            {columnSort === 'asc'
              ? <ChevronUpIcon className='w-4 h-4 ml-1' />
              : <ChevronDownIcon className='w-4 h-4 ml-1' />}
          </div>
        )}
      </Button>
    )
  } else {
    return (
      <div className='text-center'>{column.columnDef.meta?.title ?? column.id}</div>
    )
  }
}

export const BasicDataTable = (memo as <T> (component: T) => T)(function BasicDataTable<T> ({
  data,
  table,
  actionColumns,
  status,
  error,
  retry,
  ContainerProps = {},
  EmptyRowProps = {},
  disableContainer = false,
  ...props
}: HTMLAttributes<HTMLTableElement> & {
  data: any | null
  table: TanstackTable<T>
  actionColumns?: string | string[]
  status: 'ok' | 'loading' | 'error'
  error: string | null
  retry: () => void
  ContainerProps?: ComponentProps<typeof TableContainer>
  EmptyRowProps?: Omit<ComponentProps<typeof DataTableEmptyRow>, 'table'>
  disableContainer?: boolean
}): ReactElement {
  const tableComponent = (
    <div className='relative'>
      <Table {...props}>
        <DataTableHeader table={table} className='z-10' />
        <TableBody>
          {data != null
            ? (
              table.getRowModel().rows.length > 0
                ? (
                  table.getRowModel().rows.map(row => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <TableCell
                          key={cell.id}
                          className={cell.column.columnDef.meta?.className}
                          style={cell.column.columnDef.meta?.style}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )
                : <DataTableEmptyRow table={table} {...EmptyRowProps} />
            )
            : status === 'loading'
              ? <DataTableLoadingRows table={table} skipColumns={actionColumns} />
              : <DataTableErrorRow table={table} error={error} retry={retry} />}
        </TableBody>
      </Table>
      {data != null && status === 'loading' && (
        <div className='absolute top-0 left-0 w-full h-full animate-pulse bg-slate-100/75' />
      )}
    </div>
  )
  return disableContainer
    ? tableComponent
    : <TableContainer {...ContainerProps}>{tableComponent}</TableContainer>
})

export {
  DataTableColumnSelector,
  DataTableEmptyRow,
  DataTableErrorRow,
  DataTableFilter,
  DataTableHeader,
  DataTableLoadingRows,
  createHeader
}
