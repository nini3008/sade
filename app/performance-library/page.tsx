import type { Metadata } from 'next'
import { LibraryHero } from './LibraryHero'
import { LibraryContent } from './LibraryContent'
import { LibraryCTA } from './LibraryCTA'

export const metadata: Metadata = {
  title: 'The Performance Library',
  description:
    'A curated collection of books, publications, frameworks, and insights for training the mind behind performance.',
}

export default function PerformanceLibraryPage() {
  return (
    <>
      <LibraryHero />
      <LibraryContent />
      <LibraryCTA />
    </>
  )
}
