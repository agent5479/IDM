/** Pre-order advertising catalog. Prices are NZD and exclude GST. */

export const adCatalogVideo = {
  src: '/ads/grizzly-vf-preorder.mp4',
  poster: '/ads/grizzly-vf-preorder.jpg',
  width: 1080,
  height: 1350,
  title: 'SLG-78 Grizzly and vibrating feeder pre-order',
}

export const adCatalogNav = [
  { id: 'film', label: 'The film' },
  { id: 'grizzly', label: 'SLG-78 Grizzly' },
  { id: 'vibrating-feeder', label: 'Vibrating feeder' },
]

export const adCatalogOffers = [
  {
    id: 'grizzly',
    emoji: '💪',
    title: 'SLG 78 Grizzly with Riser Box',
    body: 'Built tough for bucket-operated screening. Jostle it with your bucket, choose the screen for your required grade, and get processing.',
    standard: '$18,857',
    preorder: '$16,971.30',
    href: '/products/static-grizzly',
    productLabel: 'View the Static Grizzly',
  },
  {
    id: 'vibrating-feeder',
    emoji: '💪',
    kicker: 'Want more control over your grading?',
    kickerEmoji: '⚙️',
    title: 'SLG 78 Vibrating Feeder with Flow Control Flaps',
    body: 'Simply dump your bucket into the feeder and let vibration do the work. Reduce bucket jiggling while gaining greater control over material flow and screening different grades.',
    standard: '$27,582.84',
    preorder: '$24,824.56',
    href: '/products/slg-78vf-flow',
    productLabel: 'View the 78 with flow control',
  },
]

export const adPriceNote =
  'NZD, plus GST. Ex Nelson — shipping and delivery not included.'
