'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { EditorialHeading } from '@/components/ui/EditorialHeading'
import { ContactForm } from '@/components/forms/ContactForm'

export function ContactContent() {
  return (
    <Section variant="beige" containerSize="wide" className="py-16 md:py-24">
      <div className="grid lg:grid-cols-5 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <EditorialHeading as="h2" size="md" className="mb-6">
            Connect With Me
          </EditorialHeading>
          <p className="text-ink-muted leading-relaxed mb-8">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
            I&apos;m excited to hear about your goals and explore how we can work together.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg mb-2">I&apos;d love to hear from you if:</h3>
              <ul className="space-y-3 text-ink-muted">
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">→</span>
                  <span>You&apos;re an athlete looking to elevate your mental game</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">→</span>
                  <span>Your organization wants to bring neuroscience to your team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">→</span>
                  <span>You&apos;re interested in a speaking engagement or workshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold mt-1">→</span>
                  <span>You&apos;d like to collaborate on research or media</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gold-subtle">
              <h3 className="font-serif text-lg mb-4">Direct Contact</h3>
              <a
                href="mailto:info@sadeiriah.com"
                className="text-gold hover:text-gold-deep transition-colors"
              >
                info@sadeiriah.com
              </a>
            </div>

            <div className="pt-6 border-t border-gold-subtle">
              <h3 className="font-serif text-lg mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/sadeiriah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-gold transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-cream p-8 md:p-10 border border-gold-subtle">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
