# Desarrollando nuestro 1er script con Playwright

Vamos a crear una prueba que visite <https://automationintesting.online>

Vamos a hacerlo utilizando la herramienta generador de código de la extensión VS Code de Playwright (CODEGEN) para grabar un script sencillo.

Para ello tenemos 2 opciones, ir desde la Command Pallet de VS Code (View -> Command Pallet o (windows) Ctrl + Shift + P | (mac) Cmd + Shift + P) y escribamos `> Test: Record New`

O directamente abrir la extensión de VS Code de Playwright

Comience a grabar los pasos:

* Visitar <https://automationintesting.online>
* Click "Let me Hack" button
* Click Admin panel (al pie de la página)
* Click username
* Fill username with `admin`
* click password
* Fill password with `password`
* Click Submit
* Click Logout

Esto creará un script llamado [test-1.spec.ts](./tests/test-1.spec.ts) en tu carpeta de pruebas. Desde allí podremos inspeccionar el código generado, vea el DOM de la página para ver qué localizadores fueron seleccionados.

Hasta ahora no tenemos una prueba, sólo tenemos el navegador haciendo algunas acciones sobre nuestra aplicación.

Tenemos que hacer estas pruebas:

- ¿Cómo podemos comprobar hicimos un login correcto?
- ¿Cómo podemos comprobar si hicimos logout correctamente?

🔨 Es tu turno de añadir esas aserciones 

Si alguien está recibiendo algún error raro de timeout es probablemente porque le falta un `await` al interactuar con la `page.xxxx` en sus aserciones.

* Hagamos que la prueba falle, y asegurémonos de que podemos ver el reporte HTML, el archivo de traceviewer y el vídeo.

* Ouch! Si no vemos una captura de pantalla, es porque no hemos añadadido `screenshot: "only-on-failure",` al archivo [playwright.config.ts](./playwright.config.ts) en la sección `use:`.

## Enlaces de interés

* [Playwright Locators](https://playwright.dev/docs/api/class-locator)

## ¿Es una prueba realmente una prueba sin una assertion?

* [Playwright Locator Specific Assertions](https://playwright.dev/docs/api/class-locatorassertions)
* [Playwright Page Specific Assertions](https://playwright.dev/docs/api/class-pageassertions)
* [Playwright Generic Assertions](https://playwright.dev/docs/api/class-genericassertions)

## Otros enlaces útiles

* [Playwright Test Class: describe, test, beforeAll, beforeEach, etc](https://playwright.dev/docs/api/class-test)
