// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import authService from './blog-project/appwrite/auth'
import authSlice, { login, logout } from './blog-project/store/authSlice'
import { Footer, Header } from './blog-project/componets'
import {Outlet} from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
        dispatch(login({userData}))
        } else {
          dispatch(logout())
      }
      })
    .finally(()=> setLoading(false))

  },[])

  return !loading ? <div className='bg-green-300 min-h-screen '>
    <div className='w-full block'>
      <Header />
      <main>
 <Outlet/>
        todo 
      </main>
      <Footer/>
  </div>
  </div> : (null)
}

export default App