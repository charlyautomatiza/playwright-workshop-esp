import { test, expect, Page } from "@playwright/test";

/* Esta función usa la clase route y cumple con interceptar 
lo que fue enviado desde el servidor y completarlo 
con nuestra respuesta provista (¡mocking!) */
export async function mockMessageCount(page: Page, messageCount: string) {
  await page.route("/message/count", (route) =>
    route.fulfill({
      status: 200,
      body: JSON.stringify({ count: messageCount }),
    })
  );
}

test.describe("/admin Checks", () => {
  // Crear una variable para poder cambiar dinámicamente el número de mensajes
  let count = "100";

  test.beforeEach(async ({ page }) => {
    // Esto llama a una función async que existe en la parte inferior de esta página,
    // que recibe la instancia de la página y un número
    await mockMessageCount(page, count);

    await page.goto("https://automationintesting.online/");
    await page.getByRole("button", { name: "Let me hack!" }).click();
    await page.getByRole("link", { name: "Admin panel" }).click();
    await page.getByTestId("username").click();
    await page.getByTestId("username").fill("admin");
    await page.getByTestId("password").click();
    await page.getByTestId("password").fill("password");
    await page.getByTestId("submit").click();
  });

  test(`Validate Message Count is ${count}`, async ({ page }) => {
    await expect(page.getByRole("link", { name: "Logout" })).toHaveText(
      "Logout"
    );

    const messageCountSpan = page
      .locator('[href*="#/admin/messages"]')
      .locator("span");

    await expect(messageCountSpan).toHaveText(`${count}`);
  });
});
