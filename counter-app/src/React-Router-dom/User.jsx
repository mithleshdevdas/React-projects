import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
      <>
          <h1 className='bg-pink-400'>user:{id}</h1>
    </>
  )
}

export default User

//
//
// 
