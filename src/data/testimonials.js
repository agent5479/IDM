/**
 * Curated DeSite operator feedback for Site Machinery NZ.
 * US dealer names, shipping, financing and region-only details stripped.
 * Source: desiteproducts.com customer comments (manufacturer site).
 */

/** @typedef {{ id: string, name: string, role?: string, model?: string, quote: string, pages: string[] }} Testimonial */

/** @type {Testimonial[]} */
export const testimonials = [
  {
    id: 'derek-taylor',
    name: 'Derek Taylor',
    model: '78 ProScreen',
    quote:
      'I have the DeSite 78 and can do 30 to 35 yards an hour with my 3 yard loader. I have done hundreds and hundreds of yards of topsoil in the last 3 years with zero problems with it. Great working screener for small operators in my opinion.',
    pages: ['home', 'slg-78vf', 'slg-78vf-flow'],
  },
  {
    id: 'mark-kowalczyk',
    name: 'Mark Kowalczyk',
    model: '108 ProScreen',
    quote:
      'Using my 108 almost everyday. Making 1 inch minus soil fill blended with aged compost and mushroom soil. Screen works awesome and the material it makes sells itself.',
    pages: ['home', 'slg-108vfrb'],
  },
  {
    id: 'donnie-malcomb',
    name: 'Donnie Malcomb',
    model: 'DeSite screener',
    quote:
      "I've had one for 8 years. Zero maintenance and has never let me down. Has been a great investment.",
    pages: ['home', 'slg-68v', 'slg-78vf', 'slg-108vfrb', 'static-grizzly'],
  },
  {
    id: 'rickie-lacroix',
    name: 'Rickie Lacroix',
    model: 'DeSite screener',
    quote:
      'It paid for itself in 3 weeks of selling soil. Then I ran it for another 4 years… Then sold it for 75% of what I paid for it.',
    pages: ['home'],
  },
  {
    id: 'cameron-henderson',
    name: 'Cameron Henderson',
    model: 'SLG-78',
    quote:
      'Absolutely love the SLG 78! Absolutely changed the business! Only wish is that I had gotten the SLG 108!!',
    pages: ['home', 'slg-78vf', 'static-grizzly'],
  },
  {
    id: 'bill-stone',
    name: 'Bill Stone',
    model: 'DeSite screener',
    quote:
      "The screener is a “no joke” piece of equipment. Too bad folks can't see one in person to see the quality before they decide to get one. The pictures and videos don't show how well built it is.",
    pages: ['home', 'static-grizzly'],
  },
  {
    id: 'mike-b',
    name: 'Mike B',
    model: 'DeSite screener',
    quote:
      'I have to say your screening machine worked better than I could have ever imagined. Its ease of operation was simply fantastic. The product it produced was actually better than we could have purchased from local suppliers.',
    pages: ['home', 'slg-68v', 'slg-78vf', 'slg-108vfrb'],
  },
  {
    id: 'jennifer-bond-riser',
    name: 'Jennifer Bond',
    model: '78 ProScreen',
    quote: "I'm so glad I ordered the riser with my 78, I wouldn't own one without it.",
    pages: ['slg-78vf', 'slg-78vf-flow'],
  },
  {
    id: 'jennifer-bond-build',
    name: 'Jennifer Bond',
    model: 'DeSite screener',
    quote:
      "BEST screener in the industry… Everyone who sees it is in awe at the build quality, the welds look like rolls of dimes, they're gorgeous.",
    pages: ['home'],
  },
  {
    id: 'larry-pierce',
    name: 'Larry Pierce',
    model: 'DeSite screener',
    quote:
      'Unloaded it, screened 6 yards — worked great. Much faster and cleaner product than my other name-brand screener.',
    pages: ['slg-78vf', 'slg-108vfrb'],
  },
  {
    id: 'george-p',
    name: 'George P',
    role: 'Old Mill Landscape Supply',
    model: '108 ProScreen',
    quote:
      'We have been screening topsoil, rock and mulch products for 20 years and the “blue screener” is hands down the best, most efficient, cost effective, low maintenance way to process our materials — very durable, simple and safe. The compact and easily portable unit allows us to screen in any area of our yard.',
    pages: ['slg-108vfrb'],
  },
  {
    id: 'chris-hawes',
    name: 'Chris Hawes',
    model: 'DeSite screener',
    quote:
      "Love my machine — it's very portable. I screen manure, compost and topsoil. I can put it in my dump trailer and move it to different jobs. I run the machine all by myself. Easy to set up and cheap to run.",
    pages: ['slg-68v', 'slg-78vf'],
  },
]

export function testimonialsFor(page) {
  return testimonials.filter((t) => t.pages.includes(page))
}

export function renderTestimonialCard(t) {
  const role = t.role ? ` · ${t.role}` : ''
  const model = t.model ? `<span class="testimonial-model">${t.model}</span>` : ''
  return `<figure class="testimonial-card">
  <blockquote class="testimonial-quote">“${t.quote}”</blockquote>
  <figcaption class="testimonial-meta">
    <span class="testimonial-name">${t.name}${role}</span>
    ${model}
  </figcaption>
</figure>`
}

export function renderTestimonialsSection({
  page,
  heading = 'What operators say about DeSite',
  intro = 'Feedback from DeSite operators worldwide — about the machines, not local freight or pricing.',
  limit = null,
} = {}) {
  let items = testimonialsFor(page)
  if (limit != null) items = items.slice(0, limit)
  if (!items.length) return ''
  return `<section class="testimonials-section" id="testimonials">
  <div class="container">
    <h2 class="section-title">${heading}</h2>
    <p class="section-subtitle">${intro}</p>
    <div class="testimonials-grid">
${items.map(renderTestimonialCard).join('\n')}
    </div>
  </div>
</section>`
}
