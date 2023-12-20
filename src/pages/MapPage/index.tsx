import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { MapOptions, MarkerInfo, SideBar, AddingRequest } from './components'
import { useEffect, useState } from 'react'
import supabase from '@/apis/supabaseClient'

interface Position {
  lat: number
  lng: number
}

interface Cafe {
  id: number
  name: string
  position: Position
  location?: string
  description?: string
}

const center = {
  lat: 35.658034,
  lng: 139.701636,
}

const MapPage = () => {
  const [isMapLoaded, setIsMapLoaded] = useState<boolean>(false)
  const [focusId, setFocusId] = useState<number>(0)
  const [cafes, setCafes] = useState<Cafe[]>()

  useEffect(() => {
    async function getCafes() {
      const { data, error } = await supabase.from('cafes').select('*')

      if (error) {
        console.warn(error)
      } else {
        setCafes(data)
      }
    }

    getCafes()
  }, [])

  return (
    <>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_KEY}
        onLoad={() => setIsMapLoaded(true)}
      >
        <div className="relative h-full w-full">
          <div className="fixed left-5 top-5 z-10 flex flex-col gap-4">
            <div className="rounded-xl bg-[#9747FF] px-2 py-1.5 md:px-3.5 md:py-2.5">
              <p className="text-lg font-medium text-white md:text-2xl">
                👩🏻‍💻🧑🏻‍💻 パソコンで作業しやすいカフェ
              </p>
            </div>
            <button
              className="btn w-fit border-[#9747FF] bg-[#F8E1FE] px-2 py-1.5 text-lg font-medium text-[#70046C] hover:border-[#9747FF] hover:bg-[#9747FF] hover:text-white md:px-3.5 md:py-2.5 md:text-2xl"
              onClick={() =>
                (
                  document.getElementById('adding-request') as HTMLDialogElement
                ).showModal()
              }
            >
              追加リクエスト
            </button>
          </div>
          {isMapLoaded && cafes && (
            <>
              <Map zoom={16} center={center}>
                {cafes.map((cafe) => (
                  <MarkerInfo
                    markerInfo={cafe}
                    key={cafe.id}
                    focusId={focusId}
                  />
                ))}
              </Map>
              <MapOptions />
              <SideBar markerInformation={cafes} setFocusId={setFocusId} />{' '}
            </>
          )}
        </div>
      </APIProvider>
      <AddingRequest />
    </>
  )
}

export default MapPage
