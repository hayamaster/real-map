import { Input } from '@/components'

const AddingRequest = () => {
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
            <h1 className="text-lg font-semibold text-[#70046C] md:text-3xl">
              追加リクエスト
            </h1>
            <div className="text-base text-gray-500 md:text-xl">
              <p>追加したいカフェを教えてください。</p>
              <p>24時間以内に審査が完了します。</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 px-2 py-1 md:px-4 md:py-3">
            <Input label="喫茶店名" />
            <Input label="簡単レビュー" />
            <Input label="住所" />
            <div className="ml-auto">
              <button className="rounded-md bg-[#9747FF] px-2 py-1 text-xl text-white md:px-4 md:py-2">
                提出
              </button>
            </div>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button />
      </form>
    </dialog>
  )
}

export default AddingRequest
