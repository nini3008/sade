import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'whoIWorkWith', title: 'Who I Work With' },
    { name: 'about', title: 'About Preview' },
    { name: 'library', title: 'Library Preview' },
    { name: 'services', title: 'Work With Me' },
    { name: 'cta', title: 'Final CTA' },
  ],
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      group: 'hero',
      initialValue: 'Neuroscientist. Former Division I Athlete.',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      initialValue: 'Training the Mind Behind Elite Performance.',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
      initialValue: 'Translating brain science into performance, resilience, and recovery.',
    }),
    defineField({
      name: 'heroBody',
      title: 'Hero Body Copy',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'hero',
    }),
    defineField({
      name: 'heroPrimaryCta',
      title: 'Primary CTA',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Work With Me' },
        { name: 'link', title: 'Link', type: 'string', initialValue: '/contact' },
      ],
    }),
    defineField({
      name: 'heroSecondaryCta',
      title: 'Secondary CTA',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'label', title: 'Label', type: 'string', initialValue: 'Explore the Performance Library' },
        { name: 'link', title: 'Link', type: 'string', initialValue: '/performance-library' },
      ],
    }),
    defineField({
      name: 'whoIWorkWithTitle',
      title: 'Section Title',
      type: 'string',
      group: 'whoIWorkWith',
      initialValue: 'Performance Demands More. I Work With Those Who Lead.',
    }),
    defineField({
      name: 'whoIWorkWithCards',
      title: 'Cards',
      type: 'array',
      group: 'whoIWorkWith',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'iconName', title: 'Icon Name', type: 'string', description: 'trophy, team, or brain' },
          ],
        },
      ],
    }),
    defineField({
      name: 'aboutPreviewTitle',
      title: 'Title',
      type: 'string',
      group: 'about',
      initialValue: 'Where Science Meets Performance',
    }),
    defineField({
      name: 'aboutPreviewBody',
      title: 'Body',
      type: 'text',
      rows: 4,
      group: 'about',
    }),
    defineField({
      name: 'aboutPreviewCta',
      title: 'CTA Label',
      type: 'string',
      group: 'about',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'libraryPreviewTitle',
      title: 'Title',
      type: 'string',
      group: 'library',
      initialValue: 'Knowledge That Builds Better Performance.',
    }),
    defineField({
      name: 'libraryPreviewBody',
      title: 'Body',
      type: 'text',
      rows: 3,
      group: 'library',
    }),
    defineField({
      name: 'libraryPreviewCta',
      title: 'CTA Label',
      type: 'string',
      group: 'library',
      initialValue: 'Explore the Library',
    }),
    defineField({
      name: 'servicesTitle',
      title: 'Title',
      type: 'string',
      group: 'services',
      initialValue: 'Consulting & Speaking',
    }),
    defineField({
      name: 'servicesSubtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'services',
      initialValue: 'Evidence-based strategies. Elite-level impact.',
    }),
    defineField({
      name: 'servicesCta',
      title: 'CTA Label',
      type: 'string',
      group: 'services',
      initialValue: 'Get in Touch',
    }),
    defineField({
      name: 'finalCtaTitle',
      title: 'Title',
      type: 'string',
      group: 'cta',
      initialValue: 'Ready to Elevate Performance?',
    }),
    defineField({
      name: 'finalCtaBody',
      title: 'Body',
      type: 'string',
      group: 'cta',
      initialValue: "Let's build what's next.",
    }),
    defineField({
      name: 'finalCtaButton',
      title: 'Button Label',
      type: 'string',
      group: 'cta',
      initialValue: 'Get in Touch',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
