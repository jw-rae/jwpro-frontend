import { readdir } from 'node:fs/promises'
import { join } from 'node:path'

export default defineEventHandler(async (event) => {
  // Dynamically discover the current hashed asset filenames in the static app build
  const assetsDir = join(process.cwd(), 'public/apps/examen-civique/assets')
  const files = await readdir(assetsDir)

  const js = files.find(f => /^index-.*\.js$/.test(f)) ?? 'index.js'
  const css = files.find(f => /^index-.*\.css$/.test(f)) ?? 'index.css'

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Examen Civique</title>
    <script type="module" crossorigin src="/apps/examen-civique/assets/${js}"></script>
    <link rel="stylesheet" href="/apps/examen-civique/assets/${css}">
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  })
})
