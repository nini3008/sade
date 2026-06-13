'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { MobileDrawer, MobileDrawerTrigger } from '@/components/ui/MobileDrawer'

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT' },
  { href: '/performance-library', label: 'THE PERFORMANCE LIBRARY' },
  { href: '/contact', label: 'CONTACT' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500',
        isScrolled
          ? 'bg-espresso/95 backdrop-blur-md py-4 shadow-lg'
          : isHomePage
            ? 'bg-transparent py-6'
            : 'bg-espresso py-6'
      )}
    >
      <Container size="wide">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="focus-ring-dark"
          >
            <span className="text-sm text-cream tracking-[0.3em] font-light">
              SADE IRIAH
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-xs tracking-[0.15em]',
                    'transition-colors duration-300',
                    'focus-ring-dark',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-cream/80 hover:text-gold'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:hidden">
            <MobileDrawerTrigger
              onClick={() => setMobileMenuOpen(true)}
              className="text-cream"
            />
          </div>
        </nav>
      </Container>

      <MobileDrawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <nav className="flex flex-col gap-2 mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'text-xl font-serif py-3 tracking-wide',
                'transition-colors duration-300',
                'focus-ring-dark',
                pathname === link.href
                  ? 'text-gold'
                  : 'text-cream hover:text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8 border-t border-cream/10">
          <p className="text-cream/60 text-sm tracking-widest">
            SADE IRIAH
          </p>
          <p className="text-cream/40 text-xs mt-1">
            PhD • Behavioral Neuroscience
          </p>
        </div>
      </MobileDrawer>
    </header>
  )
}
