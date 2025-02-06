# Ui Kit - boilerplate

Plantilla para crear Ui Kits o librerías de componentes de React (RCC y RSC) y Typescript. Utiliza `Vite` en [Library mode](https://vite.dev/guide/build#library-mode), `Scss` y [Storybook](https://storybook.js.org/) para facilitar el desarrollo y visualización de componentes.

Instalar las dependencias
```bash
npm install
```

## Dev local - Storybook

```bash
  npm run storybook
```

## Dev local - Conexión local
1- Dentro de nuestra librería de componentes
```bash
  npm run build
  npm link
```
`npm run build`: compila y genera el build.  
`npm link`: genera la conexión local (similar a un install global)

2- Dentro de la app donde queremos usar los componentes
```bash
  npm link @egodesign/ui-kit
```
Este nombre lo encontramos en el `package.json`.
Para deslinkear el package, correr `npm unlink @egodesign/ui-kit`

**IMPORTANTE:** En proyectos de Nextjs que usen Turbopack, debemos agregar este codigo para que nos permita trabajar con archivos por fuera del proyecto:

```javascript
import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
    /* config options here */
    outputFileTracingRoot: path.join(__dirname, '../'),
};

export default nextConfig;
```

## Publicar en NPM
```bash
  npm version patch
  git push --tags origin master
  npm publish
```