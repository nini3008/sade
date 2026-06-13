'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { ContourBackground } from '@/components/ui/ContourBackground'
import type { LibraryItem } from '@/lib/sanity/types'

interface PerformanceLibraryPreviewProps {
  title?: string
  body?: string
  ctaLabel?: string
  items?: LibraryItem[]
}

const defaultBooks: LibraryItem[] = [
  { _id: '1', title: 'Focus', author: 'Daniel Goleman' },
  { _id: '2', title: 'Atomic Habits', author: 'James Clear' },
  { _id: '3', title: 'Train Your Mind', author: 'Manteús Aandel Jr.' },
  { _id: '4', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman' },
]

export function PerformanceLibraryPreview({
  title,
  body,
  ctaLabel,
  items,
}: PerformanceLibraryPreviewProps) {
  const displayItems = items?.length ? items : defaultBooks

  return (
    <Section variant="deepEspresso" grain containerSize="wide" className="py-24 md:py-32 relative overflow-hidden">
      <ContourBackground variant="full" opacity={0.06} />
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6">
            THE PERFORMANCE LIBRARY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2] mb-6">
            {title || 'Knowledge That Builds Better Performance.'}
          </h2>
          <p className="text-cream/60 leading-relaxed mb-8">
            {body || 'A curated collection of books, insights, and frameworks shaping how we understand performance, mindfulness, and the brain.'}
          </p>
          <Button href="/performance-library" variant="text" className="text-gold hover:text-gold-deep">
            {ctaLabel || 'EXPLORE THE LIBRARY'} <span className="ml-2">→</span>
          </Button>
        </motion.div>

        {/* Right side - Book covers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-4 gap-3">
            {displayItems.slice(0, 4).map((item, index) => (
              <motion.div
                key={item._id || index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <BookCover
                  title={item.title || ''}
                  author={item.author}
                  isDark={index === 0 || index === 3}
                  externalLink={item.externalLink}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function BookCover({
  title,
  author,
  isDark = false,
  externalLink,
}: {
  title: string
  author?: string
  isDark?: boolean
  externalLink?: string
}) {
  const content = (
    <div className="group cursor-pointer">
      <div
        className={`
          aspect-[2/3] p-4 flex flex-col justify-between
          transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg
          ${isDark
            ? 'bg-espresso-deep text-cream border border-gold/20 group-hover:border-gold/50'
            : 'bg-cream text-espresso border border-espresso/10 group-hover:border-gold/50'
          }
        `}
      >
        <div>
          <p className={`text-[8px] tracking-[0.15em] uppercase mb-2 ${isDark ? 'text-gold/60' : 'text-gold'}`}>
            {author}
          </p>
        </div>
        <div>
          <h4 className={`font-serif text-sm leading-tight ${isDark ? 'text-cream' : 'text-espresso'}`}>
            {title}
          </h4>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-cream/80 text-xs font-serif truncate">{title}</p>
        {author && (
          <p className="text-cream/50 text-[10px] truncate">{author}</p>
        )}
      </div>
    </div>
  )

  if (externalLink) {
    return (
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}
