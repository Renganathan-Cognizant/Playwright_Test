import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&dsh=S-2113134954%3A1759743070970381&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=AfYwgwVZaB1wyKYEamrtWy_del2bzn-U1MFg3_bp1rieAHQyok2tzEsz630aKxtyybzGaLPXfmYD&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('hi@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});