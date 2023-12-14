import { useState } from 'react'
import {
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from '@vis.gl/react-google-maps'

interface Position {
  lat: number
  lng: number
}

interface Mark {
  id: number
  name: string
  position: Position
}

interface MarkerInfoProps {
  markerInfo: Mark
}

const MarkerInfo = ({ markerInfo }: MarkerInfoProps) => {
  const [markerRef, marker] = useAdvancedMarkerRef()
  const [infowindowShown, setInfowindowShown] = useState(false)
  const toggleInfoWindow = () =>
    setInfowindowShown((previousState) => !previousState)

  const closeInfoWindow = () => setInfowindowShown(false)

  return (
    <AdvancedMarker
      position={markerInfo.position}
      ref={markerRef}
      onClick={toggleInfoWindow}
    >
      <Pin background={'#FBBC04'} glyphColor={'black'} borderColor={'#000'} />
      {infowindowShown && (
        <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
          {markerInfo.name}
        </InfoWindow>
      )}
    </AdvancedMarker>
  )
}

export default MarkerInfo
