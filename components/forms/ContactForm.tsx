'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import {
  contactFormSchema,
  type ContactFormData,
  inquiryTypeLabels,
} from '@/lib/validations/contact'

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      inquiryType: 'general',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('submitting')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Form submitted:', data)
      setSubmitStatus('success')
      reset()
    } catch {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-cream border border-gold-subtle p-8 text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 text-gold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="font-serif text-2xl mb-4">Message Sent</h3>
        <p className="text-ink-muted mb-6">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <Button onClick={() => setSubmitStatus('idle')} variant="secondary">
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <FormField
          id="name"
          label="Name"
          error={errors.name?.message}
          required
        >
          <input
            id="name"
            type="text"
            {...register('name')}
            className={cn(
              'w-full px-4 py-3 bg-cream border border-gold-subtle',
              'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
              'transition-colors duration-200',
              errors.name && 'border-red-400'
            )}
            placeholder="Your name"
          />
        </FormField>

        <FormField
          id="email"
          label="Email"
          error={errors.email?.message}
          required
        >
          <input
            id="email"
            type="email"
            {...register('email')}
            className={cn(
              'w-full px-4 py-3 bg-cream border border-gold-subtle',
              'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
              'transition-colors duration-200',
              errors.email && 'border-red-400'
            )}
            placeholder="your@email.com"
          />
        </FormField>
      </div>

      <FormField id="organization" label="Organization" error={errors.organization?.message}>
        <input
          id="organization"
          type="text"
          {...register('organization')}
          className={cn(
            'w-full px-4 py-3 bg-cream border border-gold-subtle',
            'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
            'transition-colors duration-200'
          )}
          placeholder="Your organization (optional)"
        />
      </FormField>

      <FormField
        id="inquiryType"
        label="Inquiry Type"
        error={errors.inquiryType?.message}
        required
      >
        <select
          id="inquiryType"
          {...register('inquiryType')}
          className={cn(
            'w-full px-4 py-3 bg-cream border border-gold-subtle',
            'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
            'transition-colors duration-200',
            'appearance-none cursor-pointer'
          )}
        >
          {Object.entries(inquiryTypeLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </FormField>

      <FormField
        id="message"
        label="Message"
        error={errors.message?.message}
        required
      >
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className={cn(
            'w-full px-4 py-3 bg-cream border border-gold-subtle',
            'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold',
            'transition-colors duration-200 resize-none',
            errors.message && 'border-red-400'
          )}
          placeholder="Tell me about your goals and how I can help..."
        />
      </FormField>

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={submitStatus === 'submitting'}
        className="w-full sm:w-auto"
      >
        {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

function FormField({
  label,
  error,
  required,
  children,
  id,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
  id: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-espresso mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
