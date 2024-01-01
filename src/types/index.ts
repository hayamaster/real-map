interface Position {
  lat: number
  lng: number
}

export interface CafeInfo {
  id: number
  name: string
  description?: string
  location?: string
  position: Position
}
