import type { Metadata } from 'next'
import { AboutHero } from './AboutHero'
import { AboutBio } from './AboutBio'
import { AboutCredentials } from './AboutCredentials'
import { AboutPhilosophy } from './AboutPhilosophy'
import { AboutCTA } from './AboutCTA'
import { client, urlFor } from '@/lib/sanity/client'
import { aboutPageQuery } from '@/lib/sanity/queries'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'About',
  description:
    'Dr. Sade Iriah brings together behavioral neuroscience, elite athletic experience, and performance consulting to help athletes, teams, and high performers.',
}

async function getAboutPageData() {
  const data = await client.fetch(aboutPageQuery)
  return data
}

export default async function AboutPage() {
  const aboutData = await getAboutPageData()
  const heroImageUrl = aboutData?.heroImage
    ? urlFor(aboutData.heroImage).width(800).height(1000).url()
    : null

  return (
    <>
      <AboutHero
        title={aboutData?.pageTitle}
        subtitle={aboutData?.pageSubtitle}
        imageUrl={heroImageUrl}
      />
      <AboutBio />
      <AboutCredentials />
      <AboutPhilosophy />
      <AboutCTA />
    </>
  )
}
