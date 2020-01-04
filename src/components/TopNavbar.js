import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import NavbarStyles from '../components/styles/NavbarStyles'
import { device } from '../components/styles/device'
 
const MediaQueries = styled.div`

  @media ${device.mobileS} {
    a.navbar-brand.top {
      font-size: 2.3rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 2.5rem;
    }
    a.dropdown-item {
      font-size: 2rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 3em;
      right: 4em;
    }
  }
    
  @media ${device.mobileM} {
    a.navbar-brand.top {
      font-size: 2.6rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 3rem;
    }
    a.dropdown-item {
      font-size: 2.5rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 4em;
      right: 5em;
    }    
  }
  
  @media ${device.tabletS} {
    a.dropdown-item {
      font-size: 3rem;
  }
    
  @media ${device.tabletL} {
    a.navbar-brand.top {
      font-size: 4rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 3.5rem;
    }
    a.dropdown-item {
      font-size: 3.5rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 4em;
      right: 6em;
    }      
  }
  
  @media ${device.laptop} {
    a.dropdown-toggle.nav-link::after {
      font-size: 4rem;
      top: 2.75rem;
      right: 2rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6em;
      right: 7em;
    }
    nav a.top-link.nav-link {
      display: inline-block;
    }
  }
    
  @media ${device.custLaptopPos1} {
    a.navbar-brand.top {
      padding-right: 6rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6rem;
      right: 32rem;
    }
    nav a.top-link.nav-link {
      font-size: 3.5rem;
      padding-left: 5rem;
      padding-right: 6rem;
    }
  }
  
  @media ${device.custLaptopPos2} {
    a.navbar-brand.top {
      font-size: 4.5rem;
      padding-right: 7rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6rem;
      right: 32rem;
    }
    nav a.top-link.nav-link {
      font-size: 4rem;
      padding-left: 6rem;
      padding-right: 7rem;
    }
  }
  
  @media ${device.custLaptopPos3} {
    a.navbar-brand.top {
      font-size: 5rem;
      padding-right: 10rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6rem;
      right: 32rem;
    }
    nav a.top-link.nav-link {
      font-size: 3.5rem;
      padding-left: 7rem;
      padding-right: 8rem;
    }
  }
  
  @media ${device.desktop} {
    a.navbar-brand.top {
      font-size: 5rem;
      padding-right: 12rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4.5rem;
    }
    a.dropdown-item {
      font-size: 4rem;
    }
    nav a.top-link.nav-link {
      font-size: 4.5rem;
      padding-left: 18rem;
      padding-right: 24rem;
    }
  }
`

const TopNavbar = () => {
  return (
    <>
      <MediaQueries>
        <NavbarStyles>
          <Navbar expand='xl' className='nb-bg' fixed='top'>
          <Navbar.Brand href='/' className='top'>DWLA</Navbar.Brand>
          <Nav.Link className='top-link'href="/tracker_home">Trackers</Nav.Link>
          <Nav.Link className='top-link'href="/journal_home">Journal</Nav.Link>
          <Nav.Link className='top-link'href="/resource_home">Resources</Nav.Link>
          <Nav.Link className='top-link'href="/community_home">Community</Nav.Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {/* <Navbar.Collapse id='basic-navbar-nav'> */}
            <Nav className='mr-auto'>
              <NavDropdown id='basic-nav-dropdown'>
                <NavDropdown.Item href='/'>About DWLA </NavDropdown.Item>
                <NavDropdown.Item href='/'>Contact DWLA</NavDropdown.Item>
                <NavDropdown.Item href='/'>Settings</NavDropdown.Item>
                <NavDropdown.Item href='/'>Login/Logout</NavDropdown.Item>
                <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
                <NavDropdown.Item href='/'>Trackers</NavDropdown.Item>
                <NavDropdown.Item href='/'>Journal</NavDropdown.Item>
                <NavDropdown.Item href='/'>Resources</NavDropdown.Item>
                <NavDropdown.Item href='/'>Community</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          {/* </Navbar.Collapse> */}
          </Navbar>
        </NavbarStyles>
      </MediaQueries>
    </>
  )
}

export default TopNavbar