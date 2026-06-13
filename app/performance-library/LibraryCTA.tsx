'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { EditorialHeading } from '@/components/ui/EditorialHeading'
import { Button } from '@/components/ui/Button'

export function LibraryCTA() {
  return (
    <Section variant="espresso" grain containerSize="wide" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <EditorialHeading as="h2" size="lg" className="text-cream mb-6">
          Let&apos;s Build What&apos;s Next.
        </EditorialHeading>
        <p className="text-xl text-cream/70 mb-10 font-serif italic">
          Interested in working together or learning more?
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Get in Touch
        </Button>
      </motion.div>
    </Section>
  )
}
