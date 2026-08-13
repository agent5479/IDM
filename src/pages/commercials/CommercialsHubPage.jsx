import { Link } from 'react-router-dom'

const promos = [
  {
    slug: 'grizzly',
    title: 'Grizzly Screens',
    status: 'Director pick ready',
    blurb: 'Wide-mesh + durability — 3 phrasing options per blurb.',
    to: '/idm/commercials/grizzly',
    active: true,
  },
  {
    slug: 'vibratory',
    title: 'Vibratory Proscreens',
    status: 'Director pick ready',
    blurb: 'On-site screening story for 68 / 78 / 108 — pick phrasing per section.',
    to: '/idm/commercials/vibratory',
    active: true,
  },
  {
    slug: 'placeholder-bins',
    title: 'Telehandler Bins',
    status: 'Coming soon',
    blurb: 'Placeholder for future debris-bin promotional drafts.',
    to: null,
    active: false,
  },
]

export default function CommercialsHubPage() {
  return (
    <section className="page-content commercials-page commercials-compact">
      <div className="commercials-banner commercials-banner-compact">
        <span className="commercials-badge">Internal workspace</span>
        <h1>IDM / Commercials</h1>
        <p className="commercials-sub">
          Unlisted drafts for director review. Open a promo, click the phrasing you like — the other
          two hide. Compact layout for screenshots.
        </p>
      </div>

      <div className="commercials-grid commercials-grid-compact">
        {promos.map((promo) => (
          <article key={promo.slug} className={`commercials-card${promo.active ? ' is-active' : ''}`}>
            <div className="commercials-card-status">{promo.status}</div>
            <h2>{promo.title}</h2>
            <p>{promo.blurb}</p>
            {promo.active && promo.to ? (
              <Link to={promo.to} className="equipment-cta">
                Open draft
              </Link>
            ) : (
              <span className="commercials-disabled">Not started</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
