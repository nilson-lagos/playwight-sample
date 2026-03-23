import { test, expect } from '@playwright/test';

test.describe('Scan', () => {
  test('scan page loads', async ({ page }) => {
    await page.goto('/scan');
    await expect(page.getByRole('heading', { name: 'Scan' })).toBeVisible();
  });

  test('shows scan results list', async ({ page }) => {
    await page.goto('/scan');
    await expect(page.locator('.scan-results')).toBeVisible();
  });
});
