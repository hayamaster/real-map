import { createBrowserRouter } from 'react-router-dom'
import { MapPage, MainPage } from '../pages'

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  {
    path: '/map',
    element: <MapPage />,
  },
])

export default router
