## Módulo URL
El módulo URL en Node.js proporciona utilidades para trabajar con URLs (Uniform Resource Locators). Este módulo permite la creación, análisis y manipulación de URLs de manera efectiva. El objeto URL y los métodos asociados permiten descomponer una URL en sus componentes (como el protocolo, host, puerto, pathname, query string, entre otros) o construir una URL a partir de componentes individuales.

El módulo URL te permite trabajar fácilmente con direcciones web. Puedes tomar una URL y separarla en partes o crear una nueva URL juntando varias piezas.
___
## Módulo PATH
**resolve**
El método path.resolve() resuelve una secuencia de rutas o segmentos de rutas en una ruta absoluta. Este método procesa las rutas de izquierda a derecha, y cada argumento es considerado en función de la ruta actual, eliminando las rutas anteriores si se encuentra con una raíz absoluta.

```js
const path = require('path');

const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath);
// Resultado: /current/directory/folder/file.txt
```
___
## Módulo HTTP
El módulo http en Node.js permite la creación de servidores web. El método createServer() se utiliza para crear un servidor HTTP que puede escuchar solicitudes entrantes y enviar respuestas. El servidor actúa como un listener de eventos, donde cada solicitud se maneja mediante una función callback que recibe los objetos request (solicitud) y response (respuesta).

El módulo http te permite crear un servidor web en Node.js. Cuando alguien visita el servidor, puedes controlar qué responderles usando el método createServer().

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hola, Mundo!');
});

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
```
- Este ejemplo crea un servidor HTTP que escucha en el puerto 3000. Cada vez que recibe una solicitud, responde con el texto "Hola, Mundo!" y un código de estado 200 (éxito).
___
