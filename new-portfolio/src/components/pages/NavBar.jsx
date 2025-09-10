import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const active = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">My Portfolio</div>
        <ul className="nav-list">
          <li><NavLink to="/" end className={active}>Home</NavLink></li>
          <li><NavLink to="/projects" className={active}>Projects</NavLink></li>
          <li><NavLink to="/about" className={active}>About</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
