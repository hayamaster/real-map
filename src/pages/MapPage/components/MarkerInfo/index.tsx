import { useState, useEffect } from 'react'
import {
  Marker,
  InfoWindow,
  useMarkerRef,
  useMap,
} from '@vis.gl/react-google-maps'
import { MarkerIcon } from '@/assets/Icons'
import { renderToStaticMarkup } from 'react-dom/server'
import './style.css'

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
  focusId: number
}

const MarkerInfo = ({ markerInfo, focusId }: MarkerInfoProps) => {
  const map = useMap()
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

  useEffect(() => {
    setInfowindowShown(focusId === markerInfo.id)
  }, [focusId, markerInfo])

  const handleClickMarker = () => {
    if (!map) return

    map.setZoom(18)
    map.setCenter(markerInfo.position)
  }

  return (
    <div>
      <Marker
        position={markerInfo.position}
        ref={markerRef}
        onMouseOver={toggleInfoWindow}
        onMouseOut={toggleInfoWindow}
        icon={customIcon}
        // animation={google.maps.Animation.DROP}
        onClick={handleClickMarker}
      />
      {infowindowShown && (
        <InfoWindow anchor={marker} disableAutoPan={true}>
          <div className="bg-[#e2a0f3] px-1 py-1">
            <div className="rounded-md bg-white px-2 py-1 md:px-3 md:py-2">
              <p className="text-base font-medium text-[#70046C] md:text-xl">
                {markerInfo.name}
              </p>
            </div>
          </div>
        </InfoWindow>
      )}
    </div>
  )
}

export default MarkerInfo
