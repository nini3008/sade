import groq from 'groq'

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    logo,
    primaryEmail,
    socialLinks,
    seo
  }
`

export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroEyebrow,
    heroTitle,
    heroSubtitle,
    heroBody,
    heroImage,
    heroPrimaryCta,
    heroSecondaryCta,
    whoIWorkWithTitle,
    whoIWorkWithCards,
    aboutPreviewTitle,
    aboutPreviewBody,
    aboutPreviewCta,
    libraryPreviewTitle,
    libraryPreviewBody,
    libraryPreviewCta,
    servicesTitle,
    servicesSubtitle,
    servicesCta,
    finalCtaTitle,
    finalCtaBody,
    finalCtaButton
  }
`

export const aboutPageQuery = groq`
  *[_type == "aboutPage"][0] {
    pageTitle,
    pageSubtitle,
    heroImage,
    introText,
    bioSections,
    credentials,
    philosophyTitle,
    philosophyStatement,
    ctaTitle,
    ctaBody,
    ctaButton
  }
`

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    pageTitle,
    pageSubtitle,
    introCopy,
    formRecipientEmail,
    inquiryTypes,
    contactDetails,
    socialLinks
  }
`

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    audienceType,
    description,
    iconName,
    ctaLabel,
    ctaLink,
    order
  }
`

export const libraryItemsQuery = groq`
  *[_type == "libraryItem"] | order(order asc) {
    _id,
    title,
    author,
    coverImage,
    description,
    category,
    featured,
    externalLink,
    order
  }
`

export const featuredLibraryItemsQuery = groq`
  *[_type == "libraryItem" && featured == true] | order(order asc) [0...4] {
    _id,
    title,
    author,
    coverImage,
    description,
    category,
    externalLink
  }
`

export const publicationsQuery = groq`
  *[_type == "publication"] | order(year desc, order asc) {
    _id,
    title,
    journal,
    year,
    authors,
    abstract,
    externalLink,
    category,
    featured
  }
`

export const featuredPublicationsQuery = groq`
  *[_type == "publication" && featured == true] | order(year desc) [0...3] {
    _id,
    title,
    journal,
    year,
    authors,
    abstract,
    externalLink,
    category
  }
`

export const articlesQuery = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    category,
    publishedAt,
    featured
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    category,
    publishedAt,
    seo
  }
`

export const eventsQuery = groq`
  *[_type == "event" && !isPast] | order(date asc) {
    _id,
    title,
    date,
    location,
    description,
    eventType,
    link,
    featured
  }
`
