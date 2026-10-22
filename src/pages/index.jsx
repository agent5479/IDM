import HomeHero from '../components/HomeHero'
import HtmlContent from '../components/HtmlContent'
import TestimonialsSection from '../components/TestimonialsSection'
import { homeHtml } from '../content/home'
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
import { forFarmersHtml } from '../content/for-farmers'
import { forCivilHtml } from '../content/for-civil'
import { forTopsoilLandscapingHtml } from '../content/for-topsoil-landscaping'
import { forAggregateRoadMetalHtml } from '../content/for-aggregate-and-road-metal'
import { forNelsonNationwideHtml } from '../content/for-nelson-nationwide'
import { productsHubHtml } from '../content/products-hub'
import ScreeningRecommendationPage from './ScreeningRecommendationPage'
import AdCatalogPage from './AdCatalogPage'
import ImageCatalogPage from './ImageCatalogPage'
import MarketingPage from './marketing/MarketingPage'
import ProspectsPage from './office/ProspectsPage'
import CommercialsHubPage from './commercials/CommercialsHubPage'
import GrizzlyCommercialPage from './commercials/GrizzlyCommercialPage'
import VibratoryCommercialPage from './commercials/VibratoryCommercialPage'
import AboutPage from './AboutPage'

function Page({ html, testimonialsPage, testimonialsLimit = 4 }) {
  return (
    <>
      <HtmlContent html={html} />
      {testimonialsPage ? (
        <TestimonialsSection
          page={testimonialsPage}
          limit={testimonialsLimit}
          heading="Operator feedback"
          intro="DeSite operators on machine performance and build — not NZ freight or list pricing."
        />
      ) : null}
    </>
  )
}

export { AboutPage }
export const HomePage = () => (
  <>
    <HomeHero />
    <Page html={homeHtml} />
  </>
)
export const ContactPage = () => <Page html={contactHtml} />
export const PhotosPage = () => <Page html={photosHtml} />
export const VideosPage = () => <Page html={videosHtml} />
export const ProductsHubPage = () => <Page html={productsHubHtml} />
export const Slg108Page = () => <Page html={slg108Html} testimonialsPage="slg-108vfrb" />
export const Slg78Page = () => <Page html={slg78Html} testimonialsPage="slg-78vf" />
export const Slg78FlowPage = () => <Page html={slg78FlowHtml} testimonialsPage="slg-78vf-flow" />
export const Slg68Page = () => <Page html={slg68Html} testimonialsPage="slg-68v" />
export const StaticGrizzlyPage = () => (
  <Page html={staticGrizzlyHtml} testimonialsPage="static-grizzly" />
)
export const TelehandlerBinsPage = () => <Page html={telehandlerBinsHtml} />
export const AdditionalProductsPage = () => <Page html={additionalProductsHtml} />
export const ForFarmersPage = () => <Page html={forFarmersHtml} />
export const ForCivilPage = () => <Page html={forCivilHtml} />
export const ForTopsoilLandscapingPage = () => <Page html={forTopsoilLandscapingHtml} />
export const ForAggregateRoadMetalPage = () => <Page html={forAggregateRoadMetalHtml} />
export const ForNelsonNationwidePage = () => <Page html={forNelsonNationwideHtml} />
export {
  ScreeningRecommendationPage,
  AdCatalogPage,
  ImageCatalogPage,
  CommercialsHubPage,
  GrizzlyCommercialPage,
  VibratoryCommercialPage,
  ProspectsPage,
  MarketingPage,
}
