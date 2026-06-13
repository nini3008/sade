'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'

export function AboutPhilosophy() {
  return (
    <Section variant="espresso" grain containerSize="wide" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <SectionLabel>My Approach</SectionLabel>
        <EditorialHeading as="h2" size="lg" className="text-cream mb-8">
          Philosophy
        </EditorialHeading>
        <div className="space-y-6 text-lg text-cream/80 leading-relaxed">
          <p className="text-xl font-serif italic text-cream">
            &ldquo;This is not mindset. This is system-level performance.&rdquo;
          </p>
          <p>
            Performance isn&apos;t just about motivation or mental toughness—it&apos;s about understanding how the brain actually works under pressure. By combining rigorous neuroscience research with practical athletic experience, I help performers unlock sustainable excellence.
          </p>
          <p>
            My approach focuses on the underlying systems: how the brain responds to stress, how neural pathways shape decision-making, and how recovery and resilience can be trained with precision.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}
