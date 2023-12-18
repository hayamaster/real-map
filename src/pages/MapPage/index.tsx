import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { MapOptions, MarkerInfo } from './components'
import { useState } from 'react'

const center = {
  lat: 35.7143934,
  lng: 139.7926849,
}

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const markers = [
    {
      id: 1,
      name: '카페1',
      position: { lat: 35.7143934, lng: 139.7926849 },
    },
    { id: 2, name: '카페 2', position: { lat: 35.715111, lng: 139.7926849 } },
  ]

  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_KEY}
      onLoad={() => {
        setIsMapLoaded(true)
        console.log('?')
      }}
    >
      {isMapLoaded && (
        <>
          <Map zoom={16} center={center}>
            {markers &&
              markers.map((marker) => (
                <MarkerInfo markerInfo={marker} key={marker.id} />
              ))}
          </Map>
          <MapOptions />
        </>
      )}
    </APIProvider>
  )
}

export default MapPage
