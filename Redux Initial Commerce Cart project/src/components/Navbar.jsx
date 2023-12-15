import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
      <div className='tw-flex'>
          <h3>Redux tool kit</h3>
          <NavLink to="/">
              Products
          </NavLink>
          <NavLink to="cart">
              Add
          </NavLink>
    </div>
  )
}

export default Navbar