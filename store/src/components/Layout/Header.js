import React from 'react'
import Logo from "../Logo/Logo"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = () => {
   return (
      <div>
         <Logo />
         <Navbar sticky="top" className="d-flex justify-content-center mt-3" bg='white' expand="md">
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse className="justify-content-center" id="navbar">
               <Nav>
                  <NavDropdown className="mr-md-2 mr-lg-4" title="Brows" id='nav-dropdown'>
                     <NavDropdown.Item href="#">Another action </NavDropdown.Item>
                     <NavDropdown.Item href="#">Something </NavDropdown.Item>
                     <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="mr-md-2 mr-lg-4" href="#">Eyes</Nav.Link>
                  <Nav.Link className="mr-md-2 mr-lg-4" href="#">Face</Nav.Link>
                  <Nav.Link className="mr-md-2 mr-lg-4" href="#">Skin Care</Nav.Link>
                  <Nav.Link className="mr-md-2 mr-lg-4" href="#">Body Care</Nav.Link>
                  <Nav.Link className="mr-md-2 mr-lg-4" href="#">Lips</Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default Header
