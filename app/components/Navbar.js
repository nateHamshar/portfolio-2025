'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../globals.css'
import "./navbar.css"
import { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';

const NavbarComponent = () => {

  const pathname = usePathname();

  useEffect(() => { // set accent color to active page tab
    if (pathname == "/"){
        document.getElementById("projects").classList.remove("active-page");
        document.getElementById("resume").classList.remove("active-page");
        document.getElementById("contact").classList.remove("active-page");
    } else if (pathname == "/projects"){
        document.getElementById("projects").classList.add("active-page");
        document.getElementById("home").classList.remove("active-page");
        document.getElementById("resume").classList.remove("active-page");
        document.getElementById("contact").classList.remove("active-page");
    } else if (pathname == '/resume'){
        document.getElementById("resume").classList.add("active-page");
        document.getElementById("projects").classList.remove("active-page");
        document.getElementById("home").classList.remove("active-page");
        document.getElementById("contact").classList.remove("active-page");
    } else if (pathname == "/contact"){
        document.getElementById("contact").classList.add("active-page");
        document.getElementById("projects").classList.remove("active-page");
        document.getElementById("resume").classList.remove("active-page");
        document.getElementById("home").classList.remove("active-page");
    }
  },[pathname])


  return (
    <>
      <Navbar expand="sm" bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand href="/" className='nav-text active-page' id="home" onClick={() => setHomeActive()}>William Hamshar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/projects" className='nav-text' id="projects" onClick={() => setProjectsActive()}>Projects</Nav.Link>
                <Nav.Link href="/resume" className='nav-text' id='resume' onClick={() => setResumeActive()}>Resume</Nav.Link>
                <Nav.Link href="/contact" className='nav-text' id='contact' onClick={() => setContactActive()}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;