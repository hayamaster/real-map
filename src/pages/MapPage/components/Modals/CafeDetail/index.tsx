import { CopyIcon } from '@/assets/Icons'
import { CafeInfo } from '@/types'

interface CafeDetailProps {
  cafeDetail: CafeInfo
}

const CafeDetail = ({ cafeDetail }: CafeDetailProps) => {
  const { name, location, description } = cafeDetail

  return (
    <>
      <input type="checkbox" id="cafe_detail" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex flex-col gap-6 border-2 border-[#9747FF] bg-[#F8F8F8] md:gap-8">
          <label
            htmlFor="cafe_detail"
            className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:border-[#9747FF] hover:bg-[#F8E1FE] hover:text-[#70046C] md:right-3 md:top-3"
          >
            ✕
          </label>
          <div className="flex flex-col gap-1 md:gap-2">
            <h1 className="text-xl font-semibold text-[#9747FF] md:text-3xl">
              {name}
            </h1>
            <div className="group flex cursor-pointer items-center gap-2 text-base text-gray-400 hover:text-gray-500 md:text-xl">
              <p>{location}</p>
              <CopyIcon className="fill-gray-400 group-hover:fill-gray-500" />
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="text-lg text-[#70046C] md:text-2xl">店舗情報</h2>
            <p className="text-base md:text-xl">{description}</p>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="cafe_detail">
          Close
        </label>
      </div>
    </>
  )
}

export default CafeDetail
