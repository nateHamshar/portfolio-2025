'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../globals.css'
import "./navbar.css"
import { useEffect, useState } from 'react';
import Image from 'next/image'

const NavbarComponent = () => {

  


  const [theme, setTheme] = useState("light")

  const makeNavDark = () => {
    setTheme("dark")
    document.querySelector(".nav-transparent").classList.add("nav-dark");
    document.querySelector("#home").classList.add("dark-mode");
    document.querySelector("#projects").classList.add("dark-mode");
    document.querySelector("#resume").classList.add("dark-mode");
    document.querySelector("#contact").classList.add("dark-mode");
  }


  useEffect(() => {
    document.addEventListener("scroll", () => {
     makeNavDark() 
    })
  },[])
  
  return (
    <>
      <Navbar expand="sm"  data-bs-theme={theme} className='nav-transparent fixed-top'>
        <Container>
          <Navbar.Brand href="/" className='active-page nav-name' id="home" onClick={() => setHomeActive()}>
            <Image 
              src={"/portfolio-icon.png"}
              height={50}
              width={50}
              alt="personal logo"
              className='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => makeNavDark()}/>
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