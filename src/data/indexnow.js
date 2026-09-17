import { contact } from './contact.js'

/** Public IndexNow key (also hosted as /{key}.txt). Safe to commit — verification is by file presence. */
export const indexNowKey = '3481b2c71f3849bd9d53fd46b812c1c4'

export const indexNowEndpoint = 'https://api.indexnow.org/indexnow'

export function getIndexNowHost() {
  return new URL(contact.siteUrl).host
}

export function getIndexNowKeyLocation() {
  return `${contact.siteUrl}/${indexNowKey}.txt`
}

export function getIndexNowKeyFileBody() {
  return `${indexNowKey}\n`
}
