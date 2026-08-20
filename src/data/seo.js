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
    schemaType: 'home',
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
    schemaType: 'about',
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
    schemaType: 'contact',
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
    schemaType: 'webPage',
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
    schemaType: 'webPage',
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
    schemaType: 'product',
    product: {
      name: 'DeSite SLG-108VFRB',
      image: `${contact.siteUrl}/images/SLG108VFRB.jpg`,
      sku: 'SLG-108VFRB',
    },
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
    schemaType: 'product',
    product: {
      name: 'DeSite SLG-78VF',
      image: `${contact.siteUrl}/images/Proscreen_SLG78VFII_home.jpg`,
      sku: 'SLG-78VF',
    },
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
    schemaType: 'product',
    product: {
      name: 'DeSite SLG-78VF with Flow Control',
      image: `${contact.siteUrl}/images/Proscreen_SLG78VFII_home.jpg`,
      sku: 'SLG-78VF-FLOW',
    },
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
    schemaType: 'product',
    product: {
      name: 'DeSite SLG-68V',
      image: `${contact.siteUrl}/images/Proscreen_68.jpg`,
      sku: 'SLG-68V',
    },
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
    schemaType: 'product',
    product: {
      name: 'DeSite Static Grizzly SLG-78 & SLG-108',
      image: `${contact.siteUrl}/images/grizzly2.jpg`,
      sku: 'STATIC-GRIZZLY',
    },
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
    schemaType: 'product',
    product: {
      name: 'Telehandler Bins',
      image: `${contact.siteUrl}/images/Telehandler-bin_site_machinery.jpg`,
      sku: 'TELEHANDLER-BINS',
    },
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
    schemaType: 'webPage',
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
    schemaType: 'meshGuide',
  },
  {
    path: '/for/farmers',
    file: 'for/farmers/index.html',
    title: `Screen Farm River Gravel for Cow Races | ${siteName}`,
    description:
      'Screen river gravel on the farm. Make filling for cow races from rounded riverbed stone. 100 mm mesh, then a 50 mm or 3 inch filling screen. From Nelson, nationwide.',
    keywords:
      'farm gravel screener NZ, cow race gravel, farm river screening, 100mm mesh, filling material screener, DeSite grizzly farm',
    canonical: `${contact.siteUrl}/for/farmers`,
    ogImage: `${contact.siteUrl}/images/farmers-hero.jpg`,
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'service',
    service: {
      name: 'Farm river gravel and cow race screening',
      serviceType: 'Farm gravel screening',
    },
  },
  {
    path: '/for/civil-contractors',
    file: 'for/civil-contractors/index.html',
    title: `Screen Soil and Gravel On-Site | ${siteName}`,
    description:
      'Screen soil and gravel on the job for subdivisions, building works and retaining walls. 100 mm mesh plus a 50 mm or 3 inch filling screen. Site Machinery NZ.',
    keywords:
      'civil contractor screener NZ, subdivision landscaping screener, skid steer soil screening, retaining wall fill, DeSite Proscreen',
    canonical: `${contact.siteUrl}/for/civil-contractors`,
    ogImage: `${contact.siteUrl}/images/108-WROKING.webp`,
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'service',
    service: {
      name: 'On-site soil and gravel screening for civil contractors',
      serviceType: 'Civil on-site screening',
    },
  },
  {
    path: '/for/topsoil-landscaping',
    file: 'for/topsoil-landscaping/index.html',
    title: `On-Site Topsoil Screening for Landscapers NZ | ${siteName}`,
    description:
      'Grade topsoil, compost and yard soil on-site in New Zealand. DeSite Proscreens for landscapers and material yards — mesh matched to the finish you sell. Site Machinery NZ.',
    keywords:
      'topsoil screener NZ, landscaping soil screener, on-site topsoil screening, compost screener New Zealand, Site Machinery',
    canonical: `${contact.siteUrl}/for/topsoil-landscaping`,
    ogImage: `${contact.siteUrl}/images/Proscreen_SLG78VFII_home.jpg`,
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'service',
    service: {
      name: 'On-site topsoil screening for landscapers',
      serviceType: 'Topsoil and landscaping screening',
    },
  },
  {
    path: '/for/aggregate-and-road-metal',
    file: 'for/aggregate-and-road-metal/index.html',
    title: `Screen Gravel, Road Metal & Drainage Stone NZ | ${siteName}`,
    description:
      'On-site aggregate screening in New Zealand — road metal, pea gravel, septic stone and drainage rock. DeSite Proscreens and Static Grizzlies from Site Machinery NZ.',
    keywords:
      'aggregate screener NZ, road metal screening, gravel screener New Zealand, drainage stone screener, septic rock mesh',
    canonical: `${contact.siteUrl}/for/aggregate-and-road-metal`,
    ogImage: `${contact.siteUrl}/images/grizzly3.jpg`,
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'service',
    service: {
      name: 'Aggregate, road metal and drainage stone screening',
      serviceType: 'Aggregate screening',
    },
  },
  {
    path: '/for/nelson-nationwide',
    file: 'for/nelson-nationwide/index.html',
    title: `Nelson Showroom & Nationwide Screener Supply | ${siteName}`,
    description:
      'View DeSite screeners at 105 Pascoe Street, Nelson. Site Machinery NZ specifies mesh and machine for nationwide New Zealand supply.',
    keywords:
      'screener showroom Nelson, Site Machinery Nelson, buy soil screener NZ, DeSite New Zealand supplier, Pascoe Street Nelson',
    canonical: `${contact.siteUrl}/for/nelson-nationwide`,
    ogImage: `${contact.siteUrl}/images/SLG108VFRB.jpg`,
    changefreq: 'monthly',
    priority: '0.8',
    schemaType: 'service',
    service: {
      name: 'Nelson showroom viewing and nationwide screener supply',
      serviceType: 'Equipment supply and showroom',
    },
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

const localBusinessId = `${contact.siteUrl}/#organization`

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': localBusinessId,
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
    'cow race gravel screening',
    'on-site civil fill screening',
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'DeSite SLG-78VF',
        url: `${contact.siteUrl}/products/slg-78vf`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'DeSite SLG-108VFRB',
        url: `${contact.siteUrl}/products/slg-108vfrb`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'DeSite Static Grizzly',
        url: `${contact.siteUrl}/products/static-grizzly`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Farm river gravel and cow race screening supply',
        url: `${contact.siteUrl}/for/farmers`,
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Civil on-site soil and gravel screening supply',
        url: `${contact.siteUrl}/for/civil-contractors`,
      },
    },
  ],
}

