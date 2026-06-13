import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test('should load the contact page', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText("Let's Build")
  })

  test('should display the contact form', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByLabel('Name')).toBeVisible()
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Inquiry Type')).toBeVisible()
    await expect(page.getByLabel('Message')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible()
  })

  test('should show validation errors for empty required fields', async ({ page }) => {
    await page.goto('/contact')
    await page.getByRole('button', { name: 'Send Message' }).click()
    await expect(page.getByText('Name must be at least 2 characters')).toBeVisible()
    await expect(page.getByText('Please enter a valid email address')).toBeVisible()
    await expect(page.getByText('Message must be at least 10 characters')).toBeVisible()
  })

  test('should show validation error for invalid email', async ({ page }) => {
    await page.goto('/contact')
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email').fill('not-an-email')
    await page.getByLabel('Message').fill('This is a test message that should be long enough.')

    await page.getByRole('button', { name: 'Send Message' }).click()

    await expect(page.getByText('Please enter a valid email address')).toBeVisible({ timeout: 10000 })
  })

  test('should fill out form successfully', async ({ page }) => {
    await page.goto('/contact')
    await page.getByLabel('Name').fill('Test User')
    await page.getByLabel('Email').fill('test@example.com')
    await page.getByLabel('Organization').fill('Test Organization')
    await page.getByLabel('Inquiry Type').selectOption('athlete-consulting')
    await page.getByLabel('Message').fill('This is a test message about athlete consulting services.')

    await expect(page.getByRole('button', { name: 'Send Message' })).toBeEnabled()
  })
})
