import { Link } from 'react-router-dom'
import {
  adCatalogNav,
  adCatalogOffers,
  adCatalogVideo,
  adPriceNote,
} from '../data/adCatalog'
import { contact, emailHref, phoneHref } from '../data/contact'

function PriceRows({ offer }) {
  return (
    <>
      <div className="price-packages">
        <div className="price-package-row">
          <div className="price-package-name">Standard price</div>
          <div className="price-package-amount">{offer.standard} + GST</div>
        </div>
        <div className="price-package-row ad-catalog-offer">
          <div className="price-package-name">Pre-order price · 10% off</div>
          <div className="price-package-amount">{offer.preorder} + GST</div>
        </div>
      </div>
      <p className="price-note">{adPriceNote}</p>
    </>
  )
}

export default function AdCatalogPage() {
  return (
    <section className="page-content image-catalog ad-catalog">
      <div className="image-catalog-hero">
        <h1>Advertising Catalog</h1>
        <p>Got a loader? Put your downtime to work.</p>
        <p>
          A container of Site Machinery screeners is landing in New Zealand.
          Pre-order now and save 10%.
        </p>
        <p className="image-catalog-hero-links">
          <Link to="/image-catalog">Image catalog</Link>
          {' · '}
          <Link to="/videos">Videos</Link>
          {' · '}
          <Link to="/products">Products</Link>
          {' · '}
          <Link to="/contact">Contact</Link>
        </p>
      </div>

      <nav className="image-catalog-nav" aria-label="Advertisements">
        {adCatalogNav.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <section id="film" className="image-catalog-section ad-catalog-section">
        <div className="image-catalog-section-head">
          <h2>The film</h2>
        </div>
        <div className="ad-catalog-video">
          <video
            controls
            playsInline
            preload="metadata"
            poster={adCatalogVideo.poster}
            width={adCatalogVideo.width}
            height={adCatalogVideo.height}
            title={adCatalogVideo.title}
          >
            <source src={adCatalogVideo.src} type="video/mp4" />
          </video>
        </div>
      </section>

      {adCatalogOffers.map((offer) => (
        <section
          key={offer.id}
          id={offer.id}
          className="image-catalog-section ad-catalog-section"
        >
          {offer.kicker ? (
            <p className="ad-catalog-kicker">
              <span aria-hidden="true">{offer.kickerEmoji} </span>
              {offer.kicker}
            </p>
          ) : null}
          <div className="image-catalog-section-head">
            <h2>
              <span aria-hidden="true">{offer.emoji} </span>
              {offer.title}
            </h2>
            <Link to={offer.href} className="image-catalog-product-link">
              {offer.productLabel}
            </Link>
          </div>
          <p>{offer.body}</p>
          <PriceRows offer={offer} />
        </section>
      ))}

      <div className="product-description image-catalog-cta" id="pre-order">
        <h2>Ready to gain a foothold in the soil screening industry?</h2>
        <p>
          Use loader downtime to stay productive, turn available material into a
          saleable product, and open up another potential revenue stream.
        </p>
        <p>
          The included riser box raises the screen so you can process more
          material before moving the screened pile.
        </p>
        <p>
          <strong>Pre-order now and save 10%.</strong>
        </p>
        <p>
          <a href="https://sitemachinery.nz/">sitemachinery.nz</a>
        </p>
        <div className="cta-buttons">
          <a href={phoneHref} className="cta-primary">
            Call {contact.phoneDisplay}
          </a>
          <a href={emailHref} className="cta-secondary">
            Email {contact.email}
          </a>
          <Link to="/contact" className="cta-secondary">
            Contact
          </Link>
        </div>
      </div>
    </section>
  )
}
