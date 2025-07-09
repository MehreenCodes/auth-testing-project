const { test, expect } = require('@playwright/test');

test('Valid login should redirect to success page', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
  await expect(page).toHaveURL(/.*logged-in-successfully/);
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});

test('Invalid login should show error message', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#submit');
  await expect(page.locator('.show #error')).toHaveText(/Your username is invalid!/); // Adjust selector if needed
});
