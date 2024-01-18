import React from 'react'
import {Link } from 'react-router-dom'

function Footer() {
  return (
      <>
          <footer className='bg-yellow-400'>
              <h2> here is footer</h2>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
          </footer>
          
    </>
  )
}

export default Footer