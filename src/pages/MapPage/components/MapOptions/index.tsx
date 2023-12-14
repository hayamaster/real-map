import { useEffect } from 'react'
import { useMap } from '@vis.gl/react-google-maps'

const mapOption = {
  minZoom: 4,
  maxZoom: 20,
  clickableIcons: false,
  // styles: [
  //   {
  //     featureType: 'poi',
  //     elementType: 'labels',
  //     stylers: [{ visibility: 'off' }],
  //   },
  // ],
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
