import React from 'react'
import { Container, Col, Row, Navbar } from 'react-bootstrap'

const BottomNavBar = () => {
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

    <Container className='flex-container'>
      <Row>
        <Col lg={12}>
          <Navbar expand='lg' className='nb-bg'>
            <Navbar.Brand href='/tracker_home'>Trackers</Navbar.Brand>
            <Navbar.Brand href='/journal_home'>Journal</Navbar.Brand>
            <Navbar.Brand href='/resource_home'>Resources</Navbar.Brand>
            <Navbar.Brand href='/community_home'>Community</Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default BottomNavBar