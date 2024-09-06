# Instalando y ejecutando Playwright

Siguiendo la guía de inicio: https://playwright.dev/docs/intro

Lo más sencillo es instalar todo desde la [extensión de Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).

También puedes instalar Playwright desde la terminal, con el comando `npm init playwright@latest` allí deberás seleccionar las siguientes opciones:

* `TypeScript`
* `tests`
* `y`
* `y`

Esto creará un proyecto base para usted junto con algunas pruebas de ejemplo.

Es sugerido actualizar el archivo [playwright.config.ts](./playwright.config.ts) añadiendo las siguientes líneas a la sección `use` de la configuración.

```typescript
  ignoreHTTPSErrors: true,
  video: "retain-on-failure",
  trace: "retain-on-failure",
  baseURL: "https://automationintesting.online",
```

Para evitar errores futuros si se implementa nuestro framework en herramientas de integración continua (CI) debemos actualizar el achivo en la sección `reporter` para evitar que se intente abrir automáticamente el reporte ente fallos, siempre podremos abrirlo cuando sea necesario.

```typescript
  reporter: [
    ['html', { open: 'never' }]
  ],
```

Podremos comentar los proyectos firefox y webkit, esto nos permitirá ejecutar nuestras pruebas más rápido, siempre podemos volver a agregarlos más tarde cuando estemos ejecutando nuestra automatización para asegurarnos de que todo funciona correctamente.

El archivo completo [playwright.config.ts](./playwright.config.ts) debería verse de esta manera:

```typescript
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'never' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://automationintesting.online',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

```

Con el siguiente comando podremos ejecutar nuestras pruebas desde la línea de comandos

`npx playwright test`

Esto debería ejecutar 2 pruebas con dos workers y deberían pasar, tenga en cuenta que el navegador no aparece por defecto, los navegadores se ejecutan en modo headless, aunque hay una bandera que puede activar en la sección use `headless: false,` de la configuración o puede ejecutar el comando `npx playwright test --headed` y los navegadores deberían aparecer.

Más información sobre la línea de comandos <https://playwright.dev/docs/test-cli>

## Vamos a la parte-2
