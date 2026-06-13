'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'
import { Card } from '@/components/ui/Card'

const credentials = [
  {
    title: 'PhD, Behavioral Neuroscience',
    institution: 'Research focus on addiction, brain connectivity, and neural mechanisms',
    year: '',
  },
  {
    title: 'Division I Athlete',
    institution: 'Competed at the highest collegiate level',
    year: '',
  },
  {
    title: 'Performance Consultant',
    institution: 'Working with elite athletes, teams, and organizations',
    year: '',
  },
  {
    title: 'Researcher & Published Author',
    institution: 'Peer-reviewed publications in neuroscience and performance',
    year: '',
  },
]

export function AboutCredentials() {
  return (
    <Section variant="cream" containerSize="wide" className="py-24 md:py-32">
      <div className="text-center mb-16">
        <SectionLabel>Credentials</SectionLabel>
        <EditorialHeading as="h2" size="lg">
          Background & Expertise
        </EditorialHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {credentials.map((credential, index) => (
          <motion.div
            key={credential.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="light" className="h-full">
              <h3 className="font-serif text-xl mb-2">{credential.title}</h3>
              <p className="text-ink-muted">{credential.institution}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
