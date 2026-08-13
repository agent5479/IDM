import HtmlContent from '../components/HtmlContent'
import { homeHtml } from '../content/home'
import { aboutHtml } from '../content/about'
import { contactHtml } from '../content/contact'
import { photosHtml } from '../content/photos'
import { videosHtml } from '../content/videos'
import { slg108Html } from '../content/slg-108vfrb'
import { slg78Html } from '../content/slg-78vf'
import { slg78FlowHtml } from '../content/slg-78vf-flow'
import { slg68Html } from '../content/slg-68v'
import { staticGrizzlyHtml } from '../content/static-grizzly'
import { telehandlerBinsHtml } from '../content/telehandler-bins'
import { additionalProductsHtml } from '../content/additional-products'

function Page({ html }) {
  return <HtmlContent html={html} />
}

export const HomePage = () => <Page html={homeHtml} />
export const AboutPage = () => <Page html={aboutHtml} />
export const ContactPage = () => <Page html={contactHtml} />
export const PhotosPage = () => <Page html={photosHtml} />
export const VideosPage = () => <Page html={videosHtml} />
export const Slg108Page = () => <Page html={slg108Html} />
export const Slg78Page = () => <Page html={slg78Html} />
export const Slg78FlowPage = () => <Page html={slg78FlowHtml} />
export const Slg68Page = () => <Page html={slg68Html} />
export const StaticGrizzlyPage = () => <Page html={staticGrizzlyHtml} />
export const TelehandlerBinsPage = () => <Page html={telehandlerBinsHtml} />
export const AdditionalProductsPage = () => <Page html={additionalProductsHtml} />
