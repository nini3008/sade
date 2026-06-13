import { cn } from '@/lib/utils'

interface SectionLabelProps {
  className?: string
  children: React.ReactNode
}

export function SectionLabel({ className, children }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-label uppercase tracking-widest text-gold font-sans font-medium mb-4',
        className
      )}
    >
      {children}
    </span>
  )
}
