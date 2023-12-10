import { createBrowserRouter } from 'react-router-dom'
import { MapPage, MainPage } from '../pages'

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  {
    path: '/map',
    element: <MapPage />,
    // path: PATH.MAIN,
    // element: <Layout />,
    // children: [
    //   {
    //     path: PATH.MAIN,
    //     element: <MainPage />,
    //     loader: loginLoader,
    //   },
    // ],
  },
])

export default router
