'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ContourBackground } from '@/components/ui/ContourBackground'

interface AboutPreviewProps {
  title?: string
  body?: string
  ctaLabel?: string
}

export function AboutPreview({ title, body, ctaLabel }: AboutPreviewProps) {
  const defaultBody = `With a PhD in Behavioral Neuroscience and a background as a Division I athlete, my work lives at the intersection of brain science, performance, and human potential.

From studying addiction and brain connectivity to consulting on athlete wellness, I help you understand the mind so you can unlock what's next.`

  const paragraphs = (body || defaultBody).split('\n\n')

  return (
    <Section variant="cream" containerSize="wide" className="py-24 md:py-32 relative overflow-hidden">
      <ContourBackground variant="left" opacity={0.06} />
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold-deep text-xs tracking-[0.25em] uppercase mb-6">
            ABOUT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2] mb-8">
            {title || 'Where Science Meets Performance'}
          </h2>
          <div className="space-y-6 text-espresso/70 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/about" variant="text" className="text-gold-deep hover:text-gold">
              {ctaLabel || 'LEARN MORE'} <span className="ml-2">→</span>
            </Button>
          </div>
        </motion.div>

        {/* Right side - Credential boxes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4"
        >
          <CredentialBox
            title="PHD"
            subtitle="BEHAVIORAL NEUROSCIENCE"
          />
          <CredentialBox
            title="DIVISION I"
            subtitle="ATHLETE"
          />
          <CredentialBox
            title="PERFORMANCE"
            subtitle="CONSULTANT"
          />
        </motion.div>
      </div>
    </Section>
  )
}

function CredentialBox({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-espresso border border-gold/30 p-4 md:p-6 text-center flex flex-col justify-center min-h-[140px] md:min-h-[160px]">
      <span className="block text-base md:text-lg font-serif text-cream mb-2 leading-tight break-words">
        {title}
      </span>
      <span className="block text-[10px] md:text-[11px] text-gold tracking-[0.12em] uppercase leading-snug">
        {subtitle}
      </span>
    </div>
  )
}
