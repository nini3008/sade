'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'

interface WhoIWorkWithCard {
  title?: string
  description?: string
  iconName?: string
}

interface WhoIWorkWithProps {
  title?: string
  cards?: WhoIWorkWithCard[]
}

const defaultCards: WhoIWorkWithCard[] = [
  {
    title: 'ELITE ATHLETES',
    description: 'Build resilience, sharpen focus, and perform under pressure.',
    iconName: 'trophy',
  },
  {
    title: 'TEAMS & ORGANIZATIONS',
    description: 'Develop high-performing cultures grounded in brain science.',
    iconName: 'team',
  },
  {
    title: 'HIGH PERFORMERS',
    description: 'Optimize decision-making, manage stress, and unlock potential.',
    iconName: 'brain',
  },
]

export function WhoIWorkWith({ title, cards = defaultCards }: WhoIWorkWithProps) {
  return (
    <Section variant="beige" containerSize="wide" className="py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6">
            WHO I WORK WITH
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.2]">
            {title ? (
              title
            ) : (
              <>
                Performance Demands More.
                <br />
                <em className="italic text-espresso/80">I Work With Those Who Lead.</em>
              </>
            )}
          </h2>
        </motion.div>

        {/* Right side - Cards */}
        <div className="grid gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title || index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <IconByName name={card.iconName || 'brain'} />
              </div>
              <div>
                <h3 className="text-sm font-sans font-medium tracking-[0.15em] text-espresso/90 mb-2">
                  {card.title}
                </h3>
                <p className="text-espresso/70 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

function IconByName({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    trophy: <TrophyIcon />,
    team: <TeamIcon />,
    brain: <BrainIcon />,
    leader: <LeaderIcon />,
  }
  return <>{icons[name] || icons.brain}</>
}

function TrophyIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <path
        d="M12 8h24v4c0 8-4 14-12 16-8-2-12-8-12-16V8z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 12H8c0 4 2 8 6 10M36 12h4c0 4-2 8-6 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M24 28v6M18 40h12M20 34h8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="24" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function TeamIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="10" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="38" cy="18" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M14 36c0-6 4-10 10-10s10 4 10 10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M4 38c0-4 2-7 6-8M44 38c0-4-2-7-6-8"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <path
        d="M24 40V24M24 24c-4 0-8-2-10-6-2-4-1-8 2-11s7-4 11-2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M24 24c4 0 8-2 10-6 2-4 1-8-2-11s-7-4-11-2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M14 18c-2 0-4 1-5 3s0 4 2 5M34 18c2 0 4 1 5 3s0 4-2 5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="18" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="30" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function LeaderIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-gold">
      <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path
        d="M12 40c0-8 5-14 12-14s12 6 12 14"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M24 6l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
