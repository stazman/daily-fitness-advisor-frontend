import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/tracker_home">Trackers</NavLink></li>
        <li><NavLink to="/journal_home">Journal</NavLink></li>
        <li><NavLink to="/resource_home">Resources</NavLink></li>
        <li><NavLink to="/community_home">Community</NavLink></li>
      </ul>
    </div>
  )
}

export default NavBar