import { contact } from './contact.js'

const siteName = 'Site Machinery NZ'
const defaultOgImage = `${contact.siteUrl}/images/SLG108VFRB.jpg`

export const routes = [
  {
    path: '/',
    file: 'index.html',
    title: 'Soil, Gravel & Aggregate Screeners NZ | Site Machinery',
    description:
      'DeSite soil, gravel and aggregate screening machines for New Zealand. Portable vibratory ProScreens from Site Machinery NZ — Nelson showroom, nationwide supply.',
    keywords:
      'soil screener NZ, gravel screener NZ, aggregate screener, topsoil screener NZ, DeSite NZ, vibratory screener, screening equipment New Zealand, Site Machinery',
    canonical: `${contact.siteUrl}/`,
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    file: 'about/index.html',
    title: `About Us | DeSite Screener Supplier - ${siteName}`,
    description:
      'Site Machinery NZ supplies DeSite soil, gravel and aggregate screening equipment. Nelson-based specialist with nationwide New Zealand supply and support.',
    keywords:
      'about Site Machinery, DeSite supplier NZ, soil screener company NZ, screening equipment Nelson, gravel screener New Zealand',
    canonical: `${contact.siteUrl}/about`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    file: 'contact/index.html',
    title: `Contact Us | Screener Pricing NZ - ${siteName}`,
    description:
      'Contact Site Machinery NZ for DeSite soil, gravel and aggregate screener pricing and advice. Showroom at 105 Pascoe Street, Nelson — supply across New Zealand.',
    keywords:
      'contact Site Machinery, screener pricing NZ, buy soil screener NZ, Nelson showroom, DeSite New Zealand',
    canonical: `${contact.siteUrl}/contact`,
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/photos',
    file: 'photos/index.html',
    title: `Screener Photos | DeSite Equipment Gallery - ${siteName}`,
    description:
      'Photo galleries of DeSite soil, gravel and aggregate screeners in New Zealand — SLG-108VFRB, SLG-78VF, SLG-68V and telehandler bins on real job sites.',
    keywords:
      'soil screener photos NZ, DeSite gallery, SLG-108VFRB images, SLG-78VF photos, gravel screener photos',
    canonical: `${contact.siteUrl}/photos`,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/videos',
    file: 'videos/index.html',
    title: `Screener Videos | DeSite Demo Footage - ${siteName}`,
    description:
      'Watch DeSite soil, gravel and aggregate screeners in action. Site Machinery NZ videos of SLG-108VFRB, SLG-78VF and SLG-68V demonstrations.',
    keywords:
      'soil screener video NZ, DeSite screener demo, SLG-108VFRB video, SLG-78VF video, gravel screener video',
    canonical: `${contact.siteUrl}/videos`,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/products/slg-108vfrb',
    file: 'products/slg-108vfrb/index.html',
    title: `DeSite SLG-108VFRB Heavy Duty Screener | ${siteName}`,
    description:
      'DeSite SLG-108VFRB heavy-duty vibratory screener for soil, gravel and aggregate. High-capacity ProScreen supplied across New Zealand by Site Machinery NZ.',
    keywords:
      'SLG-108VFRB, heavy duty soil screener NZ, DeSite 108, gravel screener, aggregate screener, vibratory ProScreen',
    canonical: `${contact.siteUrl}/products/slg-108vfrb`,
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/products/slg-78vf',
    file: 'products/slg-78vf/index.html',
    title: `DeSite SLG-78VF Portable Screener | ${siteName}`,
    description:
      'DeSite SLG-78VF portable vibratory screener with multi-slope deck. Ideal for topsoil, gravel and aggregate screening — supplied in New Zealand by Site Machinery.',
    keywords:
      'SLG-78VF, portable soil screener NZ, topsoil screener, gravel screener NZ, DeSite ProScreen',
    canonical: `${contact.siteUrl}/products/slg-78vf`,
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/products/slg-78vf-flow',
    file: 'products/slg-78vf-flow/index.html',
    title: `DeSite SLG-78VF Flow Control Screener | ${siteName}`,
    description:
      'DeSite SLG-78VF with Flow Control for consistent feed when screening soil, gravel and aggregate. Available in New Zealand from Site Machinery NZ.',
    keywords:
      'SLG-78VF flow control, DeSite flow control screener, soil screener NZ, gravel screening NZ',
    canonical: `${contact.siteUrl}/products/slg-78vf-flow`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/products/slg-68v',
    file: 'products/slg-68v/index.html',
    title: `DeSite SLG-68V Compact Screener | ${siteName}`,
    description:
      'DeSite SLG-68V compact portable screener for smaller contractors and landscapers. Screen soil, gravel and aggregate — supplied nationwide by Site Machinery NZ.',
    keywords:
      'SLG-68V, compact soil screener NZ, small gravel screener, DeSite 68V, portable screener New Zealand',
    canonical: `${contact.siteUrl}/products/slg-68v`,
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/products/static-grizzly',
    file: 'products/static-grizzly/index.html',
    title: `DeSite SLG-78 Static Grizzly Screener | ${siteName}`,
    description:
      'DeSite SLG-78 Static Grizzly for tough pre-screening and oversize separation of soil, rock and aggregate on New Zealand construction and earthmoving sites.',
    keywords:
      'static grizzly screener NZ, SLG-78 static grizzly, DeSite grizzly, rock screener, oversize screening',
    canonical: `${contact.siteUrl}/products/static-grizzly`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/products/telehandler-bins',
    file: 'products/telehandler-bins/index.html',
    title: `Telehandler Bins NZ | Construction Material Bins - ${siteName}`,
    description:
      'Durable telehandler bins from Site Machinery NZ for handling soil, aggregate and construction materials on civil and earthmoving projects.',
    keywords:
      'telehandler bins NZ, construction bins, material handling bins, earthmoving bins New Zealand',
    canonical: `${contact.siteUrl}/products/telehandler-bins`,
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/products/additional-products',
    file: 'products/additional-products/index.html',
    title: `Additional Products & Attachments | ${siteName}`,
    description:
      'Additional Site Machinery NZ products and attachments available with DeSite screener supply — bins, accessories and options for New Zealand operators.',
    keywords:
      'DeSite attachments NZ, skidsteer attachments, screener accessories, construction equipment New Zealand',
    canonical: `${contact.siteUrl}/products/additional-products`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/screening-recommendation',
    file: 'screening-recommendation/index.html',
    title: `Screen Mesh Size Guide NZ | ${siteName}`,
    description:
      'Choose the right DeSite screen mesh for topsoil, gravel, compost, mulch and recycled aggregates. Mesh recommendation charts for New Zealand operators.',
    keywords:
      'screen mesh size NZ, topsoil mesh guide, gravel screening mesh, aggregate mesh size, DeSite mesh recommendation',
    canonical: `${contact.siteUrl}/screening-recommendation`,
    changefreq: 'monthly',
    priority: '0.8',
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
  '@type': 'LocalBusiness',
  name: 'Site Machinery NZ',
  alternateName: 'Site Machinery Ltd',
  url: contact.siteUrl,
  email: contact.email,
  telephone: contact.phoneTel,
  image: defaultOgImage,
  logo: `${contact.siteUrl}/favicon.ico`,
  description:
    'New Zealand supplier of DeSite soil, gravel and aggregate screening machines and related earthmoving equipment.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '105 Pascoe Street',
    addressLocality: 'Nelson',
    postalCode: '7011',
    addressCountry: 'NZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -41.2706,
    longitude: 173.284,
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
  knowsAbout: [
    'soil screener',
    'gravel screener',
    'aggregate screener',
    'topsoil screener',
    'DeSite ProScreen',
    'vibratory screening equipment',
  ],
}

export { defaultOgImage, siteName }
