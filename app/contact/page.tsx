import type { Metadata } from 'next'
import { ContactHero } from './ContactHero'
import { ContactContent } from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dr. Sade Iriah for consulting, speaking, workshops, team performance, or collaboration inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  )
}
