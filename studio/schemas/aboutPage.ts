import { defineField, defineType } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Where Science Meets Performance',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: 'A neuroscience-based approach to performance, resilience, and recovery.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introText',
      title: 'Introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'bioSections',
      title: 'Biography Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            { name: 'content', title: 'Content', type: 'text', rows: 6 },
          ],
        },
      ],
    }),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Credential', type: 'string' },
            { name: 'institution', title: 'Institution', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'philosophyTitle',
      title: 'Philosophy Section Title',
      type: 'string',
      initialValue: 'My Approach',
    }),
    defineField({
      name: 'philosophyStatement',
      title: 'Philosophy Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      initialValue: 'Ready to Work Together?',
    }),
    defineField({
      name: 'ctaBody',
      title: 'CTA Body',
      type: 'string',
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button Label',
      type: 'string',
      initialValue: 'Get in Touch',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})
