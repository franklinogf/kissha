import React, { Component } from "react"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import PageTitle from "../components/Layout/PageTitle"
import Section from "../components/Layout/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class contactUs extends Component {
  render() {
    return (
      <>
        <PageTitle title="Contact Us" />
        <Section bg="white">
          <Container fluid="sm">
            <Row className="justify-content-center mb-5">
              <Col xs={12}>
                <h1 className="_font-size-36 _font-Montserrat text-center font-weight-normal">
                  Contact Us
                </h1>
              </Col>
              <Col xs={12}>
                <h4 className="_font-size-20 _font-Playfair-Display text-center text-disabled">
                  Need help with one of our products? let us know via Contact!
                  fill the form and we gona be responding as soon as posible.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "comments"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Let's have a chat!
                </Row>
                <Row className="m-0 _font-size-16 _font-Playfair-Display text-center text-disabled">
                  <Col xs={12}>Telephone: (888) 888-8888</Col>
                  <Col xs={12}>Fax: (888) 888-8888</Col>
                </Row>
              </Col>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "map-marker-alt"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Visit our location
                </Row>
                <Row className="m-0 justify-content-center _font-size-16 _font-Playfair-Display text-center text-disabled">
                  6036 Richmond hwy., Alexandria, VA 22303
                </Row>
              </Col>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "globe-americas"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Looking for a Job?
                </Row>
                <Row className="m-0 justify-content-center _font-size-16 _font-Playfair-Display text-center text-disabled">
                  Send us your CV or see our openings
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid="sm" className="bg-dark text-white my-5 py-5">
            <Form>
              <Form.Group as={Row} controlId="contactName">
                <Form.Label column sm={2}>
                  Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="input" placeholder="Name" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="contactEmail">
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="contactPhone">
                <Form.Label column sm={2}>
                  Phone
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="input" placeholder="Phone" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="contactMessage">
                <Form.Label column sm={2}>
                  Message
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    size="lg"
                    type="textarea"
                    placeholder="Message"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="text-white rounded-pill"
                  >
                    Sign in
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Container>
        </Section>
      </>
    )
  }
}
