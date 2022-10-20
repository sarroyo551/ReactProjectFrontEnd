import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {

  return (

    <header>
      <div className='header-container'>
        <h1 className='header-title'>UFC Champions</h1>
        <nav>
            <NavLink to='/' className='navlink'>
                Home
            </NavLink>
            <NavLink to='/new' className='navlink'>
                Add New Athlete
            </NavLink>
        </nav> 
      </div>      
    </header>
  )
}

export default Header