'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'

export function LibraryHero() {
  return (
    <Section variant="espresso" grain containerSize="wide" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <SectionLabel>The Performance Library</SectionLabel>
        <EditorialHeading as="h1" size="xl" className="text-cream mb-6">
          The Performance Library
        </EditorialHeading>
        <p className="text-xl text-cream/80 font-serif italic leading-relaxed">
          Books, publications, frameworks, and insights for training the mind behind performance.
        </p>
      </motion.div>
    </Section>
  )
}
