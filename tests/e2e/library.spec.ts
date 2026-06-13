import { test, expect } from '@playwright/test'

test.describe('Performance Library Page', () => {
  test('should load the library page', async ({ page }) => {
    await page.goto('/performance-library')
    await expect(page).toHaveTitle(/Performance Library/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Performance Library')
  })

  test('should display library tabs', async ({ page }) => {
    await page.goto('/performance-library')
    await expect(page.getByRole('tab', { name: 'All' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Books' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Publications' })).toBeVisible()
    await expect(page.getByRole('tab', { name: 'Articles' })).toBeVisible()
  })

  test('should switch between tabs', async ({ page }) => {
    await page.goto('/performance-library')

    await page.getByRole('tab', { name: 'Books' }).click()
    await expect(page.getByText('Ideas That Shape Performance')).toBeVisible()

    await page.getByRole('tab', { name: 'Publications' }).click()
    await expect(page.getByText('Research That Informs Practice')).toBeVisible()
  })

  test('should display book cards', async ({ page }) => {
    await page.goto('/performance-library')
    await expect(page.getByRole('heading', { name: 'Focus', exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Atomic Habits' })).toBeVisible()
  })

  test('should have link to PubMed', async ({ page }) => {
    await page.goto('/performance-library')
    await page.getByRole('tab', { name: 'Publications' }).click()
    await expect(page.getByRole('link', { name: /PubMed/ })).toBeVisible()
  })
})
