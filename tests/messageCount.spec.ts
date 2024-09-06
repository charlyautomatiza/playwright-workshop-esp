import { test, expect, Page, Route } from "@playwright/test";

/**
 * Esta función usa la clase route y cumple con interceptar 
 * lo que fue enviado desde el servidor y completarlo 
 * con nuestra respuesta provista (¡mocking!)
 */
export async function mockMessageCount(page: Page, messageCount: string): Promise<void> {
  await page.route("/message/count", (route: Route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify({ count: messageCount }),
    }).catch(error => {
      console.error("Error fulfilling route:", error);
    })
  );
}

test.describe("/admin Checks", () => {
  // Crear una constante para poder cambiar dinámicamente el número de mensajes
  const MESSAGE_COUNT = "100";

  test.beforeEach(async ({ page }) => {
    await page.goto("https://automationintesting.online/");
    await page.getByRole("button", { name: "Let me hack!" }).click();
    await page.getByRole("link", { name: "Admin panel" }).click();
    await page.getByTestId("username").fill("admin");
    await page.getByTestId("password").fill("password");
    await page.getByTestId("submit").click();
    // Esto llama a una función que existe en la parte inferior de esta página,
    // que recibe la instancia de la página y un número
    await mockMessageCount(page, MESSAGE_COUNT);
  });

  test(`Validate Message Count is ${MESSAGE_COUNT}`, async ({ page }) => {
    await expect(page.getByRole("link", { name: "Logout" })).toHaveText("Logout");

    const messageCountSpan = page.locator('[href*="#/admin/messages"] span');

    await expect(messageCountSpan).toHaveText(MESSAGE_COUNT);
  });
});
