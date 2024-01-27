import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
      <>
          <footer className='text-center  bg-gray-300'>
              <h2>Resouse</h2>
              <ul>
                  <li>
                      <Link to="/">
                      Home
                  </Link></li>
                  <li>
                      <Link to="/about">
                      About
                  </Link></li>
                  <li>
                      <Link to="/contact">
                      Contact
                  </Link></li>
              </ul>
          </footer>
    </>
  )
}

export default Footer

//
// 
// 