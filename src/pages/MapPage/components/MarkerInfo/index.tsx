import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react'
import {
  Marker,
  InfoWindow,
  useMarkerRef,
  useMap,
} from '@vis.gl/react-google-maps'
import { MarkerIcon } from '@/assets/Icons'
import { renderToStaticMarkup } from 'react-dom/server'
import { CafeInfo } from '@/types'
import './style.css'

interface MarkerInfoProps {
  cafeInfo: CafeInfo
  focusId: number
  setSelectedCafe: Dispatch<SetStateAction<CafeInfo | undefined>>
}

const MarkerInfo = ({
  cafeInfo,
  focusId,
  setSelectedCafe,
}: MarkerInfoProps) => {
  const map = useMap()
  const [markerRef, marker] = useMarkerRef()
  const modalRef = useRef<HTMLLabelElement>(null)
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
    setInfowindowShown(focusId === cafeInfo.id)
  }, [focusId, cafeInfo])

  const handleClickMarker = async () => {
    if (!map) return

    map.setZoom(18)
    map.setCenter(cafeInfo.position)
    setSelectedCafe(cafeInfo)
    modalRef.current && modalRef.current.click()
  }

  return (
    <div>
      <Marker
        position={cafeInfo.position}
        ref={markerRef}
        onMouseOver={toggleInfoWindow}
        onMouseOut={toggleInfoWindow}
        icon={customIcon}
        onClick={handleClickMarker}
      />
      {infowindowShown && (
        <InfoWindow anchor={marker} disableAutoPan={true}>
          <div className="bg-[#e2a0f3] px-1 py-1">
            <div className="rounded-md bg-white px-2 py-1 md:px-3 md:py-2">
              <p className="text-base font-medium text-[#70046C] md:text-xl">
                {cafeInfo.name}
              </p>
            </div>
          </div>
        </InfoWindow>
      )}
      <label htmlFor="cafe_detail" className="btn" ref={modalRef} />
    </div>
  )
}

export default MarkerInfo
