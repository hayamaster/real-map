import { Input } from '@/components'
import { useState, FormEvent, useRef } from 'react'
import supabase from '@/apis/supabaseClient'

const AddingRequest = () => {
  const [cafeName, setCafeName] = useState<string>('')
  const [cafeDescription, setCafeDescription] = useState<string>('')
  const [cafeAddress, setCafeAddress] = useState<string>('')
  const modalCloseRef = useRef<HTMLButtonElement>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!cafeName || !cafeDescription || !cafeAddress) return

    const { error } = await supabase.from('request').insert({
      name: cafeName,
      description: cafeDescription,
      address: cafeAddress,
    })

    if (error) {
      console.warn(error)
    } else {
      setCafeName('')
      setCafeDescription('')
      setCafeAddress('')
      alert('追加リクエストが完了できました。\nご意見ありがとうございます。')
      modalCloseRef.current && modalCloseRef.current.click()
    }
  }

  return (
    <dialog id="adding-request" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2 hover:border-[#9747FF] hover:bg-[#F8E1FE] hover:text-[#70046C]">
            ✕
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 p-2 md:p-4">
            <h1 className="text-xl font-semibold text-[#70046C] md:text-3xl">
              追加リクエスト
            </h1>
            <div className="text-base text-gray-500 md:text-xl">
              <p>追加したいカフェを教えてください。</p>
              <p>24時間以内に審査が完了します。</p>
            </div>
          </div>
          <form
            className="flex flex-col gap-4 px-1 py-0.5 md:px-3 md:py-2"
            onSubmit={handleSubmit}
          >
            <Input
              label="喫茶店名"
              value={cafeName}
              onChange={(e) => setCafeName(e.currentTarget.value)}
            />
            <Input
              label="簡単レビュー"
              value={cafeDescription}
              onChange={(e) => setCafeDescription(e.currentTarget.value)}
            />
            <Input
              label="住所"
              value={cafeAddress}
              onChange={(e) => setCafeAddress(e.currentTarget.value)}
            />
            <div className="ml-auto">
              <button className="rounded-md bg-[#9747FF] px-3 py-1 text-xl text-white md:px-5 md:py-2">
                提出
              </button>
            </div>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button ref={modalCloseRef} />
      </form>
    </dialog>
  )
}

export default AddingRequest
