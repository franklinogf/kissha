import React, { Component, Fragment } from "react"
import { Navbar, Nav } from "react-bootstrap"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class dashboard extends Component {
  render() {
    return (
      <Fragment>
        <PageTitle title="Dashboard" />
        <Section bg=" _color-sweet" height={185} padding="pt-3 pb-0 px-0">
          <div className="d-flex justify-content-center">
            <span className=" _logo-text text-primary _font-size-36">K </span>
          </div>

          <div className="d-flex justify-content-center mb-4 mt-2 _font-size-30 _font-Montserrat font-italic">
            <h1 className="font-weight-light">Welcome Alexa!</h1>
          </div>
          <Navbar bg="dark" variant="dark" className="py-0">
            <Navbar.Brand className="link-account" href="#home">
              {" "}
              <FontAwesomeIcon icon={["fas", "home"]} />
            </Navbar.Brand>
            <Nav className="mx-auto  _font-size-16 _font-Montserrat">
              <Nav.Link className="px-4 link-account-active" href="#home">
                <FontAwesomeIcon icon={["fas", "user-edit"]} /> Account Details
              </Nav.Link>
              <Nav.Link className="px-4 link-account" href="#home">
                <FontAwesomeIcon icon={["fas", "map-marked-alt"]} /> Addreses
              </Nav.Link>
              <Nav.Link className="px-4 link-account" href="#pricing">
                <FontAwesomeIcon icon={["fas", "box"]} /> Orders
              </Nav.Link>
              <Nav.Link className="px-4 link-account" href="#features">
                <FontAwesomeIcon icon={["fas", "key"]} /> Security & Login
              </Nav.Link>
              <Nav.Link className="px-4 link-account" href="#pricing">
                <FontAwesomeIcon icon={["fas", "money-check-alt"]} /> Payment
                Methods
              </Nav.Link>
            </Nav>
          </Navbar>
        </Section>
        <Section bg=" _color-candy-blue"></Section>
        {/**FROM HERE, YOU SET THE COMPONENTS HERE */}
      </Fragment>
    )
  }
}
