'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ContourBackground } from '@/components/ui/ContourBackground'

interface HeroProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  body?: string
  imageSrc?: string
  primaryCta?: { label?: string; link?: string }
  secondaryCta?: { label?: string; link?: string }
}

const defaultProps: HeroProps = {
  eyebrow: 'NEUROSCIENTIST. FORMER DIVISION I ATHLETE.',
  title: 'Training the Mind Behind Elite Performance.',
  subtitle: 'Grounded in science, built for competition, resilience, and mastery.',
  imageSrc: '/images/dr-sade-iriah-cutout-warm.png',
  primaryCta: { label: 'WORK WITH ME', link: '/contact' },
  secondaryCta: { label: 'THE PERFORMANCE LIBRARY', link: '/performance-library' },
}

export function Hero(props: HeroProps) {
  const {
    eyebrow = defaultProps.eyebrow,
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    imageSrc = defaultProps.imageSrc,
    primaryCta = defaultProps.primaryCta,
    secondaryCta = defaultProps.secondaryCta,
  } = props

  const renderTitle = () => {
    const text = title || defaultProps.title || ''
    const parts = text.split(/(Elite Performance\.?)/i)
    return parts.map((part, i) => {
      if (part.toLowerCase().includes('elite performance')) {
        return <em key={i} className="italic text-gold">{part}</em>
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <section className="relative min-h-screen bg-espresso overflow-hidden">
      {/* ─── Layered warm background ─── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Off-center amber glow behind the portrait */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(58% 56% at 66% 42%, rgba(198,167,110,0.30) 0%, rgba(168,137,79,0.13) 40%, rgba(168,137,79,0) 72%)',
          }}
        />
        {/* Edge vignette — darken corners so the scene reads lit, not flat */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 115% at 60% 38%, rgba(18,13,12,0) 34%, rgba(18,13,12,0.62) 100%)',
          }}
        />
      </div>

      {/* Faint organic texture: contour lines + grain */}
      <ContourBackground variant="right" opacity={0.1} className="z-[1]" />
      <div className="absolute inset-0 grain-overlay opacity-30 z-[2]" />

      {/*
        Layout:
        - Mobile/tablet: vertical stack — text block above, portrait below (no overlap).
        - Desktop (lg): text left in the container, portrait absolute bottom-right.
      */}
      <div className="relative z-10 flex flex-col lg:block">
        {/* ─── Content ─── */}
        <Container size="wide">
          <div className="flex items-center lg:min-h-screen">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-xl pt-32 pb-10 lg:py-0 lg:pr-12"
            >
              <p className="text-gold text-xs tracking-[0.28em] uppercase mb-8">
                {eyebrow}
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-cream leading-[1.05] mb-8">
                {renderTitle()}
              </h1>

              <p className="text-cream/75 text-lg lg:text-xl leading-relaxed mb-10 lg:mb-12 max-w-md">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={primaryCta?.link || '/contact'}
                  variant="primary"
                  size="lg"
                  className="shadow-none hover:shadow-none"
                >
                  {primaryCta?.label || 'WORK WITH ME'}
                </Button>
                <Button
                  href={secondaryCta?.link || '/performance-library'}
                  variant="outline"
                  size="lg"
                >
                  {secondaryCta?.label || 'THE PERFORMANCE LIBRARY'}
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* ─── Portrait: transparent cutout anchored to the bottom edge ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
          className="relative z-[5] h-[52vh] w-full lg:absolute lg:bottom-0 lg:right-[5%] lg:top-auto lg:h-[94vh] lg:w-[45%]"
        >
          <Image
            src={imageSrc || defaultProps.imageSrc || ''}
            alt="Dr. Sade Iriah"
            fill
            className="object-contain object-bottom"
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </motion.div>
      </div>
    </section>
  )
}
