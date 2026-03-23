import { test, expect } from '@playwright/test';

test.describe('Dashboard Overview', () => {
  test('shows dashboard heading', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  // test('shows stats panel', async ({ page }) => {
  //   await page.goto('/dashboard');
  //   await expect(page.locator('.stats-panel')).toBeVisible();
  // });
});
