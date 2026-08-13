# Deployment Guide

## Overview

The live site is a Vite + React app. GitHub Actions builds `dist/` and deploys it to GitHub Pages at the domain root.

## Requirements

- Node.js 22+
- npm
- GitHub Pages source set to **GitHub Actions**

## Deploy (automatic)

```bash
git add .
git commit -m "Your message"
git push origin main
```

The workflow [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) will:

1. Install dependencies (`npm ci`)
2. Build (`npm run build`) — Vite + SEO meta prerender
3. Upload and deploy the `dist/` artifact

## Deploy (manual)

In the GitHub repo: **Actions → Deploy to GitHub Pages → Run workflow**.

## Local verify before push

```bash
npm run build
npm run preview
```

Confirm:

- CSS/images load at root paths (`/assets/...`, `/images/...`)
- Favicon at `/favicon.ico`
- `/sitemap.xml` and `/robots.txt` present
- Phone displays as `+64 3 970 7602`
- Meta tags present in `dist/index.html` and route folders (e.g. `dist/about/index.html`)

## Custom domain

Keep `sitemachinery.nz` pointed at GitHub Pages. Vite `base` is `/` so assets resolve at the domain root.

## Notes

- `site/` is legacy static HTML and is **not** what Pages deploys anymore.
- Do not re-enable workflows that sync files into `site/` for publishing.
