import { Helmet } from 'react-helmet-async'
import { contact } from '../data/contact'
import { getJsonLd, getSeo, resolveOgImage } from '../data/seo'

export default function SEO({ pathname, jsonLd }) {
  const seo = getSeo(pathname)
  const payload = jsonLd !== undefined ? jsonLd : getJsonLd(pathname)
  const og = resolveOgImage(seo)

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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon-48.png" type="image/png" sizes="48x48" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#efe8dc" />

      <meta name="geo.region" content="NZ-NSN" />
      <meta name="geo.placename" content="Nelson" />
      <meta name="language" content="en-NZ" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Site Machinery NZ" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={og.url} />
      <meta property="og:image:width" content={String(og.width)} />
      <meta property="og:image:height" content={String(og.height)} />
      <meta property="og:locale" content="en_NZ" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={og.url} />

      <meta name="contact:phone_number" content={contact.phoneDisplay} />
      <meta name="contact:email" content={contact.email} />

      {payload && (
        <script type="application/ld+json">{JSON.stringify(payload)}</script>
      )}
    </Helmet>
  )
}
