import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import "../../scss/main-bootstrap.scss"

const Layout = { 
  Main: ({ children }) => {
    return (
      <div>
        <Container variant="primary" className="p-5">
          <Header />
        </Container>
        <Container fluid className="p-0">{children}</Container>
        <Footer />
      </div>
    )
  },
}

export default Layout
