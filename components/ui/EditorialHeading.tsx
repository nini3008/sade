import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
type HeadingSize = 'xl' | 'lg' | 'md' | 'sm'

interface EditorialHeadingProps {
  as?: HeadingLevel
  size?: HeadingSize
  className?: string
  children: React.ReactNode
}

const sizeStyles: Record<HeadingSize, string> = {
  xl: 'text-display-xl',
  lg: 'text-display-lg',
  md: 'text-display-md',
  sm: 'text-display-sm',
}

export function EditorialHeading({
  as: Component = 'h2',
  size = 'lg',
  className,
  children,
}: EditorialHeadingProps) {
  return (
    <Component
      className={cn('font-serif', sizeStyles[size], className)}
    >
      {children}
    </Component>
  )
}
