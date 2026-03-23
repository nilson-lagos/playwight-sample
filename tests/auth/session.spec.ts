import { test, expect } from '@playwright/test';

test.describe('Session', () => {
  test('session cookie is set after login', async ({ page, context }) => {
    await page.goto('/login');
    const cookies = await context.cookies();
    expect(cookies.some((c) => c.name === 'session')).toBeTruthy();
  });

  test('logout redirects to login page', async ({ page }) => {
    await page.goto('/logout');
    await expect(page).toHaveURL(/\/login/);
  });
});
