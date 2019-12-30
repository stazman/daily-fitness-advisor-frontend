import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import NavbarStyles from '../components/styles/NavbarStyles'

const TopNavbar = () => {
  return (
    <>
      <NavbarStyles>
        <Navbar expand='xl' className='nb-bg' fixed='top'>
        <Navbar.Brand href='/' className='top'>DWLA</Navbar.Brand>
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
      </NavbarStyles>
    </>
  )
}

export default TopNavbar