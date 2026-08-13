import { Link } from 'react-router-dom'

const promos = [
  {
    slug: 'grizzly',
    title: 'Grizzly Screens',
    status: 'In progress',
    blurb:
      'Wide-mesh durability story for the SLG-78 Static Grizzly — 2″ / 3″ / 4″ setups and aggregate applications.',
    to: '/idm/commercials/grizzly',
    active: true,
  },
  {
    slug: 'placeholder-vibratory',
    title: 'Vibratory Proscreens',
    status: 'Coming soon',
    blurb: 'Placeholder for future vibratory screener promotional drafts.',
    to: null,
    active: false,
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
    <section className="page-content commercials-page">
      <div className="commercials-banner">
        <span className="commercials-badge">Internal workspace</span>
        <h1>IDM / Commercials</h1>
        <p>
          Draft promotional material for Site Machinery campaigns. These pages are unlisted
          (<code>noindex</code>) and not linked from the main navigation.
        </p>
      </div>

      <div className="commercials-grid">
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
