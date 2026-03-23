import { test, expect } from '@playwright/test';

test('signup form is visible', async ({ page }) => {
  await page.goto('/signup');
  await expect(page.getByRole('form')).toBeVisible();
});
