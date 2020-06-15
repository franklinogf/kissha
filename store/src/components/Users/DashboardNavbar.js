import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const StyledNavLink = styled(Nav.Link)`
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  border-color: #343a40 !important;
  text-align: center;
  transition: 0.3s;

  &:hover {
    color: #ff758c !important;
    border-radius: 0 !important;
  }

  ${({ selected }) =>
    selected &&
    `
        background-color: #E9F8F6 !important;
        color: #ff758c !important;
        border-radius: 0 !important;
        border-color: #E9F8F6 !important;
        box-shadow: 0 -5px 4px rgba(0, 0, 0, 0.1) !important;
    `}
`

const DashboardNavbar = ({ selectedLink, setSelectedLink }) => {

  return (
    <Navbar bg="dark" variant="dark" className="py-0" expand="md">
      <Navbar.Toggle aria-controls="dashboardNavbar" />
      <Navbar.Collapse id="dashboardNavbar">
        <Nav
          onSelect={selectedKey => setSelectedLink(selectedKey)}
          variant="tabs"
          className="mx-auto  _font-size-16 _font-Montserrat"
          activeKey={selectedLink}
        >
          <Nav.Item>
            <StyledNavLink
              eventKey="info"
              selected={selectedLink === "info"}
            >
              <FontAwesomeIcon icon={["fas", "home"]} /> Info
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="account"
              selected={selectedLink === "account"}
            >
              <FontAwesomeIcon icon={["fas", "user-edit"]} /> Account
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="address"
              selected={selectedLink === "address"}
            >
              <FontAwesomeIcon icon={["fas", "map-marked-alt"]} /> Addreses
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="orders"
              selected={selectedLink === "orders"}
            >
              <FontAwesomeIcon icon={["fas", "box"]} /> Orders
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="security"
              selected={selectedLink === "security"}
            >
              <FontAwesomeIcon icon={["fas", "key"]} /> Login
            </StyledNavLink>
          </Nav.Item>
          <Nav.Item>
            <StyledNavLink
              eventKey="payment"
              selected={selectedLink === "payment"}
            >
              <FontAwesomeIcon icon={["fas", "money-check-alt"]} /> Payment
              
            </StyledNavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default DashboardNavbar
