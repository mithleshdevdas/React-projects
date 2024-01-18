import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
      <>
          <header className='bg-green-400'>
              
     
          <h1>here is header </h1>
          <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          </header>
    </>
  )
}

export default Header