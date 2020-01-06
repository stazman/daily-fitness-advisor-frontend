import styled from 'styled-components'

const NavbarStyles = styled.div`
  .nb-bg {
    background-color: navy;
  }

  .navbar-light .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }

  button.navbar-toggler {
    display: none;
  }

  a.navbar-brand.top {
    font-size: 3rem;
    padding-left: 1rem;
  }

  a.navbar-brand.bottom {
    font-size: 2rem;
    margin-right: 0;
    padding: .2rem;
  }

  nav a.top-link.nav-link {
    font-size: 2.5rem;
    color: white;
    display: none;
    padding-left: 0;
    padding-right: 7.5rem;
  }

  nav.nb-bg.navbar.navbar-expand-xl.navbar-light.fixed-top > a.navbar-brand.top {
    padding-right: 0;
  }

  a.dropdown-toggle.nav-link::after {
    position: fixed;
    right: 1em;
    top: 1em;
    padding: 0;
    font-size: 1.8rem;
  }
  
  div.mr-auto.navbar-nav {
    position: fixed;
    top: 2em;
    right: 2em;
  }

  a.dropdown-item {
    font-size: 1.6rem;
  }
`
export default NavbarStyles