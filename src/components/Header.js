import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  return (

    <header>
        <h1>UFC Champions</h1>
        <nav>
            <NavLink>
                Home
            </NavLink>
            <NavLink>
                Add New Athlete
            </NavLink>
        </nav>       
    </header>
  )
}

export default Header