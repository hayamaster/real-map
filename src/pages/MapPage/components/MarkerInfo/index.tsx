import { useState } from 'react'
import { Marker, InfoWindow, useMarkerRef } from '@vis.gl/react-google-maps'
import { MarkerIcon } from '@/assets/Icons'
import { renderToStaticMarkup } from 'react-dom/server'

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
  const [markerRef, marker] = useMarkerRef()
  const [infowindowShown, setInfowindowShown] = useState(false)
  const toggleInfoWindow = () =>
    setInfowindowShown((previousState) => !previousState)

  const customIcon = {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
      renderToStaticMarkup(<MarkerIcon />),
    )}`,
    scaledSize: new window.google.maps.Size(50, 50),
  }

  return (
    <>
      <Marker
        position={markerInfo.position}
        ref={markerRef}
        onMouseOver={toggleInfoWindow}
        onMouseOut={toggleInfoWindow}
        icon={customIcon}
      />
      {infowindowShown && (
        <InfoWindow anchor={marker}>{markerInfo.name}</InfoWindow>
      )}
    </>
  )
}

export default MarkerInfo
