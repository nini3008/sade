import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service / Work With Me',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'audienceType',
      title: 'Audience Type',
      type: 'string',
      options: {
        list: [
          { title: 'Athletes', value: 'athletes' },
          { title: 'Teams & Organizations', value: 'teams' },
          { title: 'High Performers', value: 'high-performers' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier: athlete, brain, team, speaker',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      initialValue: 'Learn More',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      audienceType: 'audienceType',
    },
    prepare({ title, audienceType }) {
      return {
        title,
        subtitle: audienceType?.toUpperCase() || 'SERVICE',
      }
    },
  },
})
