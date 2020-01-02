import React from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import NavbarStyles from '../components/styles/NavbarStyles'
import { device } from '../components/styles/device'

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    a.navbar-brand.bottom {
      font-size: 1.4rem;
  }

  @media ${device.mobileM} {
    a.navbar-brand.bottom {
      font-size: 1.8rem;
  }

  @media ${device.tabletS} {
    a.navbar-brand.bottom {
      font-size: 2.2rem;
  }

  @media ${device.tabletL} {
    a.navbar-brand.bottom {
      font-size: 2.8rem;
  }

  @media ${device.laptop} {
    a.navbar-brand.bottom {
      font-size: 3.4rem;
  }

  @media ${device.custPos} {
    a.navbar-brand.bottom {
      visibility: hidden;
  }
`
  
const BottomNavBar = () => {
  return (
    <>
      <MediaQueries>
        <NavbarStyles>
          <Navbar expand='xl' className='nb-bg' fixed='bottom'>
            <Navbar.Brand href='/tracker_home' className='bottom'>Trackers</Navbar.Brand>
            <Navbar.Brand href='/journal_home' className='bottom'>Journal</Navbar.Brand>
            <Navbar.Brand href='/resource_home' className='bottom'>Resources</Navbar.Brand>
            <Navbar.Brand href='/community_home'className='bottom'>Community</Navbar.Brand>
          </Navbar>
        </NavbarStyles>
      </MediaQueries>
    </>
  )
}

export default BottomNavBar