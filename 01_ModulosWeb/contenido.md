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