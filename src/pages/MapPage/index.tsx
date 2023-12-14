import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { MapOptions, MarkerInfo } from './components'

const center = {
  lat: 35.7143934,
  lng: 139.7926849,
}

const MapPage = () => {
  const markers = [
    {
      id: 1,
      name: '카페1',
      position: { lat: 35.7143934, lng: 139.7926849 },
    },
    { id: 2, name: '카페 2', position: { lat: 35.715111, lng: 139.7926849 } },
  ]

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_KEY}>
      <Map zoom={16} center={center} mapId="0812">
        {markers.map((marker) => (
          <MarkerInfo markerInfo={marker} key={marker.id} />
        ))}
      </Map>
      <MapOptions />
    </APIProvider>
  )
}

export default MapPage
