# ExpressJS
Express.js es un framework web minimalista y flexible para Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones y API web. Es un middleware que facilita la creación de servidores HTTP con una arquitectura modular que permite la integración de componentes, manejo de rutas, peticiones y respuestas HTTP de manera eficiente.

Express.js es una herramienta que te ayuda a crear servidores y manejar rutas de forma más sencilla que con el módulo http de Node.js. Te permite definir fácilmente qué hacer cuando alguien visita una URL específica y cómo responderles.

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Página de Inicio');
});

app.get('/about', (req, res) => {
  res.send('Acerca de Nosotros');
});

app.listen(4000, () => {
  console.log('Servidor Express escuchando en el puerto 4000');
});
```
- En este ejemplo, tenemos dos rutas: la raíz (/) y /about. Dependiendo de la URL que el usuario visite, el servidor responderá con diferentes mensajes. El servidor escucha en el puerto 4000. Esto muestra cómo Express facilita la gestión de múltiples rutas de manera clara y eficiente.
---
## app.get()
📌 **Definición**
Define una ruta específica para manejar solicitudes HTTP GET. Una solicitud GET se utiliza para solicitar datos del servidor, y el método app.get() registra un manejador de rutas que se ejecuta cuando el servidor recibe una solicitud en la URL especificada. Este manejador recibe los objetos request y response para procesar la solicitud y enviar una respuesta.

En resumen, permite definir qué debe hacer el servidor cuando alguien visita una URL específica mediante el método GET. Responde a la solicitud con los datos que elijas.

📌 **Ejemplo**
```js
const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
  const nombre = req.query.nombre || 'invitado';
  res.send(`Hola, ${nombre}!`);
});

app.listen(4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
});
```
- Este ejemplo define una ruta */saludo* que acepta un parámetro de consulta (nombre). Si alguien visita /saludo?nombre=Juan, el servidor responderá con "Hola, Juan!". Si no se proporciona ningún nombre, se usará "invitado" como valor predeterminado. El servidor escucha en el puerto 4000.
---
## res.end()
📌 **Definición**
Se utiliza para indicar que el servidor ha terminado de procesar la solicitud y no se enviará más contenido. res.end() puede opcionalmente enviar datos al cliente antes de cerrar la conexión, pero si se omiten los datos, simplemente finaliza la respuesta.

📌 **Ejemplo**
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Este es el inicio de la respuesta.');
  res.end('Respuesta completa.');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
```
- En este ejemplo, el servidor primero escribe una parte de la respuesta con res.write(), luego usa res.end() para finalizar la respuesta con un mensaje adicional: "Respuesta completa." El servidor está escuchando en el puerto 3000.
---
## res.set()
📌 **Definición**
El método *res.set()* en Express.js se utiliza para establecer encabezados HTTP en la respuesta. Los encabezados HTTP contienen metainformación sobre la respuesta que se envía desde el servidor al cliente, como el tipo de contenido (Content-Type), el tiempo de vida de la caché, entre otros. Este método acepta un objeto con pares clave-valor o dos argumentos: el nombre del encabezado y su valor.

Permite agregar o modificar información adicional (encabezados) en la respuesta que el servidor envía al cliente, como especificar el tipo de datos que se están enviando o establecer políticas de control de caché.

📌 **Ejemplos**
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Este es un contenido de texto plano.');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
```
- Se utiliza *res.set()* para establecer el encabezado Content-Type como text/plain, lo que indica que la respuesta es texto sin formato. Luego, el servidor responde con un mensaje de texto plano. El servidor escucha en el puerto 3000.
---
## req.params
📌 **Definición**
Es un objeto en Express.js que contiene los parámetros de ruta capturados por la ruta definida. Los parámetros de ruta son segmentos variables en una URL que se definen usando dos puntos (:) y permiten capturar valores dinámicos en una ruta específica. Estos valores son luego accesibles a través del objeto req.params.

Permite acceder a valores variables en la URL de la solicitud. Estos valores son definidos en las rutas usando :nombre_del_parametro y luego pueden ser utilizados dentro del código para procesar la solicitud.

📌 **Ejemplos**
```js
const express = require('express');
const app = express();

app.get('/productos/:categoria/:productoId', (req, res) => {
  const categoria = req.params.categoria;
  const productoId = req.params.productoId;
  res.send(`Categoría: ${categoria}, ID del producto: ${productoId}`);
});

app.listen(4000, () => {
  console.log('Servidor escuchando en el puerto 4000');
});
```
- En este caso, la ruta *'/productos/:categoria/:productoId'* define dos parámetros de ruta: categoria y productoId. Si un usuario visita /productos/electronica/456, los valores electronica y 456 serán capturados por req.params.categoria y req.params.productoId, respectivamente, y luego enviados en la respuesta.
---
## Título
📌 **Definición**

📌 **Ejemplos**
```js

```
---
## Título
📌 **Definición**

📌 **Ejemplos**
```js

```
---