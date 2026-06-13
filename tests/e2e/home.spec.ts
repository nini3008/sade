import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Dr\. Sade Iriah/)
  })

  test('should display the hero section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Performance')
    await expect(page.getByText('Neuroscientist. Former Division I Athlete.')).toBeVisible()
  })

  test('should have working navigation links', async ({ page, isMobile }) => {
    test.skip(isMobile === true, 'Desktop navigation is hidden on mobile')
    await page.goto('/')
    const header = page.locator('header')
    await expect(header.getByRole('link', { name: 'ABOUT' })).toBeVisible()
    await expect(header.getByRole('link', { name: 'THE PERFORMANCE LIBRARY' })).toBeVisible()
    await expect(header.getByRole('link', { name: 'CONTACT' })).toBeVisible()
  })

  test('should display the Who I Work With section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('WHO I WORK WITH')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Elite Athletes' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Teams & Organizations' })).toBeVisible()
  })

  test('should have CTA buttons', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: 'Work With Me' }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: 'The Performance Library' }).first()).toBeVisible()
  })
})
