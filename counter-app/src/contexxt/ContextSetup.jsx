import React from 'react'
import UserContextProvider from './UserContextProvider'
import Login from './Login'
import Profile from './Profile'

function ContextSetup() {
  return (
      <>
          <UserContextProvider>
              <Login />
              <Profile/>
          </UserContextProvider>
   </>
  )
}

export default ContextSetup