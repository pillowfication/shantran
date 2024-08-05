import { type Toast, type ToastActionElement } from '@/components/ui/toast'
import { useEffect, useState, type ComponentProps, type ReactNode } from 'react'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ComponentProps<typeof Toast> & {
  id: string
  title?: ReactNode
  description?: ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST'
} as const

let count = 0

function genId (): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  { type: ActionType['ADD_TOAST'], toast: ToasterToast } |
  { type: ActionType['UPDATE_TOAST'], toast: Partial<ToasterToast> } |
  { type: ActionType['DISMISS_TOAST'], toastId?: ToasterToast['id'] } |
  { type: ActionType['REMOVE_TOAST'], toastId?: ToasterToast['id'] }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({ type: 'REMOVE_TOAST', toastId })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map(toast => toast.id === action.toast.id ? { ...toast, ...action.toast } : toast)
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId !== undefined) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach(toast => { addToRemoveQueue(toast.id) })
      }

      return {
        ...state,
        toasts: state.toasts.map(toast => toast.id === toastId || toastId === undefined ? { ...toast, open: false } : toast)
      }
    }

    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: action.toastId === undefined ? [] : state.toasts.filter(toast => toast.id !== action.toastId)
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch (action: Action): void {
  memoryState = reducer(memoryState, action)
  listeners.forEach(listener => { listener(memoryState) })
}

export function toast ({ ...props }: Omit<ToasterToast, 'id'>): { id: string, update: (props: ToasterToast) => void, dismiss: () => void } {
  const id = genId()
  const update = (props: ToasterToast): void => { dispatch({ type: 'UPDATE_TOAST', toast: { ...props, id } }) }
  const dismiss = (): void => { dispatch({ type: 'DISMISS_TOAST', toastId: id }) }

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: open => {
        if (!open) {
          dismiss()
        }
      }
    }
  })

  return {
    id,
    dismiss,
    update
  }
}

export function useToast (): State & { toast: typeof toast, dismiss: (toastId?: string) => void } {
  const [state, setState] = useState(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => { dispatch({ type: 'DISMISS_TOAST', toastId }) }
  }
}
