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
    "description": "The one with the smile",
    "image": "https://raw.githubusercontent.com/koolamusic/koolamusic.github.io/d3bfe7eaa6660db0fd73c9f12ad6c92083ed2558/images/headshots/no.png",
    "external_url": "https://github.com/koolamusic/koolamusic.github.io/blob/d3bfe7eaa6660db0fd73c9f12ad6c92083ed2558/images/headshots/no.png"
  })
}
