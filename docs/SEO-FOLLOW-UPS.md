# SEO follow-ups (future review)

Operator and content work that remains after the Aug 2026 remediation (crawlable prerender, JSON-LD, NZ use-case pages, AI bot Allow rules, `llms.txt`). Revisit periodically; tick items when done.

## Local / Google Business Profile

- [ ] Audit GBP name, address, phone, and website against the site: **Site Machinery NZ**, 105 Pascoe Street, Nelson 7011, `+64 3 970 7602`, `https://sitemachinery.nz`
- [ ] Align GBP hours with schema: Monday–Friday 08:00–17:00
- [ ] Mirror site services in GBP categories: soil / gravel / aggregate screeners, static grizzly, telehandler bins, farm / cow-race screening, civil on-site screening, topsoil / landscaping, showroom viewing
- [ ] Encourage customer reviews that name specific services, materials, and towns; reuse that language on `/for/*` pages (never invent reviews)

## Search Console & indexing

- [ ] Confirm Search Console property is only `https://sitemachinery.nz` (no indexed `.github.io` duplicate)
- [ ] Submit / refresh `https://sitemachinery.nz/sitemap.xml`
- [ ] Request indexing for `/for/topsoil-landscaping`, `/for/aggregate-and-road-metal`, `/for/nelson-nationwide`, `/llms.txt` (optional URL inspection)
- [ ] Validate Rich Results / schema on home (`LocalBusiness` + `SoftwareApplication`), one product (`Product`), mesh guide (`HowTo`), and one `/for/` page (`Service`)
- [ ] After deploy, view-source (no JS) homepage and a product URL — confirm `<h1>` + body copy are present in HTML

## AI crawlers & GEO measurement

- [ ] Confirm live `https://sitemachinery.nz/robots.txt` still lists explicit Allow for GPTBot, OAI-SearchBot, ChatGPT-User, Google-Extended, ClaudeBot, PerplexityBot, Perplexity-User, Applebot-Extended
- [ ] Confirm `https://sitemachinery.nz/llms.txt` returns 200 and matches repo `public/llms.txt`
- [ ] Hosting note: site is on **GitHub Pages** (not Cloudflare). If a CDN/WAF is added later, check dashboard-level AI bot rules separately from robots.txt
- [ ] Quarterly: query ChatGPT, Perplexity, Gemini, and Claude with real NZ target prompts (e.g. cow race gravel screening, DeSite screener NZ, topsoil screener Nelson) and log which URLs/competitors get cited — Search Console does not capture this
- [ ] If access logs become available (or via a CDN), track AI bot user-agent hits separately from human traffic

## Brand demand (off-site)

- [ ] YouTube: titles/descriptions use **Site Machinery NZ** + model + NZ use case; link to product and `/for/*` URLs
- [ ] Add branded `sameAs` entries in `src/data/seo.js` `organizationJsonLd` only for profiles you control (do not use third-party demo channels such as IDM-only YouTube)
- [ ] Set up one owned direct channel (email list for stock arrivals / quotes) so revenue is not 100% search-dependent
- [ ] Keep brand string **Site Machinery NZ** consistent across GBP, social bios, and video channels
- [ ] Track branded search volume (Site Machinery / DeSite NZ) as a KPI alongside generic keyword rank

## Content (informationally additive)

- [ ] Publish 2–3 first-party NZ case notes when real jobs allow (material in → mesh → product out, carrier used, outcome) — not generic how-tos
- [ ] Revisit product pages if DeSite/US copy starts to dominate; keep NZ outcomes and mesh/use-case links first
- [ ] Deep-link mesh guide anchors from campaigns and ads (`#farm-filling`, `#topsoil`, `#aggregates`)
- [ ] Freshness pass on evergreen `/for/*` and mesh guide pages when mesh stock or offers change

## Optional later engineering

- [ ] Progressive enhancement for the home profit calculator (static explanatory defaults already in HTML; interactive calc remains JS-only by design)
- [ ] Consider email capture / quote form on contact or Nelson showroom page when ready for a mailing list

## Reference

- Implementation notes and deploy checks: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Route / schema source of truth: `src/data/seo.js`
- Body prerender: `scripts/prerender-meta.mjs`, `src/data/staticPages.js`
- AI discovery file: `public/llms.txt`
- Cursor agent checklist: `.cursor/rules/seo-geo.mdc`
