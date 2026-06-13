import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: "Let's Build What's Next",
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'string',
      initialValue: 'For consulting, speaking, workshops, team performance, or collaboration inquiries.',
    }),
    defineField({
      name: 'introCopy',
      title: 'Introduction Copy',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'formRecipientEmail',
      title: 'Form Recipient Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'inquiryTypes',
      title: 'Inquiry Types',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        'Athlete Consulting',
        'Team / Organization Workshop',
        'Speaking Engagement',
        'Media / Podcast',
        'Research Collaboration',
        'General Inquiry',
      ],
    }),
    defineField({
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'location', title: 'Location', type: 'string' },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Page',
      }
    },
  },
})
