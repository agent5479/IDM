import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import {
  AboutPage,
  AdditionalProductsPage,
  ContactPage,
  HomePage,
  PhotosPage,
  Slg108Page,
  Slg68Page,
  Slg78FlowPage,
  Slg78Page,
  StaticGrizzlyPage,
  TelehandlerBinsPage,
  VideosPage,
} from './pages'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/products/slg-108vfrb" element={<Slg108Page />} />
          <Route path="/products/slg-78vf" element={<Slg78Page />} />
          <Route path="/products/slg-78vf-flow" element={<Slg78FlowPage />} />
          <Route path="/products/slg-68v" element={<Slg68Page />} />
          <Route path="/products/static-grizzly" element={<StaticGrizzlyPage />} />
          <Route path="/products/telehandler-bins" element={<TelehandlerBinsPage />} />
          <Route path="/products/additional-products" element={<AdditionalProductsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
