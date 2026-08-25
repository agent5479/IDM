import { aboutHtml } from '../content/about.js'
import { additionalProductsHtml } from '../content/additional-products.js'
import { contactHtml } from '../content/contact.js'
import { forAggregateRoadMetalHtml } from '../content/for-aggregate-and-road-metal.js'
import { forCivilHtml } from '../content/for-civil.js'
import { forFarmersHtml } from '../content/for-farmers.js'
import { forNelsonNationwideHtml } from '../content/for-nelson-nationwide.js'
import { forTopsoilLandscapingHtml } from '../content/for-topsoil-landscaping.js'
import { homeHtml } from '../content/home.js'
import { photosHtml } from '../content/photos.js'
import { slg108Html } from '../content/slg-108vfrb.js'
import { slg68Html } from '../content/slg-68v.js'
import { slg78Html } from '../content/slg-78vf.js'
import { slg78FlowHtml } from '../content/slg-78vf-flow.js'
import { staticGrizzlyHtml } from '../content/static-grizzly.js'
import { telehandlerBinsHtml } from '../content/telehandler-bins.js'
import { videosHtml } from '../content/videos.js'
import { buildMeshGuideHtml } from './meshGuideHtml.js'
import { buildImageCatalogHtml } from './imageCatalogHtml.js'
import { buildStaticChrome } from './staticChrome.js'

/** Crawlable hero (matches HomeHero copy). Video stays client-only. */
const homeHeroHtml = `<section class="hero">
  <div class="hero-inner">
    <div class="hero-badge">
      Exclusive specialist supplier of DeSite small and medium scale soil, gravel and
      earthmoving/processing equipment
    </div>
    <h1>Screen and Grade Topsoil, Gravel and Aggregate On-Site</h1>
    <p class="hero-subtitle">
      Portable screening machines for earthmoving, civil, farming and landscaping — from Nelson,
      nationwide
    </p>
    <p class="hero-note">
      Also used to reduce buy-in costs, skip unnecessary tip fees, and create saleable product
      from material already on site.
    </p>
    <p class="hero-location">
      Order directly from Site Machinery — your New Zealand supplier
    </p>
    <a href="#equipment" class="hero-cta">View Our Equipment Range</a>
  </div>
</section>`

const pageBodies = {
  '/': `${homeHeroHtml}\n${homeHtml}`,
  '/about': aboutHtml,
  '/contact': contactHtml,
  '/photos': photosHtml,
  '/videos': videosHtml,
  '/products/slg-108vfrb': slg108Html,
  '/products/slg-78vf': slg78Html,
  '/products/slg-78vf-flow': slg78FlowHtml,
  '/products/slg-68v': slg68Html,
  '/products/static-grizzly': staticGrizzlyHtml,
  '/products/telehandler-bins': telehandlerBinsHtml,
  '/products/additional-products': additionalProductsHtml,
  '/for/farmers': forFarmersHtml,
  '/for/civil-contractors': forCivilHtml,
  '/for/topsoil-landscaping': forTopsoilLandscapingHtml,
  '/for/aggregate-and-road-metal': forAggregateRoadMetalHtml,
  '/for/nelson-nationwide': forNelsonNationwideHtml,
}

/**
 * Full static HTML (nav + body + footer) for crawler-friendly prerender.
 * Returns null for routes that should skip body injection (e.g. /idm/*).
 */
export function getStaticPageHtml(pathname) {
  if (pathname.startsWith('/idm')) return null

  let body
  if (pathname === '/screening-recommendation') {
    body = buildMeshGuideHtml()
  } else if (pathname === '/image-catalog') {
    body = buildImageCatalogHtml()
  } else {
    body = pageBodies[pathname]
  }

  if (!body) return null

  return buildStaticChrome(body, { showTagline: pathname === '/' })
}
