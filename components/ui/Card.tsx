import { cn } from '@/lib/utils'

type CardVariant = 'light' | 'dark' | 'outlined' | 'library' | 'service'

interface CardProps {
  variant?: CardVariant
  className?: string
  children: React.ReactNode
  hover?: boolean
}

const variantStyles: Record<CardVariant, string> = {
  light: cn(
    'bg-cream/90 text-espresso',
    'border border-gold-subtle'
  ),
  dark: cn(
    'bg-espresso/90 text-cream',
    'border border-cream-subtle'
  ),
  outlined: cn(
    'bg-transparent',
    'border border-gold-subtle'
  ),
  library: cn(
    'bg-cream text-espresso',
    'border border-gold-subtle',
    'shadow-sm'
  ),
  service: cn(
    'bg-cream/10 backdrop-blur-sm text-cream',
    'border border-cream-subtle'
  ),
}

const hoverStyles: Record<CardVariant, string> = {
  light: 'hover:border-gold/60 hover:shadow-lg hover:shadow-espresso/5',
  dark: 'hover:border-gold/40 hover:shadow-lg hover:shadow-black/20',
  outlined: 'hover:border-gold hover:bg-gold/5',
  library: 'hover:border-gold hover:shadow-xl hover:shadow-espresso/10 hover:-translate-y-1',
  service: 'hover:border-gold/40 hover:bg-cream/15',
}

export function Card({
  variant = 'light',
  className,
  children,
  hover = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-sm p-6 md:p-8',
        'transition-all duration-300 ease-luxury',
        variantStyles[variant],
        hover && hoverStyles[variant],
        className
      )}
    >
      {children}
    </div>
  )
}
