import { CheckIcon, CopyIcon, ShareIcon } from '@/assets/Icons'
import { CafeInfo } from '@/types'
import { useState } from 'react'
// import { logEvent } from 'firebase/analytics'

interface CafeDetailProps {
  cafeDetail: CafeInfo
}

const CafeDetail = ({ cafeDetail }: CafeDetailProps) => {
  const path = window.location.href

  const { name, location, description } = cafeDetail
  const [isCopiedAddress, setIsCopiedAddress] = useState<boolean>(false)
  const [toastAnimation, setToastAnimation] = useState<string>('')
  const [copyData, setCopyData] = useState<string>('')

  const copy = async (data: string) => {
    await navigator.clipboard.writeText(data)
    setIsCopiedAddress(true)
    setToastAnimation('animate-fadeIn')

    setTimeout(() => {
      setToastAnimation('animate-fadeOut')
      setTimeout(() => setIsCopiedAddress(false), 500)
    }, 2000)
  }

  const handleCopyAddress = () => {
    if (!location || isCopiedAddress) return
    setCopyData('住所')
    copy(location)
  }

  const handleCopyURL = () => {
    if (isCopiedAddress) return
    setCopyData('リンク')
    copy(path)
  }

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'リアルマップ',
        url: path,
      })
    } else {
      handleCopyURL()
    }
  }

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
            <div
              onClick={handleCopyAddress}
              className="group flex cursor-pointer items-center gap-2 text-base text-gray-400 hover:text-gray-500 md:text-xl"
            >
              <p>{location}</p>
              <CopyIcon className="h-3 w-3 fill-gray-400 group-hover:fill-gray-500 md:h-5 md:w-5" />
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="text-lg text-[#70046C] md:text-2xl">店舗情報</h2>
            <p className="whitespace-pre-line text-base md:text-xl">
              {description?.replace(/\\n/g, '\n')}
            </p>
          </div>
          <div className="flex flex-col gap-1 md:gap-2">
            <h2 className="text-lg text-[#70046C] md:text-2xl">シェアする</h2>
            <div
              className="group flex cursor-pointer items-center gap-2 text-base text-gray-400 hover:text-gray-500 md:text-xl"
              onClick={share}
            >
              <p>このカフェをシェアする</p>
              <ShareIcon className="h-3 w-3 stroke-gray-400 group-hover:stroke-gray-500 md:h-5 md:w-5" />
            </div>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="cafe_detail" />
        {isCopiedAddress && (
          <div className={`${toastAnimation} toast toast-center toast-top`}>
            <div className="alert alert-success flex gap-2 bg-green-300">
              <CheckIcon />
              <span className="text-base md:text-xl">{`${copyData}をコピーしました`}</span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CafeDetail
