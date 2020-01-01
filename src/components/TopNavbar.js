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
    a.navbar-brand.top {
      font-size: 4.5rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6em;
      right: 7em;
    }  
  }

  @media ${device.custPos} {
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6rem;
      right: 32rem;
  }

  @media ${device.desktop} {
    a.navbar-brand.top {
      font-size: 5rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4.5rem;
    }
    a.dropdown-item {
      font-size: 4rem;
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
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          {/* <Navbar.Collapse id='basic-navbar-nav'> */}
            <Nav className='mr-auto'>
              <NavDropdown id='basic-nav-dropdown'>
                <NavDropdown.Item href='/'>About DWLA </NavDropdown.Item>
                <NavDropdown.Item href='/'>Contact DWLA</NavDropdown.Item>
                <NavDropdown.Item href='/'>Settings</NavDropdown.Item>
                <NavDropdown.Item href='/'>Login/Logout</NavDropdown.Item>
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