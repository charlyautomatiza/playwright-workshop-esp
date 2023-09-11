// https://playwright.dev/docs/api/class-test

/*
Cada test tiene una línea final que llama a una función
asíncrona para ejecutar el mismo test desde una clase
que no necesariamente contiene un test.

Esto es para demostrar cómo se pueden crear y utilizar helpers
dentro de sus pruebas.
*/

import { test, expect } from "@playwright/test";
import { browserExample, apiExample } from "../lib/demoFile";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");

  await browserExample(page);
});

test("basic api test", async ({ request }) => {
  const response = await request.get("https://playwright.dev");
  await expect(response).toBeOK();

  await apiExample();
});