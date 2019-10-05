import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Daily Weight Loss Advisor</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Settings</NavDropdown.Item>
            <NavDropdown.Item href="/">Login/Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar