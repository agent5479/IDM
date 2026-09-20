import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contact, emailHref, phoneHref } from '../data/contact'

export default function Nav({ showTagline = false }) {
  const [open, setOpen] = useState(false)
  const [appsOpen, setAppsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setAppsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDocClick = (event) => {
      const nav = document.querySelector('.sticky-nav')
      if (!nav) return
      if (!nav.contains(event.target) && open) setOpen(false)
      if (!nav.contains(event.target)) setAppsOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  return (
    <nav className="sticky-nav">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/" className="nav-logo" aria-label="Site Machinery NZ home">
            SITE MACHINERY
          </Link>
          {showTagline && (
            <span className="nav-tagline">
              Affordable soil, gravel and aggregate screening equipment
            </span>
          )}
        </div>
        <button
          className={`mobile-menu-toggle${open ? ' active' : ''}`}
          aria-label="Toggle menu"
          type="button"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-menu${open ? ' active' : ''}`} id="navMenu">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <div className={`nav-dropdown${appsOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="nav-dropdown-toggle"
              aria-expanded={appsOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation()
                setAppsOpen((v) => !v)
              }}
            >
              Applications
            </button>
            <div className="nav-dropdown-menu" role="menu">
              <Link to="/for/farmers" role="menuitem">
                Farmers
              </Link>
              <Link to="/for/civil-contractors" role="menuitem">
                Civil contractors
              </Link>
              <Link to="/for/topsoil-landscaping" role="menuitem">
                Topsoil &amp; landscaping
              </Link>
              <Link to="/for/aggregate-and-road-metal" role="menuitem">
                Aggregate &amp; road metal
              </Link>
              <Link to="/for/nelson-nationwide" role="menuitem">
                Nelson showroom
              </Link>
            </div>
          </div>
          <Link to="/screening-recommendation">Mesh guide</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-contact">
          <a href={phoneHref} className="nav-phone">
            📞 {contact.phoneDisplay}
          </a>
          <a href={emailHref} className="nav-email">
            ✉ Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
