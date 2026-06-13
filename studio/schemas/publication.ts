import { defineField, defineType } from 'sanity'

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'journal',
      title: 'Journal/Publisher',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
      description: 'List of authors (e.g., "Iriah, S., Smith, J., & Jones, K.")',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract/Summary',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'externalLink',
      title: 'PubMed/External Link',
      type: 'url',
    }),
    defineField({
      name: 'category',
      title: 'Research Category',
      type: 'string',
      options: {
        list: [
          { title: 'Addiction & Neurobiology', value: 'addiction' },
          { title: 'Brain Connectivity & Imaging', value: 'imaging' },
          { title: 'Athlete Health & Performance', value: 'athlete' },
          { title: 'Mental Health & Resilience', value: 'mental-health' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Year (Newest)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      journal: 'journal',
      year: 'year',
    },
    prepare({ title, journal, year }) {
      return {
        title,
        subtitle: `${journal || 'Unknown Journal'} • ${year || 'N/A'}`,
      }
    },
  },
})
