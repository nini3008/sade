'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
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

  // Mobile parallax: the portrait drifts down slowly as the page scrolls up over it.
  // Tracking the window scroll in pixels is more reliable than a target-based progress.
  const { scrollY } = useScroll()
  const mobileImageY = useTransform(scrollY, [0, 700], [0, 220])
  const mobileImageOpacity = useTransform(scrollY, [0, 450, 700], [1, 1, 0.4])

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
        - Mobile/tablet: portrait pinned to the top as a parallax layer; the content sits
          below the fold and scrolls up over the image. A gradient scrim blends the two.
        - Desktop (lg): text left in the container, portrait absolute bottom-right (static).
      */}

      {/* ─── MOBILE portrait: top-anchored parallax cutout ─── */}
      <motion.div
        style={{ y: mobileImageY, opacity: mobileImageOpacity }}
        className="lg:hidden absolute z-[3] top-0 inset-x-0 h-[64vh]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="relative h-full w-full"
        >
          <Image
            src={imageSrc || defaultProps.imageSrc || ''}
            alt="Dr. Sade Iriah"
            fill
            className="object-contain object-top"
            priority
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* ─── DESKTOP portrait: static, anchored bottom-right ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.25 }}
        className="hidden lg:block absolute z-[3] bottom-0 right-[5%] h-[94vh] w-[45%]"
      >
        <Image
          src={imageSrc || defaultProps.imageSrc || ''}
          alt="Dr. Sade Iriah"
          fill
          className="object-contain object-bottom"
          priority
          sizes="48vw"
        />
      </motion.div>

      {/* Mobile-only scrim: dark base under the content that blends up into the portrait */}
      <div
        className="lg:hidden absolute inset-x-0 bottom-0 h-[60vh] z-[4] pointer-events-none bg-gradient-to-t from-espresso via-espresso/95 to-transparent"
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10">
        <Container size="wide">
          <div className="flex items-end lg:items-center min-h-screen pt-[52vh] pb-16 lg:pt-0 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full max-w-xl lg:pr-12"
            >
              <p className="text-gold text-[0.7rem] sm:text-xs tracking-[0.28em] uppercase mb-6 lg:mb-8">
                {eyebrow}
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl xl:text-[5.25rem] text-cream leading-[1.08] lg:leading-[1.05] mb-6 lg:mb-8">
                {renderTitle()}
              </h1>

              <p className="text-cream/75 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-md">
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
      </div>
    </section>
  )
}
