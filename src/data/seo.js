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
      'DeSite SLG-78VF portable vibratory screener with multi-slope deck. Screen topsoil, gravel and aggregate — supplied in New Zealand by Site Machinery.',
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
    title: `DeSite Static Grizzly 78 & 108 | ${siteName}`,
    description:
      'DeSite SLG-78 and SLG-108 Static Grizzlies for oversize separation of soil, gravel and aggregate. No-power screeners supplied in New Zealand by Site Machinery NZ.',
    keywords:
      'static grizzly screener NZ, SLG-78 static grizzly, SLG-108 static grizzly, DeSite grizzly, rock screener, oversize screening',
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
    title: `DeSite Mini Screeners, Trailers & Bins to Order | ${siteName}`,
    description:
      'Order DeSite mini screeners, grizzly bars, skid-steer attachments, Xtreme Duty dump trailers and construction bins for the next New Zealand shipment from Site Machinery NZ.',
    keywords:
      'DeSite mini screener NZ, SLG-56, dump trailer NZ, skid steer attachments, construction bins, DeSite orderable range',
    canonical: `${contact.siteUrl}/products/additional-products`,
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    path: '/screening-recommendation',
    file: 'screening-recommendation/index.html',
    title: `Screen Mesh Size Guide NZ | ${siteName}`,
    description:
      'Choose the right DeSite screen mesh for topsoil, gravel, compost, mulch, farm filling and aggregate. Mesh recommendation charts for New Zealand operators.',
    keywords:
      'screen mesh size NZ, topsoil mesh guide, gravel screening mesh, aggregate mesh size, cow race gravel mesh, DeSite mesh recommendation',
    canonical: `${contact.siteUrl}/screening-recommendation`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/for/farmers',
    file: 'for/farmers/index.html',
    title: `Farm Gravel Screeners & Cow Race Fill NZ | ${siteName}`,
    description:
      'Screen farm river gravel on site. 100 mm mesh first, then 50 mm or 3 inch (~75 mm) filling mesh for cow races. DeSite grizzlies from Site Machinery NZ.',
    keywords:
      'farm gravel screener NZ, cow race gravel, farm river screening, 100mm mesh, filling material screener, DeSite grizzly farm',
    canonical: `${contact.siteUrl}/for/farmers`,
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/for/civil-contractors',
    file: 'for/civil-contractors/index.html',
    title: `Civil & Landscaping Screeners NZ | ${siteName}`,
    description:
      'On-site screening for civil contractors, subdivisions and retaining-wall crews. 100 mm mesh plus 50 mm or 3 inch filling screen. Site Machinery NZ.',
    keywords:
      'civil contractor screener NZ, subdivision landscaping screener, skid steer soil screening, retaining wall fill, DeSite Proscreen',
    canonical: `${contact.siteUrl}/for/civil-contractors`,
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
  {
    path: '/idm/prospects',
    file: 'idm/prospects/index.html',
    title: `Prospects Workspace - ${siteName}`,
    description: 'Internal prospect list workspace for Site Machinery NZ.',
    keywords: 'Site Machinery prospects',
    canonical: `${contact.siteUrl}/idm/prospects`,
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
