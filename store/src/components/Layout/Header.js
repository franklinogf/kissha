import React from 'react'
import { Link } from 'gatsby'
import Logo from "../Logo/Logo"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
   return (
      <div>
         <Link to="/" >
            <Logo />
         </Link>
         <Navbar sticky="top" className="d-flex justify-content-center mt-3" bg='white' expand="md">
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse className="justify-content-center" id="navbar">
               <Nav>
                  <Link className="mr-md-2 mr-lg-4 nav-link" to="/about/" >New Arrivals</Link>
                  <Link className="mr-md-2 mr-lg-4 nav-link" to="/" >Best Seller</Link>
                  <Link className="mr-md-2 mr-lg-4 nav-link" to="/" >Makeup </Link>
                  <Link className="mr-md-2 mr-lg-4 nav-link" to="/" >Skin care </Link>
                  <Link className="mr-md-2 mr-lg-4 nav-link" to="/" >Sales</Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}


export default Header
