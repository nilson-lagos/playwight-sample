import { test, expect } from '@playwright/test';

test.describe('New Overview', () => {
  test('shows new heading', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('shows new panel', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('.stats-panel')).toBeVisible();
  });

  test('shows new panel 2', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('.stats-panel')).toBeVisible();
  });
});
