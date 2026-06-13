import {
  Hero,
  WhoIWorkWith,
  AboutPreview,
  PerformanceLibraryPreview,
  WorkWithMe,
  FinalCTA,
} from '@/components/sections'
import { client } from '@/lib/sanity/client'
import { homePageQuery, servicesQuery, featuredLibraryItemsQuery } from '@/lib/sanity/queries'

export const revalidate = 0

async function getHomePageData() {
  const [homePage, services, libraryItems] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(servicesQuery),
    client.fetch(featuredLibraryItemsQuery),
  ])
  return { homePage, services, libraryItems }
}

export default async function HomePage() {
  const { homePage, services, libraryItems } = await getHomePageData()

  return (
    <>
      <Hero
        eyebrow={homePage?.heroEyebrow}
        title={homePage?.heroTitle}
        subtitle={homePage?.heroSubtitle}
        body={homePage?.heroBody}
        primaryCta={homePage?.heroPrimaryCta}
        secondaryCta={homePage?.heroSecondaryCta}
      />
      <WhoIWorkWith
        title={homePage?.whoIWorkWithTitle}
        cards={homePage?.whoIWorkWithCards}
      />
      <AboutPreview
        title={homePage?.aboutPreviewTitle}
        body={homePage?.aboutPreviewBody}
        ctaLabel={homePage?.aboutPreviewCta}
      />
      <PerformanceLibraryPreview
        title={homePage?.libraryPreviewTitle}
        body={homePage?.libraryPreviewBody}
        ctaLabel={homePage?.libraryPreviewCta}
        items={libraryItems}
      />
      <WorkWithMe
        title={homePage?.servicesTitle}
        subtitle={homePage?.servicesSubtitle}
        ctaLabel={homePage?.servicesCta}
        services={services}
      />
      <FinalCTA
        title={homePage?.finalCtaTitle}
        body={homePage?.finalCtaBody}
        buttonLabel={homePage?.finalCtaButton}
      />
    </>
  )
}
