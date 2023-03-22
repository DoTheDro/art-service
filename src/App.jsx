//installs
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

//Design CSS
import './App.css'

//Pages
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/Contact'
import Services from './pages/Services'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />} >
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
