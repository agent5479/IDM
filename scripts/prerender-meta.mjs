import fs from 'node:fs'
import path from 'node:path'
import { routes, defaultOgImage, organizationJsonLd } from '../src/data/seo.js'
import { contact } from '../src/data/contact.js'

const distDir = path.resolve('dist')
const indexPath = path.join(distDir, 'index.html')

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html missing. Run vite build first.')
  process.exit(1)
}

const template = fs.readFileSync(indexPath, 'utf8')

function injectMeta(html, route) {
  const jsonLd =
    route.path === '/'
      ? `<script type="application/ld+json">${JSON.stringify(organizationJsonLd)}</script>`
      : ''

  const tags = `
    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeAttr(route.description)}" />
    <meta name="keywords" content="${escapeAttr(route.keywords)}" />
    <meta name="author" content="Warwick Marshall" />
    <meta name="creator" content="Warwick Marshall" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${escapeAttr(route.canonical)}" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Site Machinery NZ" />
    <meta property="og:title" content="${escapeAttr(route.title)}" />
    <meta property="og:description" content="${escapeAttr(route.description)}" />
    <meta property="og:url" content="${escapeAttr(route.canonical)}" />
    <meta property="og:image" content="${escapeAttr(defaultOgImage)}" />
    <meta property="og:locale" content="en_NZ" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(route.title)}" />
    <meta name="twitter:description" content="${escapeAttr(route.description)}" />
    <meta name="twitter:image" content="${escapeAttr(defaultOgImage)}" />
    <meta name="contact:phone_number" content="${escapeAttr(contact.phoneDisplay)}" />
    <meta name="contact:email" content="${escapeAttr(contact.email)}" />
    ${jsonLd}
  `

  let out = html
  // Replace existing title
  out = out.replace(/<title>[\s\S]*?<\/title>/i, '')
  // Insert tags before </head>
  out = out.replace(/<\/head>/i, `${tags}\n  </head>`)
  return out
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttr(str) {
  return escapeHtml(str).replaceAll('"', '&quot;')
}

for (const route of routes) {
  const html = injectMeta(template, route)
  const outPath = path.join(distDir, route.file)
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log('Prerendered', route.file)
}

// SPA fallback for unknown client routes on GitHub Pages
fs.writeFileSync(path.join(distDir, '404.html'), injectMeta(template, routes[0]))
console.log('Wrote 404.html')

console.log('SEO prerender complete.')
