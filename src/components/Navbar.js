import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink to="/journal">Journal</NavLink></li>
      </ul>
    </div>
  );
}

export default NavBar;