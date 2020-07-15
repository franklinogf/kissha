import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import { Navbar, Nav, Row, Col, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { observer } from "mobx-react"
import useStores from "../../hooks/useStores"
import AxiosClient from "../../config/axios"
import Button from "../Buttons/Button"
import styled from "styled-components"
import PulseLoader from "react-spinners/PulseLoader"

const StyledXContainer = styled.div`
  display: block;
  position: absolute !important;
  right: 0;
  top: 50%;
  transform: translate(-30%, -50%);
`

const StyledCar = styled.div`
  position: absolute;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  display: none;
  right: 0;
  top: 100%;
  z-index: 500;
  background-color: white;
  padding: 20px;
  min-height: 180px;
  min-width: 350px;
`

const StyledNavBarText = styled(Navbar.Text)`
  position: relative;

  &:hover ${StyledCar} {
    display: block;
  }
`

const Header = observer(({ sticky }) => {
  //global store
  const { UserStore, ShoppingCartStore } = useStores()

  //states
  const [cartStatus, setCartStatus] = useState("noData")
  const [cartProducts, setCartProducts] = useState([])

  //handlers
  const handleLogout = () => {
    AxiosClient.get(`/logout`).then(response => {
      //set some kind of wait here
      UserStore.setLogout(false)
    })
  }

  const handleCartLoad = () => {
    setCartStatus("loading")
    console.log("first part")
    //map and fetch
    if (ShoppingCartStore.amountOfProducts !== 0) {
      AxiosClient.get("/products").then(response => {
        const fetchedProducts = response.data.data
        const tempProducts = []

        ShoppingCartStore.obtainProducts.map(StoredCartProduct => {
          const tempArray = fetchedProducts.filter(
            fetchedProduct =>{return fetchedProduct.id === StoredCartProduct.id}
          )
          tempProducts.push(tempArray[0])
        })

        setCartProducts(tempProducts)
        setCartStatus("loaded")
        
      })
    } else {
      setCartStatus("noData")
      console.log("false part")
    }
  }

  const handleRemoveAll = () => {
    setCartProducts([])
    ShoppingCartStore.removeAll()
  }

  const handleRemoveProduct = e => {
    const index = e.target.index
    const id = e.target.id
    setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== id))
    ShoppingCartStore.removeProduct(index)
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
            <Link className="mr-md-2 mr-lg-4 nav-link" to="/products">
              New Arrivals
            </Link>
            <Link className="mr-md-2 mr-lg-4 nav-link" to="/products">
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
          <StyledNavBarText
            onMouseEnter={handleCartLoad}
          >
            <Link
              to="/cart"
            >
              <FontAwesomeIcon
                className="text-primary"
                icon={["fas", "shopping-cart"]}
              />
              ({ShoppingCartStore.amountOfProducts})
            </Link>
            <StyledCar>
              <Row className="m-0">
                <Col xs={4} className="text-center">
                  Picture
                </Col>
                <Col xs={4} className="text-center">
                  Product
                </Col>
                <Col xs={2} className="text-center">
                  Price
                </Col>
              </Row>
              {cartStatus === "noData" && (
                <Row className="m-0 justify-content-center py-5">
                  Lets Buy Something!
                </Row>
              )}
              {cartStatus === "loading" && (
                <Row className="m-0  justify-content-center py-3">
                  <div className="d-block">
                    <PulseLoader size={16} color={"#FF758C"} loading />
                  </div>
                </Row>
              )}
              {cartStatus === "loaded" &&
                cartProducts.map((cartProduct, i) => (
                  <Row key={i} className="m-0 mt-2 position-relative">
                    <Col xs={4} className="m-0 p-0">
                      <Image
                        className="w-100"
                        src={JSON.parse(cartProduct.images)[0].url}
                      />
                    </Col>
                    <Col
                      xs={4}
                      className="align-self-center text-center m-0 p-0"
                    >
                      {cartProduct.name}
                    </Col>
                    <Col
                      xs={2}
                      className="align-self-center text-center m-0 p-0"
                    >
                      $
                      {cartProduct.discount
                        ? (cartProduct.price * cartProduct.discount).toFixed(2)
                        : (cartProduct.price).toFixed(2)}
                    </Col>
                    <StyledXContainer>
                      <Button
                        index={i}
                        id={cartProduct.id}
                        onClick={handleRemoveProduct}
                      >
                        X
                      </Button>
                    </StyledXContainer>
                  </Row>
                ))}

              <Row className="m-0 mt-3 justify-content-center">
                <Button shape="rounded-0" onClick={handleRemoveAll} fullWidth>
                  Clean Car
                </Button>
              </Row>
            </StyledCar>
          </StyledNavBarText>

          <Navbar.Text className="pl-2">
            {UserStore.loginStatus ? (
              <Fragment>
                <Link
                  className="px-2 text-decoration-none"
                  to="/user/dashboard"
                >
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
                  to="/"
                >
                  <span className="font-italic h-p text-muted">Logout</span>
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link className="font-italic h-p" to="/user/login">
                  Login
                </Link>
            {' '}||{' '} 
                <Link className="font-italic h-p" to="/user/signup">
                  Sign Up
                </Link>
              </Fragment>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
})

export default Header
