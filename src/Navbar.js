import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from 'react-router-dom';

function Navbar () {
  return (
    <div>
      <Nav>
        <NavLink to='/'>

          <img src='' alt='' />
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact' activeStyle>
            contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            sign up
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to = '/signin'>Sign In</NavBtnLink>  
        </NavBtn>

      </Nav>
    
    </div>
  )
}

export default Navbar 