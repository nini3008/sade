'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { EditorialHeading } from '@/components/ui/EditorialHeading'
import { Button } from '@/components/ui/Button'

export function AboutCTA() {
  return (
    <Section variant="beige" containerSize="wide" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <EditorialHeading as="h2" size="lg" className="mb-6">
          Ready to Work Together?
        </EditorialHeading>
        <p className="text-xl text-ink-muted mb-10 font-serif italic">
          Let&apos;s explore how neuroscience can elevate your performance.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Get in Touch
        </Button>
      </motion.div>
    </Section>
  )
}
