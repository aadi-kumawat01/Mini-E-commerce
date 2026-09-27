import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Pages/Layout'
import Store from './Pages/Store'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Overview from './Pages/Overview'
import Cart from './Pages/Cart'
import Search from './Pages/Search'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'

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
        { path:"/cart", element:<Cart/> },
        { path:"/search", element:<Search/> },
        { path:"/login", element:<Login/> },
        {
          path:"/about",
          element:<About/>
        },{
          path:"/product/overview/:id",
          element:<Overview/>
        }, { path:"*", element:<NotFound/> }
      ]
    } ]
   )
  return (
      <RouterProvider router={routers}/>
  )
}


