import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"
import "../../css/main-bootstrap.css"

const Layout = {
  Main: ({ children }) => {
    return (
      <div>
        <Container variant="primary" className="p-5">
          <Header />
        </Container>
        <Container fluid>{children}</Container>
        <Footer />
      </div>
    )
  },
}

export default Layout
