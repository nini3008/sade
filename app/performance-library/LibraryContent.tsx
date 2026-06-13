'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '@/components/ui/Section'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { EditorialHeading } from '@/components/ui/EditorialHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { client } from '@/lib/sanity/client'
import { libraryItemsQuery, publicationsQuery, articlesQuery } from '@/lib/sanity/queries'

interface Book {
  _id: string
  title: string
  author: string
  description: string
  externalLink?: string
}

interface Publication {
  _id: string
  title: string
  journal: string
  year: number
  authors?: string
  abstract?: string
  externalLink?: string
}

interface Article {
  _id: string
  title: string
  slug?: { current: string }
  category: string
  excerpt?: string
}

const fallbackBooks: Book[] = [
  {
    _id: '1',
    title: 'Focus',
    author: 'Daniel Goleman',
    description: 'Boosting attention is the real key to improving performance.',
  },
  {
    _id: '2',
    title: 'The Mindful Athlete',
    author: 'George Mumford',
    description: 'Mindfulness is transformative for high-pressure situations.',
  },
  {
    _id: '3',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Tiny habits plus consistency equals remarkable results.',
  },
  {
    _id: '4',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    description: 'Two systems of thinking drive human decision-making.',
  },
]

const fallbackPublications: Publication[] = [
  {
    _id: '1',
    title: 'Trait Anxiety and Attentional Control in Collegiate Athletes',
    journal: 'Psychology of Sport & Exercise',
    year: 2023,
    description: 'Examining alterations in brain networks associated with anxiety.',
  },
  {
    _id: '2',
    title: 'Reward Sensitivity and Injury Rehabilitation Outcomes',
    journal: 'Neurobiology Reports',
    year: 2022,
    description: 'Understanding long-term cognitive and emotional effects of injury.',
  },
]

const fallbackArticles: Article[] = [
  {
    _id: '1',
    title: 'The Neuroscience of Clutch: How Focus and Pressure Shape Performance',
    category: 'Performance',
  },
  {
    _id: '2',
    title: 'Injury Recovery and the Brain: Mental Tools for Rewiring and Resilience',
    category: 'Recovery',
  },
]

export function LibraryContent() {
  const [books, setBooks] = useState<Book[]>(fallbackBooks)
  const [publications, setPublications] = useState<Publication[]>(fallbackPublications)
  const [articles, setArticles] = useState<Article[]>(fallbackArticles)

  useEffect(() => {
    async function fetchData() {
      try {
        const [fetchedBooks, fetchedPubs, fetchedArticles] = await Promise.all([
          client.fetch(libraryItemsQuery),
          client.fetch(publicationsQuery),
          client.fetch(articlesQuery),
        ])
        if (fetchedBooks?.length) setBooks(fetchedBooks)
        if (fetchedPubs?.length) setPublications(fetchedPubs)
        if (fetchedArticles?.length) setArticles(fetchedArticles)
      } catch (error) {
        console.error('Error fetching library data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <Section variant="beige" containerSize="wide" className="py-16 md:py-24">
      <Tabs defaultValue="all">
        <TabsList className="mb-12 flex-wrap justify-center">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="publications">Publications</TabsTrigger>
          <TabsTrigger value="articles">Articles</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-16">
            <BooksSection books={books} />
            <PublicationsSection publications={publications} />
            <ArticlesSection articles={articles} />
          </div>
        </TabsContent>

        <TabsContent value="books">
          <BooksSection books={books} />
        </TabsContent>

        <TabsContent value="publications">
          <PublicationsSection publications={publications} />
        </TabsContent>

        <TabsContent value="articles">
          <ArticlesSection articles={articles} />
        </TabsContent>
      </Tabs>
    </Section>
  )
}

function BooksSection({ books }: { books: Book[] }) {
  return (
    <div>
      <SectionLabel className="mb-2">Books</SectionLabel>
      <EditorialHeading as="h2" size="sm" className="mb-8">
        Ideas That Shape Performance
      </EditorialHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <motion.div
            key={book._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card variant="library" className="h-full">
              <div className="aspect-[2/3] bg-gradient-to-br from-espresso to-espresso-deep mb-4 flex items-center justify-center p-4">
                <span className="text-cream font-serif text-center leading-tight">
                  {book.title}
                </span>
              </div>
              <h3 className="font-serif text-lg mb-1">{book.title}</h3>
              <p className="text-sm text-gold mb-2">{book.author}</p>
              <p className="text-sm text-ink-muted mb-3">{book.description}</p>
              {book.externalLink && (
                <a
                  href={book.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:text-gold-deep transition-colors"
                >
                  Learn More →
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function PublicationsSection({ publications }: { publications: Publication[] }) {
  return (
    <div>
      <SectionLabel className="mb-2">Publications</SectionLabel>
      <EditorialHeading as="h2" size="sm" className="mb-4">
        Research That Informs Practice
      </EditorialHeading>
      <p className="text-ink-muted mb-8">
        Peer-reviewed research at the intersection of neuroscience, psychology, and performance.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {publications.map((pub, index) => (
          <motion.div
            key={pub._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card variant="light" className="h-full">
              <h3 className="font-serif text-lg mb-2">{pub.title}</h3>
              <p className="text-sm text-gold mb-2">
                {pub.journal} • {pub.year}
              </p>
              {pub.authors && (
                <p className="text-xs text-ink-muted mb-2">{pub.authors}</p>
              )}
              <p className="text-sm text-ink-muted">{pub.abstract || ''}</p>
              {pub.externalLink && (
                <a
                  href={pub.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gold hover:text-gold-deep transition-colors mt-3 inline-block"
                >
                  View on PubMed →
                </a>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
      <Button
        href="https://pubmed.ncbi.nlm.nih.gov/?term=iriah+.s+"
        external
        variant="secondary"
      >
        View All Publications on PubMed
      </Button>
    </div>
  )
}

function ArticlesSection({ articles }: { articles: Article[] }) {
  return (
    <div>
      <SectionLabel className="mb-2">Articles & Insights</SectionLabel>
      <EditorialHeading as="h2" size="sm" className="mb-4">
        From Research to Real-World Performance
      </EditorialHeading>
      <p className="text-ink-muted mb-8">
        Insights and articles translating neuroscience into performance strategies for athletes,
        coaches, and leaders.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <motion.div
            key={article._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card variant="outlined" className="h-full group cursor-pointer">
              <span className="text-xs text-gold uppercase tracking-wider mb-2 block">
                {article.category}
              </span>
              <h3 className="font-serif text-lg group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              {article.excerpt && (
                <p className="text-sm text-ink-muted mt-2">{article.excerpt}</p>
              )}
              <span className="text-gold text-sm mt-4 block">Read →</span>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
