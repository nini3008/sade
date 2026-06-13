'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface FinalCTAProps {
  title?: string
  body?: string
  buttonLabel?: string
}

export function FinalCTA({ title, body, buttonLabel }: FinalCTAProps) {
  return (
    <section className="bg-beige border-t border-gold/10">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-espresso mb-2">
              {title || 'Ready to Elevate Performance?'}
            </h2>
            <p className="text-espresso/60 italic">
              {body || "Let's build what's next."}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Button href="/contact" variant="primary" size="lg">
              {buttonLabel || 'GET IN TOUCH'}
            </Button>

            <div className="hidden md:flex items-center gap-4 text-espresso/40">
              <span className="text-sm">info@sadeiriah.com</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/thebraincoach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://linkedin.com/in/sadeiriah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <path d="M8 11v6M8 8v.01M12 16v-5c0-1 1-2 2-2s2 1 2 2v5" />
    </svg>
  )
}
