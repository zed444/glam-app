import { Musician } from './artist'

export type Song = {
  title: string
  duration: string
}

type AlbumMember = {
  member: Musician
  instrument: string[]
}

export type CoverImage = {
  path: string
  name: string
}

interface IAlbum {
  title: string
  artist: string | any
  year: string
  format?: 'LP' | 'EP'
  genres: string[]
  cover: CoverImage
  songs?: Song[]
  recordLabel?: string
  credits?: {
    lineUp?: AlbumMember[]
    addtionalMusicians?: AlbumMember[]
    producer?: Musician[]
    mixAndMaster?: Musician[]
  }
  info?: string
}
