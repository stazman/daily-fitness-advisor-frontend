import styled from 'styled-components'

const NavbarStyles = styled.div`
  .nb-bg {
    background-color: navy;
  }

  .navbar-light .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: white;
    padding: .5rem;
  }

  button.navbar-toggler {
    display: none;
  }

  a.navbar-brand.top {
    font-size: 2rem;
  }

  a.navbar-brand.bottom {
    font-size: 1.2rem;
    margin-right: 0;
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