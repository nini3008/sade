'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'

interface AboutHeroProps {
  title?: string
  subtitle?: string
  imageUrl?: string | null
}

export function AboutHero({ title, subtitle, imageUrl }: AboutHeroProps) {
  return (
    <Section variant="espresso" grain containerSize="wide" className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>About</SectionLabel>
          <EditorialHeading as="h1" size="xl" className="text-cream mb-6">
            {title || 'Where Science Meets Performance'}
          </EditorialHeading>
          <p className="text-xl text-cream/80 font-serif italic leading-relaxed">
            {subtitle || 'A neuroscience-based approach to performance, resilience, and recovery.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative max-w-md mx-auto lg:max-w-none"
        >
          {imageUrl ? (
            <div className="relative aspect-[4/5]">
              <Image
                src={imageUrl}
                alt="Dr. Sade Iriah"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : (
            <div className="aspect-[4/5] bg-white/20 animate-pulse rounded" />
          )}
        </motion.div>
      </div>
    </Section>
  )
}
