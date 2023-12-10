import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <div className="h-screen">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
