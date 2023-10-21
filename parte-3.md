# Uso de funcionalidades avanzadas de Playwright

Usando el script [test-1.spec.ts](./tests/test-1.spec.ts) que fue creado en la sección anterior, haremos una copia y actualizaremos para mostrar cómo interceptar/imitar el tráfico de red.

Copiemos ese archivo y cambiémosle el nombre a `messageCount.spec.ts`

Vamos a refactorizar el script [messageCount.spec.ts](./tests/messageCount.spec.ts) para incluir:

* bloque `describe`
* hook `beforeEach()`
* Una assertion sobre la cantidad de mensajes activos
* Hacer coherente el recuento de mensajes activos imitando la solicitud de red
* Cambiar el nombre de las cosas para que describan lo que estamos haciendo (normalmente se empieza por este paso).

## Playwright Docs

* [Page Class - page.route()](https://playwright.dev/docs/api/class-page#page-route)
* [Route class](https://playwright.dev/docs/api/class-route)

### Diferentes métodos de routes

`abort()`

Aborta la request que está siendo gestionada.

`continue()`

Continua la request con posibilidad opcional de hacer modificaciones

`fallback()`

Cuando varias rutas coinciden con el patrón dado, se ejecutan en orden inverso al de su registro. De esta forma, la última ruta registrada siempre puede anular todas las anteriores.

`fetch()`

Realiza la solicitud y obtiene el resultado sin completarla, de modo que la respuesta pueda modificarse y luego completarse.

`fulfill()`

Responde a la petición de la request.

## Más Links

* [Playwright Solutions](https://playwrightsolutions.com/) - Butch Mayhew ha creado este sitio para ayudar a proporcionar soluciones de alta calidad a problemas comunes con Playwright en Javascript/Typescript.

* [Playwright Discord - Community](https://discord.gg/playwright-807756831384403968) - Lots of questions, answers, and discussion
* [Javascript Visualized Promises0async-awaits](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)
* [Tu Feedback es un regalo para mí!](https://forms.gle/USHahwNNGD3BdheQ6) - Háganme llegar sus opiniones, ¡Siempre estoy buscando aspectos que mejorar!