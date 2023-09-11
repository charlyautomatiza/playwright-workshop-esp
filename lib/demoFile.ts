// https://playwright.dev/docs/api/class-test
/*
Este es un ejemplo de cómo utilizar las peticiones API
y la funcionalidad del navegador fuera de un bloque de pruebas
*/

import { request, expect, Page } from "@playwright/test";

export async function browserExample(page: Page) {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
  console.log("ran browser example");
}

export async function apiExample() {
  const requestContext = await request.newContext();
  const response = await requestContext.get("https://playwright.dev");
  await expect(response).toBeOK();
  console.log("ran api example");
}
