'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { cn } from '@/lib/utils'

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  value,
  className,
  children,
}: {
  value: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <AccordionPrimitive.Item
      value={value}
      className={cn(
        'border-b border-gold-subtle',
        className
      )}
    >
      {children}
    </AccordionPrimitive.Item>
  )
}

export function AccordionTrigger({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'flex flex-1 items-center justify-between py-5',
          'text-left font-serif text-lg',
          'transition-colors duration-300',
          'hover:text-gold',
          'focus-ring',
          '[&[data-state=open]>svg]:rotate-180',
          className
        )}
      >
        {children}
        <svg
          className="w-5 h-5 text-gold shrink-0 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

export function AccordionContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        'overflow-hidden',
        'data-[state=open]:animate-accordion-down',
        'data-[state=closed]:animate-accordion-up',
        className
      )}
    >
      <div className="pb-5 text-ink-muted">{children}</div>
    </AccordionPrimitive.Content>
  )
}
