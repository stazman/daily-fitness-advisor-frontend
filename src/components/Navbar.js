import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/trackers">Trackers</NavLink></li>
        <li><NavLink to="/journal">Journal</NavLink></li>
        <li><NavLink to="/resources">Resources</NavLink></li>
        <li><NavLink to="/communities">Community</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar