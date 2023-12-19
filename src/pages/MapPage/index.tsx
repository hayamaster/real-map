import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { MapOptions, MarkerInfo, SideBar } from './components'
import { useState } from 'react'

const center = {
  lat: 35.7143934,
  lng: 139.7926849,
}

const markerInformation = [
  {
    id: 1,
    name: '카페1',
    position: { lat: 35.7143934, lng: 139.7926849 },
  },
  { id: 2, name: '카페 2', position: { lat: 35.715111, lng: 139.7926849 } },
  {
    id: 3,
    name: 'abno',
    position: { lat: 35.6953013, lng: 139.7835233 },
    location: '東京都中央区日本橋馬喰町２丁目２−１, DDD Hotel, 2F',
    description:
      '洗練された雰囲気でゆったりできる素敵なカフェです。\n電源&wifiあり, 席数多め。',
  },
]

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [focusId, setFocusId] = useState<number>(0)

  return (
    <APIProvider
      apiKey={import.meta.env.VITE_GOOGLE_KEY}
      onLoad={() => setIsMapLoaded(true)}
    >
      <div className="fixed left-5 top-5 z-10">
        <div className="rounded-xl bg-[#9747FF] px-2 py-1.5 md:px-3.5 md:py-2.5">
          <p className="text-lg font-medium text-white md:text-2xl">
            👩🏻‍💻🧑🏻‍💻 パソコンで作業しやすいカフェ
          </p>
        </div>
      </div>
      {isMapLoaded && (
        <>
          <Map zoom={16} center={center}>
            {markerInformation.map((markerInfo) => (
              <MarkerInfo
                markerInfo={markerInfo}
                key={markerInfo.id}
                focusId={focusId}
              />
            ))}
          </Map>
          <MapOptions />
        </>
      )}
      <SideBar markerInformation={markerInformation} setFocusId={setFocusId} />
    </APIProvider>
  )
}

export default MapPage
