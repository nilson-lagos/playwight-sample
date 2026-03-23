import { test, expect } from '@playwright/test';

test.describe('Settings', () => {
  test('settings page loads', async ({ page }) => {
    await page.goto('/settings');
    await expect(page.getByRole('heading', { name: 'Settings' })).toBeVisible();
  });

  test('shows save button', async ({ page }) => {
    await page.goto('/settings');
    await expect(page.getByRole('button', { name: 'Save' })).toBeVisible();
  });
});
