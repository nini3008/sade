'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LuxuryLinkProps {
  href: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

export function LuxuryLink({
  href,
  external,
  className,
  children,
}: LuxuryLinkProps) {
  const classes = cn(
    'inline-flex items-center gap-2',
    'text-gold font-medium',
    'transition-colors duration-300',
    'hover:text-gold-deep',
    'animated-underline',
    'focus-ring',
    className
  )

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
        <ArrowIcon />
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowIcon />
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  )
}
