import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Component/About/About'
import Contacs from './Component/Contact/Contacs'
import Portfolio from './Component/Portfolio/Portfolio'
import Home from './Component/Home/Home'
import MainLayout from './Component/MainLayout/MainLayout'
import Errorpage from './Component/Errorpage/Errorpage'


const routers = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <Errorpage/>,
    children: [
      {index:true, element: <Home/> },
      {path: "portfolio", element: <Portfolio/>},
      { path:"about", element: <About/>},
      {path:"contact", element: <Contacs/> }
    ]

  }
])


export default function App() {
  return  <RouterProvider router = {routers}/>
}
