import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

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

    const app = initializeApp(firebaseConfig)
    const _analytics = getAnalytics(app)
    logEvent(_analytics, 'view')
  }, [])

  return (
    <div className="h-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
