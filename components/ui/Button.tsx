'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never
  external?: never
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string
  external?: boolean
  type?: never
  disabled?: never
  onClick?: never
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    'bg-gold text-espresso-deep',
    'hover:bg-gold-deep',
    'border border-transparent',
    'shadow-sm hover:shadow-md'
  ),
  secondary: cn(
    'bg-transparent text-gold border border-gold',
    'hover:bg-gold/10 hover:border-gold-deep'
  ),
  outline: cn(
    'bg-transparent text-cream border border-cream/60',
    'hover:bg-cream/10 hover:border-cream'
  ),
  ghost: cn(
    'bg-transparent text-espresso',
    'hover:bg-espresso/5',
    'border border-transparent'
  ),
  text: cn(
    'bg-transparent text-gold',
    'hover:text-gold-deep',
    'border-none p-0',
    'animated-underline'
  ),
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const baseStyles = cn(
  'inline-flex items-center justify-center',
  'font-sans font-medium tracking-wide',
  'transition-all duration-300 ease-luxury',
  'focus-ring',
  'disabled:opacity-50 disabled:cursor-not-allowed'
)

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  } = props

  const classes = cn(
    baseStyles,
    variant !== 'text' && sizeStyles[size],
    variantStyles[variant],
    className
  )

  if ('href' in props && props.href) {
    const { href, external } = props

    if (external) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  const { type = 'button', disabled, onClick } = rest as ButtonAsButton

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
})
