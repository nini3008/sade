'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ContourBackground } from '@/components/ui/ContourBackground'
import type { Service } from '@/lib/sanity/types'

interface WorkWithMeProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  services?: Service[]
}

const defaultServices = [
  {
    _id: '1',
    title: 'Athlete Performance Consulting',
    description: 'Personalized strategies to elevate performance, recovery, and longevity.',
    iconName: 'athlete',
  },
  {
    _id: '2',
    title: 'Mental Resilience & Injury Psychology',
    description: 'Strengthen the mind to navigate setbacks and perform with confidence.',
    iconName: 'brain',
  },
  {
    _id: '3',
    title: 'Speaking & Workshops',
    description: 'Bring neuroscience to your team, event, or organization.',
    iconName: 'speaker',
  },
]

export function WorkWithMe({
  title,
  subtitle,
  ctaLabel,
  services = defaultServices,
}: WorkWithMeProps) {
  return (
    <Section variant="espresso" grain containerSize="wide" className="py-24 md:py-32 relative overflow-hidden">
      <ContourBackground variant="right" opacity={0.08} />
      <div className="relative z-10 mb-16">
        <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6">
          WORK WITH ME
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2]">
            {title || 'Consulting & Speaking'}
          </h2>
          <p className="text-cream/60 text-lg md:text-right max-w-md">
            {subtitle || 'Evidence-based strategies. Elite-level impact.'}
          </p>
        </div>
      </div>

      <div className="relative z-10 grid md:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="h-full p-8 border border-gold/30 bg-espresso-deep/30 hover:border-gold/60 transition-colors duration-300">
              <div className="w-12 h-12 mb-6">
                <ServiceIcon name={service.iconName || 'brain'} />
              </div>
              <h3 className="font-serif text-xl text-cream mb-4">
                {service.title}
              </h3>
              <p className="text-cream/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <Button href="/contact" variant="primary" size="lg">
          {ctaLabel || 'GET IN TOUCH'}
        </Button>
      </div>
    </Section>
  )
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    athlete: <AthleteIcon />,
    brain: <BrainIcon />,
    speaker: <SpeakerIcon />,
  }
  return <>{icons[name] || icons.brain}</>
}

function AthleteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <circle cx="24" cy="10" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M24 18v8M20 26l-8 14M28 26l8 14M18 22l-6 4M30 22l6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="30" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <path
        d="M24 40V28"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16 28c-4-2-6-6-5-10s5-7 9-7c2-3 6-4 9-2s5 5 5 9c3 1 5 4 4 7s-4 5-7 5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M20 20c0-2 2-4 4-4s4 2 4 4-2 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 16c-2 0-3 1-3 3M32 16c2 0 3 1 3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

function SpeakerIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <rect x="18" y="8" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M12 20v4c0 6.627 5.373 12 12 12s12-5.373 12-12v-4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M24 36v6M18 42h12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M32 14c2 1 3 3 3 5s-1 4-3 5M36 10c4 2 6 6 6 10s-2 8-6 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
