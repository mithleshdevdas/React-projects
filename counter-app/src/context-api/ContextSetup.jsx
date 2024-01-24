import React from 'react'

import Login from './Login'
import Profile from './Profile'
import UserContextProvider from './UserContextProvider'

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

// 
// 