import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'

const TopNavbar = () => {
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
        
        .flex-container {
          display: flex;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          flex-direction: row;
        }
      `}
    </style>
    
    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
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
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default TopNavbar