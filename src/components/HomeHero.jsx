import { useEffect, useRef, useState } from 'react'

/** Public DeSite Products hero clip — same footage as desiteproducts.com. */
const HERO_VIMEO_ID = '1217443504'

let vimeoApiPromise

function loadVimeoPlayerApi() {
  if (window.Vimeo?.Player) return Promise.resolve(window.Vimeo.Player)
  if (vimeoApiPromise) return vimeoApiPromise

  vimeoApiPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-vimeo-player-api]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Vimeo.Player), { once: true })
      existing.addEventListener('error', reject, { once: true })
      return
    }
    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    script.dataset.vimeoPlayerApi = 'true'
    script.onload = () => resolve(window.Vimeo.Player)
    script.onerror = reject
    document.head.appendChild(script)
  })

  return vimeoApiPromise
}

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function HomeHero() {
  const iframeRef = useRef(null)
  const playerRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [reduceMotion] = useState(prefersReducedMotion)

  useEffect(() => {
    if (reduceMotion) return undefined

    const iframe = iframeRef.current
    const hero = iframe?.closest('.hero')
    if (!iframe || !hero) return undefined

    let cancelled = false
    let observer

    loadVimeoPlayerApi()
      .then((Player) => {
        if (cancelled) return
        const player = new Player(iframe)
        playerRef.current = player
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) player.play().catch(() => {})
            else player.pause().catch(() => {})
          },
          { threshold: 0.2 },
        )
        observer.observe(hero)
      })
      .catch(() => {})

    return () => {
      cancelled = true
      observer?.disconnect()
    }
  }, [reduceMotion])

  const onCtaClick = (event) => {
    event.preventDefault()
    document.getElementById('equipment')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onToggleSound = async () => {
    try {
      const Player = await loadVimeoPlayerApi()
      const iframe = iframeRef.current
      if (!iframe) return
      if (!playerRef.current) playerRef.current = new Player(iframe)
      const player = playerRef.current
      const isMuted = await player.getMuted()
      if (isMuted) {
        await player.setVolume(1)
        await player.setMuted(false)
        setMuted(false)
      } else {
        await player.setMuted(true)
        setMuted(true)
      }
    } catch {
      /* Autoplay policies or a blocked player script — keep the still. */
    }
  }

  return (
    <section className="hero hero-has-video">
      <div className="hero-media" aria-hidden="true">
        {!reduceMotion && (
          <iframe
            ref={iframeRef}
            className="hero-video"
            src={`https://player.vimeo.com/video/${HERO_VIMEO_ID}?autoplay=1&muted=1&loop=1&background=1&autopause=0`}
            title="DeSite screener in use"
            allow="autoplay; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
      </div>
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-badge">
          Exclusive specialist supplier of DeSite small and medium scale soil, gravel and
          earthmoving/processing equipment
        </div>
        <h1>Screen and Grade Topsoil, Gravel and Aggregate On-Site</h1>
        <p className="hero-subtitle">
          Portable screening machines for earthmoving, civil, farming and landscaping — from Nelson,
          nationwide
        </p>
        <p className="hero-note">
          Also used to reduce buy-in costs, skip unnecessary tip fees, and create saleable product
          from material already on site.
        </p>
        <p className="hero-location">
          📍 Order directly from Site Machinery — your New Zealand supplier
        </p>
        <a href="#equipment" className="hero-cta" onClick={onCtaClick}>
          View Our Equipment Range
        </a>
      </div>

      {!reduceMotion && (
        <button
          type="button"
          className="hero-sound"
          onClick={onToggleSound}
          aria-pressed={!muted}
        >
          {muted ? 'UNMUTE' : 'MUTE'}
        </button>
      )}

      <div className="scroll-indicator" aria-hidden="true">
        ↓
      </div>
    </section>
  )
}
