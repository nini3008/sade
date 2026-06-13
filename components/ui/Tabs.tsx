'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

export const Tabs = TabsPrimitive.Root

export function TabsList({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <TabsPrimitive.List
      className={cn(
        'inline-flex items-center gap-1',
        'border-b border-gold-subtle',
        'mb-8',
        className
      )}
    >
      {children}
    </TabsPrimitive.List>
  )
}

export function TabsTrigger({
  value,
  className,
  children,
}: {
  value: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className={cn(
        'px-4 py-3',
        'text-sm font-medium tracking-wide',
        'text-ink-muted',
        'border-b-2 border-transparent -mb-px',
        'transition-all duration-300',
        'hover:text-espresso',
        'data-[state=active]:text-espresso data-[state=active]:border-gold',
        'focus-ring',
        className
      )}
    >
      {children}
    </TabsPrimitive.Trigger>
  )
}

export function TabsContent({
  value,
  className,
  children,
}: {
  value: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <TabsPrimitive.Content
      value={value}
      className={cn(
        'focus:outline-none',
        'data-[state=active]:animate-fade-in',
        className
      )}
    >
      {children}
    </TabsPrimitive.Content>
  )
}
