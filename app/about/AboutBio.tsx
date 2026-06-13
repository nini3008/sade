'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { EditorialHeading } from '@/components/ui/EditorialHeading'

const bioSections = [
  {
    title: 'The Intersection of Science and Sport',
    content: `Dr. Sade Iriah brings together behavioral neuroscience, elite athletic experience, and performance consulting to help athletes, teams, and high performers understand the systems that shape focus, pressure, resilience, and recovery.

With a PhD in Behavioral Neuroscience, her research has explored the neural mechanisms underlying addiction, brain connectivity, and how the mind responds to stress and challenge.`,
  },
  {
    title: 'From Athlete to Neuroscientist',
    content: `As a former Division I athlete, Dr. Iriah understands the demands of elite competition from the inside—the pressure to perform, the mental toll of injury, and the discipline required for sustained excellence.

This dual perspective—scientist and competitor—shapes her approach to performance consulting, ensuring strategies are grounded in both rigorous research and real-world athletic experience.`,
  },
  {
    title: 'Translating Research into Practice',
    content: `From studying addiction and brain connectivity to consulting on athlete wellness, her focus is simple: understand the mind so performance can be trained with precision.

She works with elite athletes, professional teams, and high performers to develop evidence-based strategies that enhance focus, build resilience, and optimize recovery.`,
  },
]

export function AboutBio() {
  return (
    <Section variant="beige" containerSize="wide" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto">
        {bioSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <EditorialHeading as="h2" size="sm" className="mb-6">
              {section.title}
            </EditorialHeading>
            <div className="space-y-4 text-lg text-ink-muted leading-relaxed">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
