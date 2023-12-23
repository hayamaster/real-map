import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const gaTrackingId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId) // react-ga 초기화 및 debug 사용

function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyDodyI3wOEfXHf1GBbPmjtXeYxEcWVueew',
      authDomain: 'real-map-455c9.firebaseapp.com',
      projectId: 'real-map-455c9',
      storageBucket: 'real-map-455c9.appspot.com',
      messagingSenderId: '1077949491201',
      appId: '1:1077949491201:web:2c70824c5fafb176597800',
      measurementId: 'G-WFQ2L1MK38',
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    const _analytics = getAnalytics(app)
    logEvent(_analytics, 'view')
  }, [])

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
