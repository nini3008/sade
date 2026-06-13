import { cn } from '@/lib/utils'

type ContainerSize = 'narrow' | 'content' | 'default' | 'wide'

interface ContainerProps {
  size?: ContainerSize
  className?: string
  children: React.ReactNode
}

const sizeStyles: Record<ContainerSize, string> = {
  narrow: 'max-w-narrow',
  content: 'max-w-content',
  default: 'max-w-6xl',
  wide: 'max-w-wide',
}

export function Container({
  size = 'default',
  className,
  children,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-8 lg:px-12',
        sizeStyles[size],
        className
      )}
    >
      {children}
    </div>
  )
}
