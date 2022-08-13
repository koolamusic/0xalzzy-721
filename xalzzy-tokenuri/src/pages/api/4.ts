import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  description: string
  image: string
  external_url: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    "name": "Alexare #{tokenId}",
    "description": "The one behind a computer screen",
    "image": "https://raw.githubusercontent.com/koolamusic/0xalzzy-721/c43c834ef7d2e43aeef54f1ccb6d0cfbc7cb4486/xalzzy-tokenuri/public/Tobi-Amusan.jpg",
    "external_url": "https://raw.githubusercontent.com/koolamusic/0xalzzy-721/c43c834ef7d2e43aeef54f1ccb6d0cfbc7cb4486/xalzzy-tokenuri/public/Tobi-Amusan.jpg"
  })
}
