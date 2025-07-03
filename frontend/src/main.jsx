import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Layout from './Layout.jsx'

import Home from './Pages/Home.jsx'
import Login from './Components/Login.jsx'
import { createBrowserRouter,createRoutesFromChildren,Route,RouterProvider } from 'react-router-dom';
import Signup from './Components/Signup.jsx'
import About from './Components/About.jsx'
import WelcomePage from './Pages/WelcomePage.jsx'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<WelcomePage/>} />
      <Route path='home' element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path='signup' element={<Signup/>} />
      <Route path='about' element={<About/>} />
    </Route>
  )
);









createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
