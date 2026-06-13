'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { cn } from '@/lib/utils'

interface MobileDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function MobileDrawer({ open, onOpenChange, children }: MobileDrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-40',
            'bg-espresso-black/60 backdrop-blur-sm',
            'data-[state=open]:animate-fade-in',
            'data-[state=closed]:animate-fade-out'
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed right-0 top-0 bottom-0 z-50',
            'w-full max-w-sm',
            'bg-espresso grain-overlay',
            'shadow-2xl',
            'data-[state=open]:animate-slide-in-right',
            'data-[state=closed]:animate-slide-out-right',
            'focus:outline-none'
          )}
        >
          <VisuallyHidden>
            <Dialog.Title>Navigation Menu</Dialog.Title>
            <Dialog.Description>Site navigation links</Dialog.Description>
          </VisuallyHidden>
          <div className="flex flex-col h-full p-8">
            <Dialog.Close
              className={cn(
                'self-end mb-8',
                'w-10 h-10 flex items-center justify-center',
                'text-cream hover:text-gold',
                'transition-colors duration-300',
                'focus-ring-dark'
              )}
              aria-label="Close navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Dialog.Close>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function MobileDrawerTrigger({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-10 h-10 flex items-center justify-center',
        'text-current hover:text-gold',
        'transition-colors duration-300',
        'focus-ring',
        className
      )}
      aria-label="Open navigation menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}
