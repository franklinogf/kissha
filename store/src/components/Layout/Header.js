import React, { Fragment } from "react"
import { Link, navigate } from "gatsby"
import Logo from "../Logo/Logo"
import { Navbar, Nav } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { observer } from "mobx-react"
import useStores from "../../hooks/useStores"
import AxiosClient from '../../config/axios'

const Header = observer(({ sticky }) => {
  //global store
  const { UserStore, ShoppingCartStore } = useStores()

  //handlers
  const handleLogout = () => {
    AxiosClient.get(`/logout`).then(response => {
      //set some kind of wait here
      UserStore.setLogout(false)
    })
      
  }

  return (
    <>
      <div className="text-center">
        <Link className="text-decoration-none" to="/">
          <Logo />
        </Link>
      </div>
      <Navbar
        className={
          !sticky ? "mt-3 _transition" : "p-3 fixed fixed-top shadow-sm"
        }
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

          <Navbar.Text className="pl-2">
            {UserStore.loginStatus ? (
              <Fragment>
                <Link className="px-2 text-decoration-none" to="/user/dashboard">
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={["fas", "user"]}
                  />
                  <span className="font-italic">{` ${UserStore.obtainUser.firstName} `}</span>
                  ||
                </Link>
                <Link
                  className="font-italic text-decoration-none"
                  onClick={handleLogout}
                >
                  <span className="font-italic h-p text-muted">Logout</span>
                </Link>
              </Fragment>
            ) : (
              <Link className="font-italic h-p" to="/user/login">
                Login
              </Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
})

export default Header
