import { Link } from 'react-router-dom'
import { contact, emailHref, phoneHref } from '../../data/contact'

export default function GrizzlyCommercialPage() {
  return (
    <section className="page-content commercials-page">
      <div className="commercials-banner">
        <span className="commercials-badge">Promo draft</span>
        <p className="commercials-kicker">
          <Link to="/idm/commercials">← Commercials hub</Link>
        </p>
        <h1>Grizzly Screens — Wide Mesh &amp; Durability</h1>
        <p>
          Working draft for the most sought SLG-78 Static Grizzly setup: wider square mesh
          (2″ / 3″ / 4″) with rugged, low-maintenance durability for aggregate work.
        </p>
      </div>

      <div className="promo-hero-media">
        <img src="/images/grizzly2.jpg" alt="DeSite SLG-78 Static Grizzly screener" />
        <img src="/images/grizzly3.jpg" alt="Grizzly screening dirt, stone and sticks" />
      </div>

      <div className="product-description promo-block">
        <h2>The hook</h2>
        <p>
          Contractors looking for a tough grizzly do not want fine topsoil screens — they want
          <strong> wider openings</strong> that shrug off rock, recycled concrete and oversize
          material, paired with a <strong>structure built to last</strong> and no electrics to
          babysit on site.
        </p>
        <p className="promo-callout">
          Lead message: <em>Wider mesh. Built tough. No power required.</em>
        </p>
      </div>

      <div className="promo-grid">
        <div className="product-description promo-block">
          <h2>Why wider mesh wins</h2>
          <ul>
            <li>2″ × 2″, 3″ × 3″ and 4″ × 4″ square grizzly options</li>
            <li>Ideal for pre-screening and oversize separation</li>
            <li>Quick-change mesh so one machine covers multiple jobs</li>
            <li>Double lock crimp weave for strength and stability</li>
          </ul>
          <p>
            Point buyers to the{' '}
            <Link to="/screening-recommendation#aggregates">mesh recommendation guide</Link> for
            base rock, crushed concrete and decorative stone charts that use these openings.
          </p>
        </div>

        <div className="product-description promo-block">
          <h2>Durability story</h2>
          <ul>
            <li>Rugged grizzly design for aggregate materials</li>
            <li>Static operation — no electrical power required</li>
            <li>Spring suspension helps prevent clogging vs traditional bars</li>
            <li>Tilting deck for precise material control</li>
            <li>3-year structural warranty</li>
          </ul>
        </div>
      </div>

      <div className="promo-feature-row">
        <figure>
          <img src="/images/TILTING-SCREEN-DECK-78STATIC_2.webp" alt="Tilting screen deck" />
          <figcaption>Tilting screen deck</figcaption>
        </figure>
        <figure>
          <img src="/images/SUSPENSION-78STATIC.webp" alt="Spring suspension system" />
          <figcaption>Spring suspension system</figcaption>
        </figure>
      </div>

      <div className="product-description promo-block">
        <h2>Applications to emphasise</h2>
        <div className="promo-apps">
          <div>
            <h3>Aggregate</h3>
            <p>Road gravel, landscape stone, decorative stone, erosion control rock</p>
          </div>
          <div>
            <h3>Recycled</h3>
            <p>Ground asphalt, crushed concrete, wood mulch</p>
          </div>
          <div>
            <h3>Equipment fit</h3>
            <p>Skid steers, bucket tractors, mid-size excavators, compact loaders</p>
          </div>
        </div>
      </div>

      <div className="product-description promo-block promo-notes">
        <h2>Draft notes</h2>
        <ul>
          <li>Do not publish USD IDM list prices — keep “Contact for pricing”.</li>
          <li>Lead with 100 mm-class / 4″ wide mesh for “most sought” durability jobs.</li>
          <li>
            Soft CTA to product page and contact; hard sell only after mesh/setup conversation.
          </li>
        </ul>
      </div>

      <div className="cta-buttons" style={{ marginTop: 40 }}>
        <Link to="/products/static-grizzly" className="cta-primary">
          View product page
        </Link>
        <Link to="/screening-recommendation" className="cta-secondary">
          Mesh size guide
        </Link>
        <a href={phoneHref} className="cta-secondary">
          Call {contact.phoneDisplay}
        </a>
        <a href={emailHref} className="cta-secondary">
          Email us
        </a>
      </div>
    </section>
  )
}
