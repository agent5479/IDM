import { contact } from './contact.js'
import {
  adCatalogNav,
  adCatalogOffers,
  adCatalogVideo,
  adPriceNote,
} from './adCatalog.js'

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function priceRows(offer) {
  return `<div class="price-packages">
  <div class="price-package-row">
    <div class="price-package-name">Standard price</div>
    <div class="price-package-amount">${escapeHtml(offer.standard)} + GST</div>
  </div>
  <div class="price-package-row ad-catalog-offer">
    <div class="price-package-name">Pre-order price · 10% off</div>
    <div class="price-package-amount">${escapeHtml(offer.preorder)} + GST</div>
  </div>
</div>
<p class="price-note">${escapeHtml(adPriceNote)}</p>`
}

function offerSection(offer) {
  const kicker = offer.kicker
    ? `<p class="ad-catalog-kicker"><span aria-hidden="true">${escapeHtml(offer.kickerEmoji)} </span>${escapeHtml(offer.kicker)}</p>`
    : ''
  return `<section id="${escapeHtml(offer.id)}" class="image-catalog-section ad-catalog-section">
  ${kicker}
  <div class="image-catalog-section-head">
    <h2><span aria-hidden="true">${escapeHtml(offer.emoji)} </span>${escapeHtml(offer.title)}</h2>
    <a href="${escapeHtml(offer.href)}" class="image-catalog-product-link">${escapeHtml(offer.productLabel)}</a>
  </div>
  <p>${escapeHtml(offer.body)}</p>
  ${priceRows(offer)}
</section>`
}

/**
 * Build-time HTML for /advertising-catalog so the film, offer and prices
 * are in the first response without JavaScript.
 */
export function buildAdCatalogHtml() {
  const nav = adCatalogNav
    .map((item) => `<a href="#${escapeHtml(item.id)}">${escapeHtml(item.label)}</a>`)
    .join('\n')
  const offers = adCatalogOffers.map(offerSection).join('\n')

  return `<!-- Advertising catalog (static prerender) -->
<section class="page-content image-catalog ad-catalog">
  <div class="image-catalog-hero">
    <h1>Advertising Catalog</h1>
    <p>Got a loader? Put your downtime to work.</p>
    <p>A container of Site Machinery screeners is landing in New Zealand. Pre-order now and save 10%.</p>
    <p class="image-catalog-hero-links">
      <a href="/image-catalog">Image catalog</a>
      · <a href="/videos">Videos</a>
      · <a href="/products">Products</a>
      · <a href="/contact">Contact</a>
    </p>
  </div>

  <nav class="image-catalog-nav" aria-label="Advertisements">
    ${nav}
  </nav>

  <section id="film" class="image-catalog-section ad-catalog-section">
    <div class="image-catalog-section-head">
      <h2>The film</h2>
    </div>
    <div class="ad-catalog-video">
      <video controls playsinline preload="metadata" poster="${escapeHtml(adCatalogVideo.poster)}" width="${adCatalogVideo.width}" height="${adCatalogVideo.height}" title="${escapeHtml(adCatalogVideo.title)}">
        <source src="${escapeHtml(adCatalogVideo.src)}" type="video/mp4" />
      </video>
    </div>
  </section>

  ${offers}

  <div class="product-description image-catalog-cta" id="pre-order">
    <h2>Ready to gain a foothold in the soil screening industry?</h2>
    <p>Use loader downtime to stay productive, turn available material into a saleable product, and open up another potential revenue stream.</p>
    <p>The included riser box raises the screen so you can process more material before moving the screened pile.</p>
    <p><strong>Pre-order now and save 10%.</strong></p>
    <p><a href="https://sitemachinery.nz/">sitemachinery.nz</a></p>
    <div class="cta-buttons">
      <a href="tel:${contact.phoneTel}" class="cta-primary">Call ${escapeHtml(contact.phoneDisplay)}</a>
      <a href="mailto:${escapeHtml(contact.email)}" class="cta-secondary">Email ${escapeHtml(contact.email)}</a>
      <a href="/contact" class="cta-secondary">Contact</a>
    </div>
  </div>
</section>`
}
