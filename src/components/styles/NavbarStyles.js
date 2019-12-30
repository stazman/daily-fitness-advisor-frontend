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
    font-size: 2rem;
  }
`
export default NavbarStyles