function providerRef() {
  return { '@id': localBusinessId }
}

function productJsonLd(route) {
  const p = route.product
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: route.description,
    image: p.image,
    sku: p.sku,
    brand: {
      '@type': 'Brand',
      name: 'DeSite',
    },
    url: route.canonical,
    offers: {
      '@type': 'Offer',
      url: route.canonical,
      priceCurrency: 'NZD',
      availability: 'https://schema.org/InStock',
      seller: providerRef(),
      areaServed: {
        '@type': 'Country',
        name: 'New Zealand',
      },
      description: 'Contact Site Machinery NZ for current pricing. Ex Nelson; freight arranged with purchaser.',
    },
  }
}

function serviceJsonLd(route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: route.service.name,
    serviceType: route.service.serviceType,
    description: route.description,
    url: route.canonical,
    provider: providerRef(),
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand',
    },
  }
}

function meshGuideJsonLd(route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: route.canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: contact.siteUrl,
    },
    about: {
      '@type': 'Thing',
      name: 'DeSite screen mesh size selection',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Screen mesh recommendation charts',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Square and elongated base charts' },
        { '@type': 'ListItem', position: 2, name: 'Topsoil and triple mix' },
        { '@type': 'ListItem', position: 3, name: 'Farm filling and cow races' },
        { '@type': 'ListItem', position: 4, name: 'Aggregates and road metal' },
      ],
    },
    provider: providerRef(),
  }
}

function webPageJsonLd(route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: route.title,
    description: route.description,
    url: route.canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: contact.siteUrl,
    },
    about: providerRef(),
  }
}

/**
 * Return JSON-LD for a pathname (object or null). Used by Helmet and prerender.
 */
export function getJsonLd(pathname) {
  const route = getSeo(pathname)
  if (route.robots && String(route.robots).includes('noindex')) return null

  switch (route.schemaType) {
    case 'home':
      return organizationJsonLd
    case 'product':
      return productJsonLd(route)
    case 'service':
      return serviceJsonLd(route)
    case 'meshGuide':
      return meshGuideJsonLd(route)
    case 'about':
    case 'contact':
    case 'webPage':
      return webPageJsonLd(route)
    default:
      return null
  }
}

export { defaultOgImage, siteName, localBusinessId }
