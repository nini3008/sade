import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sadeiriah.com'),
  title: {
    default: 'Dr. Sade Iriah | Neuroscience-Based Performance Consulting',
    template: '%s | Dr. Sade Iriah',
  },
  description:
    'Neuroscience-driven performance consulting for athletes, teams, and high performers focused on resilience, recovery, focus, and elite performance.',
  keywords: [
    'neuroscience',
    'performance consulting',
    'athlete performance',
    'behavioral neuroscience',
    'resilience',
    'recovery',
    'elite performance',
    'sports psychology',
    'Dr. Sade Iriah',
  ],
  authors: [{ name: 'Dr. Sade Iriah' }],
  creator: 'Dr. Sade Iriah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sadeiriah.com',
    siteName: 'Dr. Sade Iriah',
    title: 'Dr. Sade Iriah | Neuroscience-Based Performance Consulting',
    description:
      'Neuroscience-driven performance consulting for athletes, teams, and high performers.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Sade Iriah - Neuroscience & Performance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Sade Iriah | Neuroscience-Based Performance Consulting',
    description:
      'Neuroscience-driven performance consulting for athletes, teams, and high performers.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
