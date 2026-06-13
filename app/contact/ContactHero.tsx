'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'

export function ContactHero() {
  return (
    <Section variant="espresso" grain containerSize="wide" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <SectionLabel>Contact</SectionLabel>
        <EditorialHeading as="h1" size="xl" className="text-cream mb-6">
          Let&apos;s Build What&apos;s Next.
        </EditorialHeading>
        <p className="text-xl text-cream/80 font-serif italic leading-relaxed">
          For consulting, speaking, workshops, team performance, or collaboration inquiries.
        </p>
      </motion.div>
    </Section>
  )
}
