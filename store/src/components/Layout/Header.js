import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { observer } from "mobx-react"
import useStores from "../../hooks/useStores"

const Header = observer(({ sticky }) => {
  const { ShoppingCartStore } = useStores()

  return (
    <>
      <div className="text-center">
        <Link className="text-decoration-none" to="/">
          <Logo />
        </Link>
      </div>
      <Navbar
        className={!sticky ? "mt-3 _transition" : "p-3 fixed fixed-top"}
        bg="white"
        expand="md"
      >
        {sticky && (
          <Link className="text-decoration-none" to="/">
            <Navbar.Brand className="_logo-text text-primary">
              It's Kissha
            </Navbar.Brand>
          </Link>
        )}
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="justify-content-center flex-fill ">
            <Link className="mr-md-2 mr-lg-4 nav-link" to="/about">
              New Arrivals
            </Link>
            <Link className="mr-md-2 mr-lg-4 nav-link" to="/bestseller">
              Best Seller
            </Link>
            <Link
              className="mr-md-2 mr-lg-4 nav-link"
              to="/products"
              state={{ option: "makeup" }}
            >
              Makeup
            </Link>
            <Link
              className="mr-md-2 mr-lg-4 nav-link"
              to="/products"
              state={{ option: "skin care" }}
            >
              Skin care
            </Link>
            <Link
              className="mr-md-2 mr-lg-4 nav-link"
              to="/products"
              state={{ option: "Sales" }}
            >
              Sales
            </Link>
          </Nav>
          <Navbar.Text>
            <Link to="/cart">
              <FontAwesomeIcon
                className="text-primary"
                icon={["fas", "shopping-cart"]}
              />
              ({ShoppingCartStore.amountOfProducts})
            </Link>
          </Navbar.Text>

          <Navbar.Text>
            <Link className="px-2" to="/profile">
              <FontAwesomeIcon
                className="text-primary"
                icon={["fas", "user"]}
              />
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
})

export default Header
