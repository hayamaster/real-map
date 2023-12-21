import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

const gaTrackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId) // react-ga 초기화 및 debug 사용

function App() {
  useEffect(() => {
    ReactGA.set({ page: location.pathname })
    ReactGA.send('pageview')
  }, [])

  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
