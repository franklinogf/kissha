import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"
import useSticky from "../../hooks/useSticky"

export const MainLayout = ({ children }) => {
  const {isSticky, element} = useSticky()
  return (
    <>
      <Container className="pt-3">
        <Header sticky={isSticky} />
      </Container>
      <Container ref={element} fluid className="p-0">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default MainLayout
