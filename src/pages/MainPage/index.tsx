import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate()

  return (
    <div className="h-dvh bg-red-200">
      <div className="flex h-full w-full items-center justify-center">
        <button
          className="rounded-md border border-black bg-blue-200 px-3 py-1.5 hover:bg-gray-300"
          onClick={() => navigate('/map')}
        >
          マップへ
        </button>
      </div>
    </div>
  )
}

export default MainPage
