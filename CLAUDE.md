# Turnos Halterofilia — App web (PWA)

App de una sola página para gestionar turnos de cámara/tarima en competiciones de
halterofilia (proyecto VMix). Reparte arrancada y dos tiempos por tanda entre 3
compañeros, con competiciones, jornadas, estadísticas y export/import en JSON.

## Arquitectura
- **Todo el código está en `index.html`** (HTML + CSS + JS en un único archivo, sin build).
- PWA: `manifest.json` + `sw.js` (service worker) + iconos. Instalable desde el navegador.
- Los datos se guardan en `localStorage` (claves `hl_cfg`, `hl_db`, `hl_active`).
- Se publica con **GitHub Pages**: https://diegohgc.github.io/turnos-halterofilia/
- Una **APK Android** (repo aparte `diegohgc/tandas-2`) es solo un WebView que carga esa URL.
  Por eso, para cambiar la app NO hace falta tocar Android ni recompilar: editar `index.html`,
  `git push`, y la APK recoge el cambio sola al abrirse.

## Flujo de trabajo (se trabaja desde 2 ordenadores: A principal y B portátil)
- Al empezar: `git pull`
- Al terminar: `git add -A && git commit -m "..." && git push`
- GitHub es la fuente de verdad; mantiene A y B sincronizados.

## Notas
- El historial de chat y la memoria de Claude Code son locales de cada equipo y NO se
  sincronizan entre A y B. Este CLAUDE.md es el mecanismo para que el contexto viaje con el repo.
- Conversación original de construcción de la app: vive en claude.ai (web), no en Claude Code.
