import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
    <style type="text/css">
      {`
        .nb-bg {
          background-color: navy;
        }
        .navbar-light .navbar-brand,
        .navbar-light .navbar-nav .nav-link
         {
          color: white;
        }
      `}
    </style>

    <Navbar expand='lg' className='nb-bg'>
    <Navbar.Brand href='/'>Daily Weight Loss Advisor</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <NavDropdown id='basic-nav-dropdown'>
          <NavDropdown.Item href='/'>About DWLA </NavDropdown.Item>
          <NavDropdown.Item href='/'>Contact DWLA</NavDropdown.Item>
          <NavDropdown.Item href='/'>Settings</NavDropdown.Item>
          <NavDropdown.Item href='/'>Login/Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavBar