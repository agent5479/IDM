/**
 * List package prices for advertised DeSite machines.
 * All figures: NZD excluding GST, before any discount, ex Nelson (no shipping).
 */
export const pricingDisclaimer =
  'NZD excluding GST. List price before any discount. Ex Nelson — shipping and delivery not included.'

/** @typedef {{ id: string, name: string, display: string, amount: number, packageLabel: string, includes: string }} PricePackage */

/** @type {Record<string, PricePackage>} */
export const packages = {
  slg68: {
    id: 'slg-68v',
    name: '68 ProScreen',
    display: '$18,697.01',
    amount: 18697.01,
    packageLabel: '68 ProScreen with lift extensions',
    includes: 'Lift extensions',
  },
  slg78: {
    id: 'slg-78vf',
    name: '78 ProScreen',
    display: '$27,582.84',
    amount: 27582.84,
    packageLabel: '78 ProScreen with riser box and lift extensions',
    includes: 'Riser box and lift extensions',
  },
  slg108: {
    id: 'slg-108vfrb',
    name: '108 ProScreen',
    display: '$38,488.18',
    amount: 38488.18,
    packageLabel: '108 ProScreen with riser box and lift extensions',
    includes: 'Riser box and lift extensions',
  },
  grizzly78: {
    id: 'static-grizzly-78',
    name: 'SLG-78 Static Grizzly',
    display: '$12,571.44',
    amount: 12571.44,
    packageLabel: 'SLG-78 Static Grizzly with riser box',
    includes: 'Riser box',
  },
  grizzly108: {
    id: 'static-grizzly-108',
    name: 'SLG-108 Static Grizzly',
    display: '$31,414.09',
    amount: 31414.09,
    packageLabel: 'SLG-108 Static Grizzly with riser box',
    includes: 'Riser box',
  },
}

export function formatOfferPrice(amount) {
  return amount.toFixed(2)
}
