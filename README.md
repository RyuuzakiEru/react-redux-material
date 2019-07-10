# LK test frontend react

## Descripción de la prueba

La prueba consiste en una supuesta tienda creada con tecnología legacy que queremos actualizar a React. Puedes ver la maqueta desde esta url https://friendly-williams-0142de.netlify.com/

## Casos de usos a realizar

1. Conectarse a la API http://www.mocky.io/v2/5d1f23b53100003e74ebeaee para recuperar los productos y listarlos en la home. (La API no responde las imágenes que muestra el HTML, se usa el servicio picsum que genera imágenes de este tipo https://picsum.photos/id/988/300/300)
2. En el header se visualizará siempre un icono con el total de artículos que tiene el usuario en el carrito.
3. El listado de productos se va a poder filtrar por rango de precio y talla.
4. En el listado se podrá identificar los productos marcados en oferta.
5. Cuando el usuario pulsa sobre un producto llegará a la página del detalle de un producto.
6. En la página del detalle de un producto, podrá indicar la talla y el total de producto (no se tiene en cuenta el stock para facilitar el desarrollo)
7. En la página del detalle de un producto el usuario tendrá 3 opciones.
    - Al pulsar en `Add to cart`, se añadirá ese producto al carrito y se actualizará el icono del header.
    - Podrá pulsar en `continue shopping` para volver al listado de la home y poder agregar más productos al carrito.
    - Podrá pulsar en `Go to checkout` e ir a la página del detalle del carrito
8. En la página del detalle del carrito, el usuario podrá borrar un producto, cambiar la cantidad de un producto  y ver el total de la compra. Podrá pulsar en `continue shopping` para volver al listado de la home.

## Que queremos ver

- Básicamente queremos ver tu dominio con el ecosistema de React.
- Nos fijaremos con especial detalle como manejas el estado de la aplicación, si quieres hacer sobre-ingeniería para demostrar tus capacidades este sería uno de los mejores apartados.
- Nos gusta ver un código bien estructurado, limpio y que siga las buenas prácticas.
- Nos encantan el código con tests.
- La prueba se centra en React, pero como podrás comprobar tanto el marcado HTML como el CSS es mejorable, aunque no será algo negativo si no se hace, si será positivo que intentes mejorarlo.
