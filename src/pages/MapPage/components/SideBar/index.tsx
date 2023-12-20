import { MouseEvent, Dispatch, SetStateAction } from 'react'
import { useMap } from '@vis.gl/react-google-maps'

interface Position {
  lat: number
  lng: number
}

interface Mark {
  id: number
  name: string
  position: Position
  location?: string
  description?: string
}

interface MarkerInformationProps {
  markerInformation: Mark[]
  setFocusId: Dispatch<SetStateAction<number>>
}

const SideBar = ({ markerInformation, setFocusId }: MarkerInformationProps) => {
  const map = useMap()

  const handleFocusInfo = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setFocusId(Number(e.currentTarget.id))
  }

  const handleClickInfo = (position: Position) => {
    map?.panTo(position)
  }

  return (
    <div className="absolute left-1/2 top-2/3 z-10 flex h-[33%] min-w-[15rem] -translate-x-1/2 cursor-pointer flex-col gap-2.5 overflow-scroll py-3 md:left-auto md:right-3 md:top-0 md:h-full md:translate-x-0 md:py-5">
      {markerInformation.map(
        ({ id, name, location, description, position }) => (
          <div
            key={id}
            onMouseOver={handleFocusInfo}
            onMouseLeave={() => setFocusId(0)}
            onClick={() => handleClickInfo(position)}
            id={String(id)}
            className="group flex max-w-[18rem] flex-col justify-start gap-2 rounded-2xl border border-[rgb(151,71,255)] bg-white px-3 py-2 shadow-xl hover:bg-[rgb(151,71,255)] hover:duration-200 md:px-4 md:py-3"
          >
            <h1 className="text-base text-[#9747FF] group-hover:text-white md:text-2xl">
              {name}
            </h1>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 md:text-lg">
              {location && location.length > 20
                ? `${location?.substring(0, 20)}...`
                : location}
            </p>
            <p className="whitespace-pre-wrap text-sm text-gray-700 group-hover:text-gray-100 md:text-lg">
              {description}
            </p>
          </div>
        ),
      )}
    </div>
  )
}

export default SideBar
