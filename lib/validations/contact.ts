import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().optional(),
  inquiryType: z.enum([
    'athlete-consulting',
    'team-workshop',
    'speaking',
    'media-podcast',
    'research',
    'general',
  ]),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const inquiryTypeLabels: Record<ContactFormData['inquiryType'], string> = {
  'athlete-consulting': 'Athlete Consulting',
  'team-workshop': 'Team / Organization Workshop',
  speaking: 'Speaking Engagement',
  'media-podcast': 'Media / Podcast',
  research: 'Research Collaboration',
  general: 'General Inquiry',
}
