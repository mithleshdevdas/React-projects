import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
      <>
          <header className='text-center bg-green-300'>
              <nav>
                  <ul>
                      <li>
                          <NavLink to ="/">
                              Home
                        </NavLink>  
                      </li>
                      <li>
                          <NavLink to ="/about">
                              About
                        </NavLink>  
                      </li>
                      <li>
                          <NavLink to ="/contact">
                              contact
                        </NavLink>  
                      </li>
                      <li>
                          <NavLink to ="/github">
                              Github
                        </NavLink>  
                      </li>
                 </ul> 
              </nav>
          </header>
   </>
  )
}

export default Header

//

// 
// 