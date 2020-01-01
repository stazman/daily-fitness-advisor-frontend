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
      font-size: 2.75rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 2.5rem;
    }
  }

  @media ${device.mobileM} {
    a.navbar-brand.top {
      font-size: 3.5rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 3rem;
    }
  }

  @media ${device.tabletL} {
    a.navbar-brand.top {
      font-size: 4rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 3.5rem;
    }
  }

  @media ${device.laptop} {
    a.navbar-brand.top {
      font-size: 4.5rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4rem;
    }
  }

  @media ${device.desktop} {
    a.navbar-brand.top {
      font-size: 5rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4.5rem;
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