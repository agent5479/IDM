import { contact } from './contact.js'

/**
 * Lightweight nav/footer for static prerender shells (crawlers / no-JS).
 * React replaces #root on hydrate for interactive users.
 */
export function buildStaticChrome(bodyHtml, { showTagline = false } = {}) {
  const tagline = showTagline
    ? `<span class="nav-tagline">Affordable, top quality soil, gravel and aggregate screening machines</span>`
    : ''

  return `<nav class="sticky-nav">
  <div class="nav-content">
    <div class="nav-brand">
      <a href="/" class="nav-logo">SITE MACHINERY</a>
      ${tagline}
    </div>
    <div class="nav-menu" id="navMenu">
      <a href="/">Home</a>
      <a href="/#equipment">Products</a>
      <a href="/about">About Us</a>
      <a href="/photos">Photos</a>
      <a href="/videos">Videos</a>
      <a href="/contact">Contact</a>
    </div>
    <div class="nav-contact">
      <a href="tel:${contact.phoneTel}" class="nav-phone">📞 ${contact.phoneDisplay}</a>
      <a href="mailto:${contact.email}" class="nav-email">✉ Contact</a>
    </div>
  </div>
</nav>
${bodyHtml}
<footer class="footer">
  <div class="footer-content">
    <div>
      <h3>Site Machinery</h3>
      <p class="footer-tagline">Affordable, top quality soil, gravel and aggregate screening machines</p>
      <p>Specialist supplier of smaller scale earthmoving, soils &amp; gravel processing equipment.</p>
    </div>
    <div>
      <h3>Contact</h3>
      <a href="tel:${contact.phoneTel}">Phone: ${contact.phoneDisplay}</a>
      <a href="mailto:${contact.email}">Email: ${contact.email}</a>
      <p style="margin-top:15px">Showroom: 105 Pascoe St, Nelson</p>
      <p>Mail: 105 Pascoe St, Nelson 7011</p>
    </div>
    <div>
      <h3>Products</h3>
      <a href="/products/slg-108vfrb">Proscreen SLG-108VFRB</a>
      <a href="/products/slg-78vf">Proscreen SLG-78VF</a>
      <a href="/products/slg-78vf-flow">Proscreen SLG-78VF with Flow Control</a>
      <a href="/products/slg-68v">Proscreen SLG-68V</a>
      <a href="/products/static-grizzly">Static Grizzly (78 &amp; 108)</a>
      <a href="/products/telehandler-bins">Telehandler Bins</a>
      <a href="/products/additional-products">Additional Products</a>
    </div>
    <div>
      <h3>Information</h3>
      <a href="/about">About Us</a>
      <a href="/screening-recommendation">Mesh Size Guide</a>
      <a href="/for/farmers">For Farmers</a>
      <a href="/for/civil-contractors">For Civil Contractors</a>
      <a href="/for/topsoil-landscaping">Topsoil &amp; Landscaping</a>
      <a href="/for/aggregate-and-road-metal">Aggregate &amp; Road Metal</a>
      <a href="/for/nelson-nationwide">Nelson Showroom</a>
      <a href="/photos">Photos</a>
      <a href="/videos">Videos</a>
      <a href="/contact">Contact Us</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; SITE MACHINERY 2026. All rights reserved.</p>
  </div>
</footer>`
}
