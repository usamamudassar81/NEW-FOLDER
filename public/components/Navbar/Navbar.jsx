import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <NavLink to="/" className="navbar-link">About</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to="/Resume" className="navbar-link">Resume</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to="/Portfolio" className="navbar-link">Portfolio</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to="ContactUS" className="navbar-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;