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
    "description": "The one with the smirk",
    "image": "https://raw.githubusercontent.com/koolamusic/koolamusic.github.io/master/images/headshots/_smurfy-andrew.png",
    "external_url": "https://github.com/koolamusic/koolamusic.github.io/blob/master/images/headshots/_smurfy-andrew.png"
   })
}
