# Interceptando el tráfico de red para obtener variables con las que validar

En este breve ejemplo tenemos un nuevo script `messageCountIntercept.spec.ts` para mostrar cómo interceptar el tráfico de red y obtener el número de mensajes en la bandeja de entrada.
También se actualiza el `admin.page.ts` con los selectores adicionales necesarios.

Creamos un nuevo script [messageCountIntercept.spec.ts](./tests/messageCountIntercept.spec.ts) para mostrar cómo se puede utilizar una promesa javascript en sus pruebas con el fin de esperar una respuesta de red que se devolverá antes de proceder, junto con la captura de la respuesta y el uso que en su aserción.
