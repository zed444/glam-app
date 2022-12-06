import dbConnect from '../../../utils/dbConnect'
import { NextApiRequest, NextApiResponse } from 'next'
import Album from '../../../models/Album'

const AlbumsRequests = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  const { method, query } = req

  var page = parseInt(query.page as string) || 1

  switch (method) {
    case 'GET':
      try {
        const options = {
          page: page,
          limit: 2,
          collation: {
            locale: 'en'
          },
          sort: {}
        }

        const albums = await Album.paginate({}, options)

        res.status(200).json(albums)
      } catch (error) {
        console.error
        res.status(400).json({
          success: false
        })
      }
      break
    case 'POST':
      try {
        const stringifyData = JSON.stringify(req.body)
        const data = JSON.parse(stringifyData)
        const album = await Album.create(data)

        res.status(201).json(album)
      } catch (error) {
        console.error
        console.error(error)
        res.status(400).json({
          success: false,
          data: 'Error'
        })
      }
      break
    default:
      res.status(400).json({
        success: false
      })
      break
  }
}

export default AlbumsRequests
