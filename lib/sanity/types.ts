import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface SiteSettings {
  siteTitle?: string
  logo?: SanityImageSource
  primaryEmail?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
  seo?: {
    title?: string
    description?: string
    ogImage?: SanityImageSource
  }
}

export interface HomePage {
  heroEyebrow?: string
  heroTitle?: string
  heroSubtitle?: string
  heroBody?: string
  heroImage?: SanityImageSource
  heroPrimaryCta?: { label?: string; link?: string }
  heroSecondaryCta?: { label?: string; link?: string }
  whoIWorkWithTitle?: string
  whoIWorkWithCards?: Array<{
    title?: string
    description?: string
    iconName?: string
  }>
  aboutPreviewTitle?: string
  aboutPreviewBody?: string
  aboutPreviewCta?: string
  libraryPreviewTitle?: string
  libraryPreviewBody?: string
  libraryPreviewCta?: string
  servicesTitle?: string
  servicesSubtitle?: string
  servicesCta?: string
  finalCtaTitle?: string
  finalCtaBody?: string
  finalCtaButton?: string
}

export interface AboutPage {
  pageTitle?: string
  pageSubtitle?: string
  heroImage?: SanityImageSource
  introText?: string
  bioSections?: Array<{
    title?: string
    content?: string
  }>
  credentials?: Array<{
    title?: string
    institution?: string
    year?: string
  }>
  philosophyTitle?: string
  philosophyStatement?: string
  ctaTitle?: string
  ctaBody?: string
  ctaButton?: string
}

export interface ContactPage {
  pageTitle?: string
  pageSubtitle?: string
  introCopy?: string
  formRecipientEmail?: string
  inquiryTypes?: string[]
  contactDetails?: {
    email?: string
    phone?: string
    location?: string
  }
  socialLinks?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
}

export interface Service {
  _id: string
  title?: string
  audienceType?: string
  description?: string
  iconName?: string
  ctaLabel?: string
  ctaLink?: string
  order?: number
}

export interface LibraryItem {
  _id: string
  title?: string
  author?: string
  coverImage?: SanityImageSource
  description?: string
  category?: 'book' | 'framework' | 'resource'
  featured?: boolean
  externalLink?: string
  order?: number
}

export interface Publication {
  _id: string
  title?: string
  journal?: string
  year?: number
  authors?: string
  abstract?: string
  externalLink?: string
  category?: string
  featured?: boolean
}

export interface Article {
  _id: string
  title?: string
  slug?: { current?: string }
  excerpt?: string
  coverImage?: SanityImageSource
  body?: unknown[]
  category?: string
  publishedAt?: string
  featured?: boolean
  seo?: {
    title?: string
    description?: string
  }
}

export interface Event {
  _id: string
  title?: string
  date?: string
  location?: string
  description?: string
  eventType?: string
  link?: string
  featured?: boolean
}
