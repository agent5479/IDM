import { renderTestimonialsSection } from '../data/testimonials'
import HtmlContent from './HtmlContent'

/**
 * Renders curated DeSite operator feedback for a given page key.
 */
export default function TestimonialsSection({ page, heading, intro, limit }) {
  const html = renderTestimonialsSection({ page, heading, intro, limit })
  if (!html) return null
  return <HtmlContent html={html} />
}
