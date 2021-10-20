
import React from 'react';
import { Nav, Navbar, Container,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function NavBar() {
  return(
     

  <Navbar className='nav' collapseOnSelect expand="lg" bg="pink" variant="dark">
  <Container>
  {/*<Navbar.Brand className='navbar-brand' href="/">Portfolio Page</Navbar.Brand> */}
  <LinkContainer className='navbar-brand' to="/portfolio page">
  <Nav.Link>Portfolio Page</Nav.Link>
  </LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
      <LinkContainer to="/home">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/project">
      <Nav.Link>Project</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/skills">
      <Nav.Link>Skills</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link>Contact</Nav.Link>
      </LinkContainer>
    </Nav> 
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar;



