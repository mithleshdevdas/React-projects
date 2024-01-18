import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Both from './Both'
import Home from './Home'
import About from './About'
import Contact from './Contact'

 const router = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Both />}>
       <Route path="" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contact />} />
     </Route>
   )
 );
function Layout() {
 
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Layout