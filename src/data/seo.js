import { contact } from './contact.js'

const siteName = 'Site Machinery NZ'
const defaultOgImage = `${contact.siteUrl}/images/SLG108VFRB.jpg`

export const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Site Machinery NZ - Top Quality Soil Screening Machines at Affordable Prices',
    description:
      'Site Machinery NZ supplies DeSite soil screening machines, gravel screeners and earthmoving equipment in New Zealand. View SLG models, videos, photos and contact us for pricing.',
    keywords:
      'soil screener NZ, topsoil screener, gravel screener, DeSite NZ, screening equipment, Site Machinery',
    canonical: `${contact.siteUrl}/`,
  },
  {
    path: '/about',
    file: 'about/index.html',
    title: `About Us - ${siteName}`,
    description:
      'Learn about Site Machinery NZ, your New Zealand supplier of DeSite screening equipment, with nationwide supply from Nelson and specialist screening expertise.',
    keywords:
      'about Site Machinery, DeSite supplier NZ, screening equipment Nelson, soil screener company',
    canonical: `${contact.siteUrl}/about`,
  },
  {
    path: '/contact',
    file: 'contact/index.html',
    title: `Contact Us - ${siteName}`,
    description:
      'Contact Site Machinery NZ for DeSite screener pricing, product advice and showroom viewings at 105 Pascoe Street, Nelson. Nationwide supply across New Zealand.',
    keywords:
      'contact Site Machinery, screener pricing NZ, Nelson showroom, DeSite New Zealand',
    canonical: `${contact.siteUrl}/contact`,
  },
  {
    path: '/photos',
    file: 'photos/index.html',
    title: `Photos - ${siteName}`,
    description:
      'View Site Machinery NZ photo galleries of DeSite screening equipment including SLG-108VFRB, SLG-78VF, SLG-68V and telehandler bins on real job sites.',
    keywords:
      'screener photos, DeSite gallery, SLG-108VFRB images, SLG-78VF photos, Site Machinery NZ',
    canonical: `${contact.siteUrl}/photos`,
  },
  {
    path: '/videos',
    file: 'videos/index.html',
    title: `Videos - ${siteName}`,
    description:
      'Watch Site Machinery NZ equipment videos featuring DeSite screeners in action, including SLG-108VFRB, SLG-78VF and SLG-68V demonstrations.',
    keywords:
      'screener videos, DeSite videos, SLG-108VFRB video, SLG-78VF video, soil screener NZ',
    canonical: `${contact.siteUrl}/videos`,
  },
  {
    path: '/products/slg-108vfrb',
    file: 'products/slg-108vfrb/index.html',
    title: `DeSite SLG-108VFRB - ${siteName}`,
    description:
      'Heavy-duty DeSite SLG-108VFRB screener details, specs and video. Site Machinery NZ supplies this high-capacity soil and gravel screener across New Zealand.',
    keywords:
      'SLG-108VFRB, heavy duty screener, DeSite 108, soil screener NZ, gravel screener',
    canonical: `${contact.siteUrl}/products/slg-108vfrb`,
  },
  {
    path: '/products/slg-78vf',
    file: 'products/slg-78vf/index.html',
    title: `DeSite SLG-78VF - ${siteName}`,
    description:
      'Discover the DeSite SLG-78VF portable screener with multi-slope deck, key specifications and use cases for topsoil and aggregate screening in New Zealand.',
    keywords: 'SLG-78VF, portable screener NZ, topsoil screener, DeSite screener',
    canonical: `${contact.siteUrl}/products/slg-78vf`,
  },
  {
    path: '/products/slg-78vf-flow',
    file: 'products/slg-78vf-flow/index.html',
    title: `DeSite SLG-78VF with Flow Control - ${siteName}`,
    description:
      'Explore the DeSite SLG-78VF with Flow Control, designed for consistent feed and efficient screening of soil, gravel and recycled materials.',
    keywords:
      'SLG-78VF flow control, DeSite flow control screener, soil screening NZ',
    canonical: `${contact.siteUrl}/products/slg-78vf-flow`,
  },
  {
    path: '/products/slg-68v',
    file: 'products/slg-68v/index.html',
    title: `DeSite SLG-68V - ${siteName}`,
    description:
      'View DeSite SLG-68V compact screener specifications, applications and benefits for smaller contractors and landscaping operations in New Zealand.',
    keywords: 'SLG-68V, compact screener, small soil screener NZ, DeSite 68V',
    canonical: `${contact.siteUrl}/products/slg-68v`,
  },
  {
    path: '/products/static-grizzly',
    file: 'products/static-grizzly/index.html',
    title: `DeSite SLG-78 Static Grizzly - ${siteName}`,
    description:
      'See the DeSite SLG-78 Static Grizzly screener for tough pre-screening and oversize material separation on construction and earthmoving sites.',
    keywords: 'static grizzly screener, SLG-78 static, DeSite grizzly NZ',
    canonical: `${contact.siteUrl}/products/static-grizzly`,
  },
  {
    path: '/products/telehandler-bins',
    file: 'products/telehandler-bins/index.html',
    title: `Telehandler Bins - ${siteName}`,
    description:
      'Telehandler bins from Site Machinery NZ: durable construction bins for handling and moving materials on civil and construction projects.',
    keywords: 'telehandler bins NZ, construction bins, material handling bins',
    canonical: `${contact.siteUrl}/products/telehandler-bins`,
  },
  {
    path: '/products/additional-products',
    file: 'products/additional-products/index.html',
    title: `Additional Products - ${siteName}`,
    description:
      'Browse additional Site Machinery NZ products including attachments, bins and equipment options available with DeSite supply orders.',
    keywords:
      'additional products, skidsteer attachments NZ, construction equipment accessories',
    canonical: `${contact.siteUrl}/products/additional-products`,
  },
  {
    path: '/screening-recommendation',
    file: 'screening-recommendation/index.html',
    title: `Screen Mesh Recommendation Guide - ${siteName}`,
    description:
      'Choose the right DeSite screen mesh size for topsoil, compost, mulch, gravel and recycled aggregates. Site Machinery NZ mesh recommendation charts for New Zealand operators.',
    keywords:
      'screen mesh size NZ, topsoil mesh recommendation, gravel screening mesh, DeSite mesh guide, elongated mesh, square mesh',
    canonical: `${contact.siteUrl}/screening-recommendation`,
  },
  {
    path: '/idm/commercials',
    file: 'idm/commercials/index.html',
    title: `Commercials Workspace - ${siteName}`,
    description: 'Internal promotional materials workspace for Site Machinery NZ.',
    keywords: 'Site Machinery commercials',
    canonical: `${contact.siteUrl}/idm/commercials`,
    robots: 'noindex, nofollow',
    includeInSitemap: false,
  },
  {
    path: '/idm/commercials/grizzly',
    file: 'idm/commercials/grizzly/index.html',
    title: `Grizzly Screens Promo Draft - ${siteName}`,
    description: 'Draft promotional material for DeSite static grizzly screens.',
    keywords: 'grizzly screener promo',
    canonical: `${contact.siteUrl}/idm/commercials/grizzly`,
    robots: 'noindex, nofollow',
    includeInSitemap: false,
  },
  {
    path: '/idm/commercials/vibratory',
    file: 'idm/commercials/vibratory/index.html',
    title: `Vibratory Proscreens Promo Draft - ${siteName}`,
    description: 'Draft promotional material for DeSite vibratory Proscreens.',
    keywords: 'vibratory proscreen promo',
    canonical: `${contact.siteUrl}/idm/commercials/vibratory`,
    robots: 'noindex, nofollow',
    includeInSitemap: false,
  },
]

export function getSeo(pathname) {
  const normalized = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname
  return routes.find((r) => r.path === normalized) || routes[0]
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Site Machinery',
  url: contact.siteUrl,
  email: contact.email,
  telephone: contact.phoneTel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '105 Pascoe Street',
    addressLocality: 'Nelson',
    postalCode: '7011',
    addressCountry: 'NZ',
  },
  description:
    'New Zealand supplier of DeSite soil screening machines and earthmoving equipment.',
  image: defaultOgImage,
}

export { defaultOgImage, siteName }
