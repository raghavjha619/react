import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Home from './components/home/home.jsx'
import User from './components/user/user.jsx'
import Github, { GitHubInfoLoader } from './components/github/github.jsx'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },{
//         path: "contact",
//         element: <Contact />
//       },{
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={GitHubInfoLoader}
      path='git' 
      element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
