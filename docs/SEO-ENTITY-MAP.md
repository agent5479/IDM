# SEO entity map — Site Machinery NZ

Primary entity: **Site Machinery NZ — DeSite soil, gravel and aggregate screening equipment** (Nelson showroom, nationwide NZ supply).

Two parallel layers:

- **Product intent** (“I need a screener”) → `/products` + model pages
- **Problem intent** (“I have material to process”) → `/` + `/for/*` + mesh guide

Do **not** rename existing slugs (GitHub Pages has no redirect layer). Change title, H1, and first-sentence copy instead.

## One primary intent per URL

| URL | Primary search intent | Title (locked ≤65) | H1 note |
| --- | --- | --- | --- |
| `/` | soil / gravel / aggregate screener NZ | Soil, Gravel & Aggregate Screeners NZ \| Site Machinery NZ | Keep problem H1 (on-site grading) |
| `/products` | portable screener NZ, screening equipment NZ, DeSite screener NZ | Portable Screening Equipment NZ \| Site Machinery NZ | Product hub H1 |
| `/products/slg-78vf` | portable soil & gravel screener + SLG-78VF | SLG-78VF Portable Soil & Gravel Screener NZ | Model H1; lede = job first |
| `/products/slg-68v` | compact soil screener NZ | SLG-68V Compact Soil Screener NZ \| Site Machinery NZ | Model H1; lede = job first |
| `/products/slg-108vfrb` | heavy-duty soil / aggregate screener | SLG-108VFRB Heavy Duty Screener NZ \| Site Machinery NZ | Model H1; lede = job first |
| `/products/static-grizzly` | static grizzly / no-power oversize screener | DeSite Static Grizzly Screener NZ \| Site Machinery NZ | Keep dual-model H1 |
| `/products/slg-78vf-flow` | 78VF flow control variant | SLG-78VF Flow Control Screener NZ \| Site Machinery NZ | Supporting product |
| `/products/telehandler-bins` | telehandler bins NZ | Telehandler Bins NZ \| Site Machinery NZ | Accessory |
| `/products/additional-products` | mini screeners / orderable range | Mini Screeners & Bins to Order \| Site Machinery NZ | Orderable |
| `/for/farmers` | farm gravel screener NZ | Farm Gravel Screener NZ \| Cow Race Filling | Cow-race H1 OK |
| `/for/civil-contractors` | screener for civil contractors NZ | Soil Screener for Civil Contractors NZ | Soil + civil/subdivision |
| `/for/topsoil-landscaping` | topsoil screener NZ | Topsoil Screener NZ for Landscapers | Landscaper H1 |
| `/for/aggregate-and-road-metal` | gravel / aggregate screener NZ (material job) | Gravel & Aggregate Screening Equipment NZ | Material H1 |
| `/for/nelson-nationwide` | soil screener Nelson, screening equipment Nelson | Nelson Screening Equipment Showroom \| Site Machinery NZ | Nelson + nationwide |
| `/screening-recommendation` | mesh size / openings | Screener Mesh Sizes \| Topsoil, Gravel & Aggregate NZ | Mesh guide H1 |
| `/about` | DeSite NZ supplier | About Site Machinery NZ \| DeSite Screener Supplier | About Site Machinery NZ |
| `/contact` | screener pricing NZ | Contact Us \| Screener Pricing NZ \| Site Machinery NZ | Contact |

Supporting pages (photos, videos, image catalog) keep gallery intent; they are not primary commercial targets.

## Explicit non-pages (do not create)

Thin or overlapping URLs we deliberately avoid:

- Separate pages for compost, concrete, drainage-only, earthmovers, material yards, quarry operators
- Town/region URLs for Tasman, South Island (mention as supporting copy on Nelson page only)
- Standalone carrier URLs (`/for/skid-steer`, excavator, tractor) — use a section on `/products` instead
- Blog-style how-to URLs (“is a screener cheaper than topsoil”) — use static H3 Q&A on the homepage calculator section
- `/mesh/3mm`-style URLs — use metric anchors on `/screening-recommendation` (`#10mm`, `#50mm`, `#75mm`, `#100mm`, etc.)

## Internal link matrix

- Home “What You Can Screen” cards → matching `/for/*`
- `/products` carrier section → matching model pages
- Model pages → relevant `/for/*` + mesh guide
- `/for/*` → matching machines + mesh anchors + Nelson showroom
- Nav: Products → `/products`; Applications → `/for/*`

## Source of truth

- Titles / meta / schema: `src/data/seo.js`
- Bodies: `src/content/*`, `src/data/staticPages.js`, `src/data/meshRecommendations.js`
- AI discovery: `public/llms.txt`
- Operator follow-ups: `docs/SEO-FOLLOW-UPS.md`
