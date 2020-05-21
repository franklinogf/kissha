import React from 'react'
import { Link } from 'gatsby'
import Logo from "../Logo/Logo"
import { Navbar, Nav, NavLink } from "react-bootstrap"

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
                  <NavLink className="mr-md-2 mr-lg-4" href="/about/" >New Arrivals</NavLink>
                  <NavLink className="mr-md-2 mr-lg-4" href="#" >Best Seller</NavLink>
                  <NavLink className="mr-md-2 mr-lg-4" href="#" >Makeup </NavLink>
                  <NavLink className="mr-md-2 mr-lg-4" href="#" >Skin care </NavLink>
                  <NavLink className="mr-md-2 mr-lg-4" href="#" >Sales</NavLink>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   )
}

export default Header
