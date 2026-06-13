import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/performance-library', label: 'Performance Library' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/sadeiriah',
    label: 'LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'mailto:info@sadeiriah.com',
    label: 'Email',
    icon: EmailIcon,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-espresso-deep text-cream grain-overlay">
      <Container size="wide" className="py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-icon.png"
                alt="Dr. Sade Iriah"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="block font-serif text-xl tracking-wide">
                  Dr. Sade Iriah
                </span>
                <span className="block text-xs text-cream/50 tracking-widest uppercase">
                  PhD • Behavioral Neuroscience
                </span>
              </div>
            </Link>
            <p className="text-cream/70 max-w-sm leading-relaxed">
              Translating brain science into performance, resilience, and
              recovery for athletes, teams, and high performers.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-gold">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-cream/70 hover:text-gold',
                      'transition-colors duration-300',
                      'text-sm'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-gold">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2',
                      'text-cream/70 hover:text-gold',
                      'transition-colors duration-300',
                      'text-sm'
                    )}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:info@sadeiriah.com"
                className="text-gold hover:text-gold-deep transition-colors duration-300"
              >
                info@sadeiriah.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/40 text-sm">
              © {currentYear} Dr. Sade Iriah. All rights reserved.
            </p>
            <p className="text-cream/30 text-xs">
              Neuroscience-driven performance consulting
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}
