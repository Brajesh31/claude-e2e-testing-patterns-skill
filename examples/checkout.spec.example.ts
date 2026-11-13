// Example Playwright-style test. Adapt imports, selectors, and routes to the application.
import { test, expect } from "@playwright/test";

test("customer can complete a checkout", async ({ page }) => {
  await page.goto("/products/sample-item");

  await page.getByRole("button", { name: /add to cart/i }).click();
  await page.getByRole("link", { name: /cart/i }).click();

  await expect(page.getByRole("heading", { name: /your cart/i })).toBeVisible();
  await page.getByRole("button", { name: /checkout/i }).click();

  await page.getByLabel(/email/i).fill("test@example.invalid");
  await page.getByLabel(/delivery address/i).fill("10 Example Street");

  await page.getByRole("button", { name: /place order/i }).click();
  await expect(page.getByRole("heading", { name: /order confirmed/i })).toBeVisible();
});
