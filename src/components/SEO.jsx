import { Helmet } from 'react-helmet-async'
import { contact } from '../data/contact'
import { defaultOgImage, getJsonLd, getSeo } from '../data/seo'

export default function SEO({ pathname, jsonLd }) {
  const seo = getSeo(pathname)
  const payload = jsonLd !== undefined ? jsonLd : getJsonLd(pathname)
  const ogImage = seo.ogImage || defaultOgImage

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content="Warwick Marshall" />
      <meta name="creator" content="Warwick Marshall" />
      <meta
        name="robots"
        content={seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      <link rel="canonical" href={seo.canonical} />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="theme-color" content="#efe8dc" />

      <meta name="geo.region" content="NZ-NSN" />
      <meta name="geo.placename" content="Nelson" />
      <meta name="language" content="en-NZ" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Site Machinery NZ" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_NZ" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="contact:phone_number" content={contact.phoneDisplay} />
      <meta name="contact:email" content={contact.email} />

      {payload && (
        <script type="application/ld+json">{JSON.stringify(payload)}</script>
      )}
    </Helmet>
  )
}
