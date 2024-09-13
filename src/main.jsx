import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import App from './App'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import User from './Pages/User'
import { Github } from './components'
import { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/contact', element: <ContactUs /> },
//     ],
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='/github/:username' element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider
      router={router}
    />
)