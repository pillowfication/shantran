'use client'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState, type ComponentProps, type ReactElement, type ReactNode } from 'react'

export const ButtonConfirmation = ({
  title,
  description,
  onConfirm,
  className,
  children,
  ...props
}: ComponentProps<typeof Button> & {
  title: ReactNode
  description: ReactNode
  onConfirm: () => void
}): ReactElement => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className={className}
          {...props}
        >
          {children ?? title}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => {
              setDialogOpen(false)
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDialogOpen(false)
              onConfirm()
            }}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ButtonConfirmation
