import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to About page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'About' }).first().click()
    await expect(page).toHaveURL('/about')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Science Meets Performance')
  })

  test('should navigate to Performance Library page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'The Performance Library' }).first().click()
    await expect(page).toHaveURL('/performance-library')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Performance Library')
  })

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Contact' }).first().click()
    await expect(page).toHaveURL('/contact')
    await expect(page.getByRole('heading', { level: 1 })).toContainText("Let's Build")
  })

  test('should navigate home from logo', async ({ page }) => {
    await page.goto('/about')
    await page.getByRole('link', { name: /Sade Iriah/ }).first().click()
    await expect(page).toHaveURL('/')
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 667 } })

  test('should open mobile menu', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
  })

  test('should close mobile menu', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.getByRole('button', { name: 'Close navigation' }).click()
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })

  test('should navigate via mobile menu', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Open navigation menu' }).click()
    await page.getByRole('dialog').getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL('/about')
  })
})
