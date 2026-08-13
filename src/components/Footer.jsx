import { Link } from 'react-router-dom'
import { contact, emailHref, phoneHref } from '../data/contact'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Site Machinery</h3>
          <p className="footer-tagline">Affordable, top quality soil screening machines</p>
          <p>Specialist supplier of smaller scale earthmoving, soils & gravel processing equipment.</p>
        </div>

        <div>
          <h3>Contact</h3>
          <a href={phoneHref}>Phone: {contact.phoneDisplay}</a>
          <a href={emailHref}>Email: {contact.email}</a>
          <p style={{ marginTop: 15 }}>Showroom: 105 Pascoe St, Nelson</p>
          <p>Mail: 105 Pascoe St, Nelson 7011</p>
        </div>

        <div>
          <h3>Products</h3>
          <Link to="/products/slg-108vfrb">Proscreen SLG-108VFRB</Link>
          <Link to="/products/slg-78vf">Proscreen SLG-78VF</Link>
          <Link to="/products/slg-78vf-flow">Proscreen SLG-78VF with Flow Control</Link>
          <Link to="/products/slg-68v">Proscreen SLG-68V</Link>
          <Link to="/products/static-grizzly">SLG-78 Static Grizzly</Link>
          <Link to="/products/telehandler-bins">Telehandler Bins</Link>
          <Link to="/products/additional-products">Additional Products</Link>
        </div>

        <div>
          <h3>Information</h3>
          <Link to="/about">About Us</Link>
          <Link to="/screening-recommendation">Mesh Size Guide</Link>
          <Link to="/photos">Photos</Link>
          <Link to="/videos">Videos</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; SITE MACHINERY 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
