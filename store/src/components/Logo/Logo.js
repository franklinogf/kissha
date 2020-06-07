import React from "react"
// import logo from "./logo.png"
import { Row, Col } from "react-bootstrap"

export default function Logo() {
  return (
    <>
      <Row className="d-inline-block">
        <Col className="m-0 p-0" xs={12}>
          <h1 className="_logo-text inline-block m-0 p-0">It's</h1>
        </Col>
        <Col className="m-0 p-0" xs={12}>
          <h1 className="_logo-text d-inline-block m-0 p-0">Kissha</h1>
        </Col>
      </Row>
    </>
  )
}
