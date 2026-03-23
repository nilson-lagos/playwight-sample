import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Example/);
  });

  test('shows navigation bar', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('shows footer', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('contentinfo')).toBeVisible();
  });
});
