# Luzu TV Streaming - Migracion a React

Proyecto de practica hecho con React y Vite. Es una migracion paso a paso de una pagina estatica previa a una estructura basada en componentes.

> Este proyecto esta creado exclusivamente como material de desarrollo y estudio. No es un sitio oficial, no tiene fines de lucro y no utiliza informacion para otros propositos.

## Vista previa

### Desktop

![Vista desktop](public/img/readme/vista-descktop/presentacion-index.png)

### Mobile

![Vista mobile](public/img/readme/vista-mobile/presentacion-index-mobile.png)

## Tecnologias

- React
- Vite
- CSS modular por componente
- Font Awesome por CDN

## Estructura del proyecto

```txt
public/
  img/                 # Assets publicos usados por la app y README
src/
  components/          # Componentes reutilizables
  data/                # Datos para redes, programacion y galeria
  pages/               # Paginas de la app
  App.jsx
  main.jsx
index.html
vite.config.js
```

## Componentes principales

- `Header`: logo, redes, tienda, menu mobile y boton de vivo.
- `BotonVivo`: boton flotante de vivo para mobile/tablet.
- `SeccionResumido`: bloque superior de Resumido.
- `MarquesinaOndemand`: marquesina reutilizable de EN VIVO / ON DEMAND.
- `StreamingEnVivo`: seccion con fondo responsivo e iframe de YouTube.
- `ProgramacionResumen`: resumen de dias y horarios de programas.
- `GaleriaProgramas`: tarjetas de programas generadas desde datos.
- `Footer`: logo, redes y aviso de desarrollo.

## Instalacion local

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

```txt
http://localhost:5173/
```

## Validar el proyecto

```bash
npm run lint
npm run build
```

`npm run build` genera la carpeta `dist/`, que es la version optimizada para publicar. Esa carpeta no se edita a mano y esta ignorada por Git.

## GitHub Pages

El proyecto esta preparado para publicarse en GitHub Pages con el paquete `gh-pages`.

### Configuracion en GitHub

1. Subir el proyecto a GitHub.
2. Ir al repositorio en GitHub.
3. Entrar a `Settings > Pages`.
4. En `Build and deployment`, elegir `Source: Deploy from a branch`.
5. Elegir la rama `gh-pages` y la carpeta `/ (root)`.

### Publicar cambios

Cada vez que quieras publicar una nueva version:

```bash
npm run deploy
```

Ese comando ejecuta `npm run build` y sube el contenido de `dist/` a la rama `gh-pages`.

La URL final deberia tener esta forma:

```txt
https://TU_USUARIO.github.io/proyecto-paginaweb-luzu-radio-streaming/
```

## Notas de organizacion

- Los assets se guardan en `public/img` para que Vite los copie correctamente al build.
- Las rutas de imagenes usan `img/...` en vez de `/img/...` para funcionar bien en GitHub Pages.
- Los archivos heredados del proyecto estatico anterior fueron removidos cuando dejaron de ser necesarios.
