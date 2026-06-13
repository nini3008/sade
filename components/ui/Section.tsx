import { cn } from '@/lib/utils'
import { Container } from './Container'

type SectionVariant = 'cream' | 'beige' | 'espresso' | 'deepEspresso'

interface SectionProps {
  variant?: SectionVariant
  grain?: boolean
  className?: string
  containerSize?: 'narrow' | 'content' | 'default' | 'wide'
  children: React.ReactNode
  id?: string
}

const variantStyles: Record<SectionVariant, string> = {
  cream: 'bg-cream text-espresso',
  beige: 'bg-beige text-espresso',
  espresso: 'bg-espresso text-cream',
  deepEspresso: 'bg-espresso-deep text-cream',
}

export function Section({
  variant = 'cream',
  grain = false,
  className,
  containerSize = 'default',
  children,
  id,
}: SectionProps) {
  const isDark = variant === 'espresso' || variant === 'deepEspresso'
  const shouldHaveGrain = grain && isDark

  return (
    <section
      id={id}
      className={cn(
        'relative py-20 md:py-28 lg:py-32',
        variantStyles[variant],
        shouldHaveGrain && 'grain-overlay',
        className
      )}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  )
}
