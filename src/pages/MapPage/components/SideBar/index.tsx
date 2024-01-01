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
    <div className="absolute bottom-0 z-10 flex w-full cursor-pointer flex-row gap-2.5 overflow-scroll px-3 py-3 md:right-0 md:top-0 md:h-full md:w-fit md:flex-col md:py-5">
      {markerInformation.map(
        ({ id, name, location, description, position }) => (
          <div
            key={id}
            onMouseOver={handleFocusInfo}
            onMouseLeave={() => setFocusId(0)}
            onClick={() => handleClickInfo(position)}
            id={String(id)}
            className="group flex min-w-[15rem] max-w-[18rem] flex-col justify-start gap-2 rounded-2xl border border-[rgb(151,71,255)] bg-white px-3 py-2 shadow-xl hover:bg-[rgb(151,71,255)] hover:duration-200 md:px-4 md:py-3"
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
              {description?.replace(/\\n/g, '\n')}
            </p>
          </div>
        ),
      )}
    </div>
  )
}

export default SideBar
