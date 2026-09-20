import { contact } from './contact.js'

/**
 * Lightweight nav/footer for static prerender shells (crawlers / no-JS).
 * React replaces #root on hydrate for interactive users.
 */
export function buildStaticChrome(bodyHtml, { showTagline = false } = {}) {
  const tagline = showTagline
    ? `<span class="nav-tagline">Affordable soil, gravel and aggregate screening equipment</span>`
    : ''

  return `<nav class="sticky-nav">
  <div class="nav-content">
    <div class="nav-brand">
      <a href="/" class="nav-logo" aria-label="Site Machinery NZ home">SITE MACHINERY</a>
      ${tagline}
    </div>
    <div class="nav-menu" id="navMenu">
      <a href="/">Home</a>
      <a href="/products">Products</a>
      <a href="/for/farmers">Farmers</a>
      <a href="/for/civil-contractors">Civil</a>
      <a href="/for/topsoil-landscaping">Topsoil</a>
      <a href="/for/aggregate-and-road-metal">Aggregate</a>
      <a href="/for/nelson-nationwide">Nelson</a>
      <a href="/screening-recommendation">Mesh guide</a>
      <a href="/about">About</a>
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
      <h3>Site Machinery NZ</h3>
      <p class="footer-tagline">DeSite soil, gravel and aggregate screening equipment</p>
      <p>New Zealand specialist supplier of portable Proscreens and Static Grizzlies — Nelson showroom, nationwide supply.</p>
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
      <a href="/products">All screening equipment</a>
      <a href="/products/slg-108vfrb">Proscreen SLG-108VFRB</a>
      <a href="/products/slg-78vf">Proscreen SLG-78VF</a>
      <a href="/products/slg-78vf-flow">Proscreen SLG-78VF with Flow Control</a>
      <a href="/products/slg-68v">Proscreen SLG-68V</a>
      <a href="/products/static-grizzly">Static Grizzly (78 &amp; 108)</a>
      <a href="/products/telehandler-bins">Telehandler Bins</a>
      <a href="/products/additional-products">Additional Products</a>
    </div>
    <div>
      <h3>Applications</h3>
      <a href="/for/farmers">Farm gravel screener</a>
      <a href="/for/civil-contractors">Civil contractors</a>
      <a href="/for/topsoil-landscaping">Topsoil &amp; Landscaping</a>
      <a href="/for/aggregate-and-road-metal">Aggregate &amp; Road Metal</a>
      <a href="/for/nelson-nationwide">Nelson Showroom</a>
      <a href="/screening-recommendation">Mesh Size Guide</a>
      <a href="/about">About Us</a>
      <a href="/photos">Photos</a>
      <a href="/image-catalog">Image Catalog</a>
      <a href="/videos">Videos</a>
      <a href="/contact">Contact Us</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; Site Machinery NZ 2026. All rights reserved.</p>
  </div>
</footer>`
}
