# CV — Emmanuel Aristov

Sitio estático (HTML + CSS + JS, sin build) publicado con GitHub Pages en **https://aristov.cv**.

## Estructura

```
index.html      → contenido fijo (hero, experiencia, formación, habilidades, contacto)
proyectos.js    → lista de proyectos  ← lo único que tocás para sumar proyectos
styles.css      → estilos y temas (oscuro por defecto, claro con la luna)
main.js         → tema, render de proyectos, galería
assets/img/     → capturas y foto
```

## Agregar un proyecto

1. Subí las capturas a `assets/img/` (ideal `.webp` o `.jpg`, ~1200 px de ancho).
2. En `proyectos.js` copiá la plantilla del final, pegala arriba de todo y completala.
3. `git add . && git commit -m "Nuevo proyecto" && git push` — en 1 minuto está online.

## Foto

Guardá tu foto como `assets/img/foto.webp` y aparece sola. Si no existe, se ven las iniciales.

## Publicar con GitHub Pages + dominio propio

1. Subí estos archivos a la rama `main` del repo `CV`.
2. En GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
3. En **Custom domain** escribí `aristov.cv` y guardá (el archivo `CNAME` ya viene incluido).
4. En el panel donde compraste `aristov.cv`, configurá el DNS:

   | Tipo  | Nombre | Valor                 |
   |-------|--------|-----------------------|
   | A     | @      | 185.199.108.153       |
   | A     | @      | 185.199.109.153       |
   | A     | @      | 185.199.110.153       |
   | A     | @      | 185.199.111.153       |
   | CNAME | www    | aristov983.github.io  |

5. Cuando el DNS propague (minutos a unas horas), activá **Enforce HTTPS** en Settings → Pages.

## Probar en local

Abrí `index.html` con doble clic, o: `python -m http.server` y entrá a http://localhost:8000
