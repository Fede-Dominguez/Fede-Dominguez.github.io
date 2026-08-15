# Portfolio — Federico Dominguez

Portfolio personal, con demos interactivas de mis proyectos embebidas en el sitio.

**En vivo:** https://fede-dominguez.github.io

## Que tiene

Ademas de las secciones habituales (about, experiencia, educacion), cada card de
proyecto abre una **demo jugable en el navegador**, sin backend ni datos reales:

- **Scrum Cockpit** — board kanban en miniatura con feed de eventos en vivo y progreso de sprint.
- **LAN Light** — habitacion simulada con una tira RGB: swatches, brillo y power, mas una terminal con los comandos `lanlight` equivalentes.
- **Bingo (C)** — bingo jugable de verdad: carton de 3x5 sobre 90 bolillas, con linea y bingo.

Los repos de cada proyecto: [scrum-cockpit](https://github.com/Fede-Dominguez/scrum-cockpit) ·
[lanlight](https://github.com/Fede-Dominguez/lanlight) ·
[bingo-c](https://github.com/Fede-Dominguez/bingo-c) ·
[BlogEngineApp](https://github.com/Fede-Dominguez/BlogEngineApp) ·
[coffeshop](https://github.com/Fede-Dominguez/coffeshop)

## Stack

React 19 + Vite 8, CSS plano (sin framework de UI), react-icons.
Tema oscuro slate con acento `#38bdf8`. Sin router: es una sola pagina.

## Correrlo local

```bash
npm install
npm run dev
```

## Deploy

Cada push a `main` dispara el workflow de `.github/workflows/deploy.yml`, que
buildea y publica en GitHub Pages.

La carpeta `deploy/` guarda una alternativa de hosting self-managed — Caddy sobre
una VM, con TLS de Let's Encrypt — que quedo sin usar pero funciona.

## Contacto

[LinkedIn](https://www.linkedin.com/in/federicod23/) · [GitHub](https://github.com/Fede-Dominguez)
