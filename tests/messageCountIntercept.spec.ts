import { test, expect, selectors, Page, Route } from "@playwright/test";
import { AdminPage } from "../lib/pages/admin.page";

// Definir una interfaz para el tipo de datos de la respuesta
interface MessageCount {
  count: number;
}

test.describe("/admin Checks", () => {
  test.beforeAll(async () => {
    selectors.setTestIdAttribute("data-testid");
  });

  test(`Validate Message Count is correct`, async ({ page }) => {
    let message: MessageCount = { count: 0 }; // Inicializar con un valor por defecto

    const adminPage = new AdminPage(page);
    await adminPage.goto();

    await adminPage.letMeHack.click();
    await adminPage.loginWith("admin", "password");

    await page.route("**/message/count", async (route: Route) => {
      try {
        const response = await route.fetch();
        message = await response.json();
        route.continue();
      } catch (error) {
        console.error("Error fetching message count:", error);
        route.abort();
      }
    });

    await expect(adminPage.logoutLink).toHaveText("Logout");

    // Esperar a que se actualice el recuento de mensajes antes de hacer una assertion
    await page.waitForLoadState("networkidle");
    await expect(adminPage.messageCountSpan).toHaveText(`${message.count}`);
  });
});
