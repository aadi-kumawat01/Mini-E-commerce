import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'
import Store from './Pages/Store'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Overview from './Pages/Overview'
import Cart from './Pages/Cart'

export default function App() {   

   const routers =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/store/:slug?",
          element:<Store/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/Cart",
          element:<Cart/>

        },
        {
          path:"/about",
          element:<About/>
        },{
          path:"/product/overview/:id",
          element:<Overview/>
        }
      ]
    } ]
   )
  return (
      <RouterProvider router={routers}/>
  )
}


