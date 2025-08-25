import type { VercelRequest, VercelResponse } from '@vercel/node'
import { put, list, get } from '@vercel/blob'

const BUCKET_PREFIX = 'orwen-slides-'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const locale = (req.query.locale as string) || 'tr'
  const key = `${BUCKET_PREFIX}${locale}.json`

  if (req.method === 'GET') {
    try {
      const file = await get(key)
      if (!file || !file?.downloadUrl) return res.status(200).json({ slides: [] })
      const resp = await fetch(file.downloadUrl)
      const json = await resp.json()
      return res.status(200).json(json)
    } catch (e) {
      return res.status(200).json({ slides: [] })
    }
  }

  if (req.method === 'POST') {
    try {
      const body = req.body
      if (!body || typeof body !== 'object' || !Array.isArray(body.slides)) {
        return res.status(400).json({ error: 'Invalid payload' })
      }
      const uploaded = await put(key, JSON.stringify({ slides: body.slides }), { contentType: 'application/json', addRandomSuffix: false, access: 'public' })
      return res.status(200).json({ ok: true, url: uploaded.url })
    } catch (e: any) {
      return res.status(500).json({ error: e?.message || 'Upload failed' })
    }
  }

  res.setHeader('Allow', 'GET, POST')
  return res.status(405).end('Method Not Allowed')
}