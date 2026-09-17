import { routes, isIndexableRoute } from '../src/data/seo.js'
import {
  getIndexNowHost,
  getIndexNowKeyLocation,
  indexNowEndpoint,
  indexNowKey,
} from '../src/data/indexnow.js'

const args = new Set(process.argv.slice(2))
const dryRun = args.has('--dry-run')
const waitLive = args.has('--wait-live')

const host = getIndexNowHost()
const keyLocation = getIndexNowKeyLocation()
const urlList = routes.filter(isIndexableRoute).map((route) => route.canonical)

const payload = {
  host,
  key: indexNowKey,
  keyLocation,
  urlList,
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function fetchLiveKey() {
  const res = await fetch(keyLocation, {
    cache: 'no-store',
    headers: { Accept: 'text/plain' },
  })
  const text = await res.text()
  return { ok: res.ok, status: res.status, text: text.trim() }
}

async function waitForLiveKey() {
  const attempts = waitLive ? 18 : 1
  const delayMs = 10_000
  let last = { ok: false, status: 0, text: '' }

  for (let i = 0; i < attempts; i++) {
    try {
      last = await fetchLiveKey()
      if (last.ok && last.text === indexNowKey) {
        console.log(`IndexNow key file live at ${keyLocation}`)
        return
      }
      console.log(
        `Key file check ${i + 1}/${attempts}: HTTP ${last.status}, body ${JSON.stringify(last.text.slice(0, 80))}`,
      )
    } catch (err) {
      last = { ok: false, status: 0, text: String(err) }
      console.log(`Key file check ${i + 1}/${attempts}: ${err.message}`)
    }
    if (i < attempts - 1) await sleep(delayMs)
  }

  throw new Error(
    `IndexNow key file is not live at ${keyLocation} (last HTTP ${last.status}). Deploy to GitHub Pages first, then re-run.`,
  )
}

async function submit() {
  console.log(`Submitting ${urlList.length} URLs for ${host} to ${indexNowEndpoint}`)
  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  const res = await fetch(indexNowEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'User-Agent': 'SiteMachineryNZ-IndexNow/1.0',
    },
    body: JSON.stringify(payload),
  })
  const body = await res.text()
  console.log(`IndexNow response: HTTP ${res.status}${body ? `\n${body}` : ''}`)

  // 200 = accepted; 202 = received, key validation pending on first use
  if (res.status !== 200 && res.status !== 202) {
    process.exitCode = 1
  }
}

if (!dryRun) {
  await waitForLiveKey()
}
await submit()
