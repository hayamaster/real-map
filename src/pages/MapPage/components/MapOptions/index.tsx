import { useEffect } from 'react'
import { useMap } from '@vis.gl/react-google-maps'

const mapOption = {
  minZoom: 4,
  maxZoom: 20,
  clickableIcons: false,
  mapTypeControl: false,
  streetViewControl: false,

  styles: [
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [{ color: 'none' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.icon',
      stylers: [{ color: '#d59563' }],
    },
  ],
}

const MapOptions = () => {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    map.setOptions(mapOption)
  }, [map])

  return <></>
}

export default MapOptions
