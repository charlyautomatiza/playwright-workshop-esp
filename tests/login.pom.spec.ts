import { test, expect } from "@playwright/test";
import { AdminPage } from "../lib/pages/admin.page";

test.describe("Login Checks", () => {
  test("Login as Admin", async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goto();

    await adminPage.letMeHack.click();
    await adminPage.username.fill("admin");
    await adminPage.password.fill("password");
    await adminPage.submit.click();

    await expect(adminPage.logoutLink).toBeInViewport();
    await expect(adminPage.logoutLink).toBeVisible();
    await expect(adminPage.logoutLink).toHaveText("Logout");

    await adminPage.logoutLink.click();

    await page.waitForLoadState("networkidle");

    await expect(adminPage.logoutLink).not.toBeInViewport();
    await expect(adminPage.logoutLink).not.toBeVisible();
  });

  test("Login as Admin using a function", async ({ page }) => {
    const adminPage = new AdminPage(page);
    await adminPage.goto();

    await adminPage.letMeHack.click();

    await adminPage.loginWith("admin", "password");

    await expect(adminPage.logoutLink).toBeInViewport();
    await expect(adminPage.logoutLink).toBeVisible();
    await expect(adminPage.logoutLink).toHaveText("Logout");

    await adminPage.logoutLink.click();

    await page.waitForLoadState("networkidle");

    await expect(adminPage.logoutLink).not.toBeInViewport();
    await expect(adminPage.logoutLink).not.toBeVisible();
  });
});
