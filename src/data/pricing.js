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
