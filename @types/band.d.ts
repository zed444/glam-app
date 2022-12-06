export interface IBand {
  id: mongoose.Types.ObjectId
  name: string
  formedAt?: string
  members?: IArtist[]
  exMembers?: IArtist[]
  image?: any
  soloArtist?: boolean
  info?: string
}
