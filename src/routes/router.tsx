import { createBrowserRouter } from 'react-router-dom'
import { MapPage } from '../pages'

const router = createBrowserRouter([
  // { path: '/', element: <MainPage /> },
  {
    path: '/',
    element: <MapPage />,
  },
])

export default router
