import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { contact, emailHref, phoneHref } from '../data/contact'

export default function Nav({ showTagline = false }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onDocClick = (event) => {
      const nav = document.querySelector('.sticky-nav')
      if (!nav) return
      if (!nav.contains(event.target) && open) setOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [open])

  const productsTo = location.pathname === '/' ? '/#equipment' : '/#equipment'

  const onProductsClick = (event) => {
    if (location.pathname === '/') {
      event.preventDefault()
      const el = document.getElementById('equipment')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <nav className="sticky-nav">
      <div className="nav-content">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            SITE MACHINERY
          </Link>
          {showTagline && (
            <span className="nav-tagline">Affordable, top quality soil, gravel and aggregate screening machines</span>
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
          <Link to={productsTo} onClick={onProductsClick}>
            Products
          </Link>
          <Link to="/about">About Us</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
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
