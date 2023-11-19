# Creando Page Objects

Vamos a utilizar el patrón de diseño Page Object Model (POM) para ayudarnos a crear una base de código más fácil de mantener y de leer.

El POM mejora el mantenimiento de los tests al organizar de manera centralizada la interacción con los elementos de la página, facilitando la adaptación a cambios en la interfaz y promoviendo la reutilización de código.

Esto también nos ayudará a mantener nuestras pruebas lo más limpias posible.

Creamos nuevos archivos

* [tests/login.pom.spec.ts](./tests/login.pom.spec.ts)
* [lib/pages/admin.page.ts](./lib/pages/admin.page.ts) (Tenga en cuenta que llamamos a esta clase `admin` porque la url es `/#/admin`)

Usaremos <https://playwright.dev/docs/pom> como guía para crear nuestros Page Objects.
Un cambio que hicimos respecto a la documentación oficial fue crear el `constructor` de una manera en la que no tengamos que repetirnos.

```typescript
constructor(private readonly page: Page) {}
```
También he creado una segunda prueba que utiliza una función asíncrona que toma un nombre de usuario y contraseña y hace click en el botón Enviar para iniciar sesión.

También he editado el archivo [package.json](./package.json) para añadir un nuevo script para ejecutar las pruebas.

- `npm run test` - Ejecutará todos los tests
- `npm run ui` - Ejecutará Playwright en modo UI, una funcionalidad incluida en Playwright v1.32.0
