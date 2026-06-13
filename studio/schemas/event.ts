import { defineField, defineType } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Speaking & Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Keynote', value: 'keynote' },
          { title: 'Workshop', value: 'workshop' },
          { title: 'Panel', value: 'panel' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'link',
      title: 'Event Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isPast',
      title: 'Is Past Event',
      type: 'boolean',
      description: 'Check if this event has already occurred',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Date (Upcoming)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
    {
      title: 'Date (Past)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      location: 'location',
    },
    prepare({ title, date, location }) {
      return {
        title,
        subtitle: `${date || 'TBD'} • ${location || 'Location TBD'}`,
      }
    },
  },
})
