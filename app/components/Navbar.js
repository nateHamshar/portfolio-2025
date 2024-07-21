'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../globals.css'
const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand href="/">William Hamshar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;