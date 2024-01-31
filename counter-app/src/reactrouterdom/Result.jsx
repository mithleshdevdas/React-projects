import React from 'react'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={ <Layout /> }>
            <Route path='' element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='user' element={ <User /> } />

        </Route>
    )
);


function Result() {
  return (
      <>
          <RouterProvider router={router}/>
    </>
  )
}


export default Result