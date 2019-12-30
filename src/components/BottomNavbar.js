import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavbarStyles from '../components/styles/NavbarStyles'

const BottomNavBar = () => {
  return (
    <>
    <NavbarStyles>
      <Navbar expand='xl' className='nb-bg' fixed='bottom'>
        <Navbar.Brand href='/tracker_home' className='bottom'>Trackers</Navbar.Brand>
        <Navbar.Brand href='/journal_home' className='bottom'>Journal</Navbar.Brand>
        <Navbar.Brand href='/resource_home' className='bottom'>Resources</Navbar.Brand>
        <Navbar.Brand href='/community_home'className='bottom'>Community</Navbar.Brand>
      </Navbar>
    </NavbarStyles>
    </>
  )
}

export default BottomNavBar