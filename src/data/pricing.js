/**
 * List package prices for advertised DeSite machines.
 * All figures: NZD excluding GST, before any discount, ex Nelson (no shipping).
 *
 * List amounts match Stock Price Calculator 261110.xlsx (Container #26),
 * 61% markup on landed cost. Pre-order is 10% off that list.
 */

export const pricingDisclaimer =
  'NZD excluding GST. List price before any discount. Ex Nelson — shipping and delivery not included.'

/** Container pre-order: 10% off list, through the end of December. */
export const containerPromo = {
  discountRate: 0.1,
  label: '10% off',
  validUntil: '2026-12-31',
  validUntilDisplay: '31 December 2026',
  headline: 'A container of screeners is landing in New Zealand',
  shortLine: 'Pre-order from this container and save 10%. Offer ends 31 December 2026.',
  note: '10% off list for this container. Offer ends 31 December 2026. NZD excluding GST. Ex Nelson — shipping and delivery not included.',
  leadTime: 'Safe bet is 2 months for container pre-orders landing in NZ.',
  shippingNote:
    'Ex Nelson showroom (105 Pascoe Street). Freight is calculated based on where in NZ you are based to keep shipping costs clear and accurate.',
  riserBoxBenefit:
    'Both Grizzly and ProScreen packages include riser boxes so they sit higher — requiring clearing the screened material less often.',
  screenChangeTime:
    'Interchangeable screens swap in 10–15 minutes: undo approx. 10 nuts with a deep socket, slide existing mesh out, fit replacement and re-tension.',
  inclineReductionNote:
    'Because these are inclined screen decks, effective material sizing is approximately 8% smaller than actual mesh aperture (e.g. 20mm vertical aperture produces 18mm gravel).',
  warranty:
    '5 years on the structural frame, 1 year on electrics (fair wear and tear expected).',
  grizzlyWarranty:
    '5 years on the structural frame (fair wear and tear expected; no electrics on static models).',
}

export const warrantyTerms = {
  frame: '5 years on the structural frame',
  electrics: '1 year on electrical components',
  terms: 'Fair wear and tear expected',
  summary: '5-year frame warranty · 1-year electrical warranty (fair wear & tear expected)',
  grizzlySummary: '5-year frame warranty (fair wear & tear expected)',
}

/** @typedef {{ id: string, name: string, display: string, amount: number, preorderDisplay: string, preorderAmount: number, packageLabel: string, includes: string }} PricePackage */

export function roundMoney(amount) {
  return Math.round(amount * 100) / 100
}

export function formatOfferPrice(amount) {
  return roundMoney(amount).toFixed(2)
}

export function formatMoney(amount) {
  const fixed = formatOfferPrice(amount)
  const [whole, frac] = fixed.split('.')
  return `$${Number(whole).toLocaleString('en-NZ')}.${frac}`
}

export function preorderAmount(listAmount) {
  return roundMoney(listAmount * (1 - containerPromo.discountRate))
}

function makePackage({ id, name, amount, packageLabel, includes }) {
  const preorder = preorderAmount(amount)
  return {
    id,
    name,
    amount,
    display: formatMoney(amount),
    preorderAmount: preorder,
    preorderDisplay: formatMoney(preorder),
    packageLabel,
    includes,
  }
}

/** @type {Record<string, PricePackage>} */
export const packages = {
  slg68: makePackage({
    id: 'slg-68v',
    name: '68 ProScreen',
    amount: 21470.41,
    packageLabel: '68 ProScreen with lift extensions',
    includes: 'Lift extensions',
  }),
  slg78: makePackage({
    id: 'slg-78vf',
    name: '78 ProScreen',
    amount: 31685.89,
    packageLabel: '78 ProScreen with riser box and lift extensions',
    includes: 'Riser box and lift extensions',
  }),
  slg108: makePackage({
    id: 'slg-108vfrb',
    name: '108 ProScreen',
    amount: 44223.08,
    packageLabel: '108 ProScreen with riser box and lift extensions',
    includes: 'Riser box and lift extensions',
  }),
  grizzly78: makePackage({
    id: 'static-grizzly-78',
    name: 'SLG-78 Static Grizzly',
    amount: 14428.23,
    packageLabel: 'SLG-78 Static Grizzly with riser box',
    includes: 'Riser box',
  }),
  grizzly108: makePackage({
    id: 'static-grizzly-108',
    name: 'SLG-108 Static Grizzly',
    amount: 36090.44,
    packageLabel: 'SLG-108 Static Grizzly with riser box',
    includes: 'Riser box',
  }),
}

/** HTML for a single package with list + pre-order rows. */
export function packagePriceRowsHtml(pkg) {
  return `<div class="price-packages">
  <div class="price-package-row">
    <div class="price-package-name">Standard price</div>
    <div class="price-package-amount">${pkg.display}</div>
  </div>
  <div class="price-package-row price-package-promo">
    <div class="price-package-name">Pre-order · 10% off · to ${containerPromo.validUntilDisplay}</div>
    <div class="price-package-amount">${pkg.preorderDisplay}</div>
  </div>
</div>`
}

/** HTML for the prominent top pricing callout block on product pages. */
export function productTopPricingHtml({
  pkg,
  operationBadge = '',
  standardMesh = '',
  effectiveProduct = '',
  warranty = '5-yr frame · 1-yr electrics (fair wear & tear)',
}) {
  return `<div class="product-top-pricing">
  <div class="product-top-pricing-grid">
    <span class="product-top-pricing-badge">10% Pre-Order Discount</span>
    <span class="product-top-pricing-amount">${pkg.preorderDisplay} <small style="font-size:0.6em;color:#2c2c2c;font-weight:600;">+GST</small></span>
    <span class="product-top-pricing-was">Standard ${pkg.display} +GST</span>
  </div>
  <p class="product-top-pricing-meta">
    <strong>${pkg.packageLabel}</strong> — Includes riser box (sits higher so you clear screened material less often).
  </p>
  <div class="product-top-pricing-bullets">
    <span>⏱️ <strong>Lead time:</strong> Safe bet is 2 months (container landing in NZ)</span>
    <span>📍 <strong>Shipping:</strong> Ex Nelson showroom · calculated based on your NZ location</span>
    ${operationBadge ? `<span>⚙️ <strong>Operation:</strong> ${operationBadge}</span>` : ''}
    ${standardMesh ? `<span>📐 <strong>Standard screen:</strong> ${standardMesh}${effectiveProduct ? ` (effective product: ~${effectiveProduct})` : ''}</span>` : ''}
    <span>🔄 <strong>Screen swap:</strong> 10–15 mins with deep socket (~10 nuts)</span>
    <span>🛡️ <strong>Warranty:</strong> ${warranty}</span>
  </div>
</div>`
}

/** HTML for the single-price product pages. */
export function productPricingBlockHtml(pkg, extraNote = '') {
  const note = extraNote ? ` ${extraNote}` : ''
  return `<div class="product-pricing">
    <h2>Package pricing</h2>
    <p class="price-package">${pkg.packageLabel}</p>
    ${packagePriceRowsHtml(pkg)}
    <p class="price-promo-banner">${containerPromo.headline}. ${containerPromo.shortLine}</p>
    <p class="price-note">${containerPromo.note}${note}</p>`
}
