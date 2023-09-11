# Continuamos utilizando funcionalidades avanzadas de Playwright

Ahora que ya tenemos algunos ejemplos escritos, podemos eliminar los ejemplos por defecto que nos ofrece playwright.

* example.spec.ts
* /tests-examples/demo-todo-app.spec.ts (carpeta y archivo)

En el caso de que no lo hayamos hecho aún, podemos refactorizar el test 

* `test-1.spec.ts` para que ahora tenga el nombre: [login.spec.ts](./tests/login.spec.ts)

Vamos a añadir un nuevo script [api.booking.get.spec.ts](./tests/api.booking.get.spec.ts) que muestra cómo se puede agregar la cobertura de pruebas de API con Playwright.

También vamos a crear otros archivos de ejemplo adicionales, estos archivos mostrarán cómo podemos utilizar el navegador y las solicitudes por API fuera de un bloque de prueba en nuestra base de código Playwright.
También mostraremos cómo importar funciones asíncronas para mantener nuestro código lo más limpio posible.

* demo.spec.ts
* /lib/demoFile.ts

## Más Links

* [Playwright Solutions](https://playwrightsolutions.com/) - Butch Mayhew ha creado este sitio para ayudar a proporcionar soluciones de alta calidad a problemas comunes con Playwright en Javascript/Typescript.

* [Playwright Discord - Community](https://discord.gg/playwright-807756831384403968) - Muchas preguntas, respuestas y debate

* [Tu Feedback es un regalo para mí!](https://forms.gle/USHahwNNGD3BdheQ6) - Háganme llegar sus opiniones, ¡Siempre estoy buscando aspectos que mejorar!