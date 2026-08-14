import fs from 'node:fs'
import path from 'node:path'
import { routes, defaultOgImage, organizationJsonLd } from '../src/data/seo.js'
import { contact } from '../src/data/contact.js'

const distDir = path.resolve('dist')
const publicDir = path.resolve('public')
const indexPath = path.join(distDir, 'index.html')
const defaultRobots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

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
    <meta name="robots" content="${escapeAttr(route.robots || defaultRobots)}" />
    <link rel="canonical" href="${escapeAttr(route.canonical)}" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="geo.region" content="NZ-NSN" />
    <meta name="geo.placename" content="Nelson" />
    <meta name="language" content="en-NZ" />
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
  // Strip tags we will re-inject so route-specific robots/canonical win
  out = out.replace(/<title>[\s\S]*?<\/title>/gi, '')
  out = out.replace(/<meta\s+name="description"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="keywords"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="author"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="creator"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="robots"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="geo\.[^"]*"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="language"[^>]*>/gi, '')
  out = out.replace(/<link\s+rel="canonical"[^>]*>/gi, '')
  out = out.replace(/<link\s+rel="icon"[^>]*>/gi, '')
  out = out.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
  out = out.replace(/<meta\s+name="contact:[^"]*"[^>]*>/gi, '')
  out = out.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
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

function buildSitemap() {
  const urls = routes
    .filter((route) => route.includeInSitemap !== false)
    .map((route) => {
      const loc = route.canonical
      const changefreq = route.changefreq || 'monthly'
      const priority = route.priority || '0.5'
      return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
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

const sitemap = buildSitemap()
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
console.log('Wrote sitemap.xml')

console.log('SEO prerender complete.')
