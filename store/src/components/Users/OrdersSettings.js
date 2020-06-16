import React from "react"
import Section from "../Layout/Section"
import { Row, Col, Container, Image, Button } from "react-bootstrap"
import styled from "styled-components"

//TEMPORAL IMAGE AS A EXAMPLE
import testPicture from "../../images/sample-image4.jpg"

const StyledDiv = styled.div`
  width: 835px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const OrdersSettings = () => {
  return (
    <Section bg=" _color-candy-blue" height={300}>
      <StyledDiv>
        <Row className="mx-0 my-1 justify-content-center">
          <h2 className="_font-size-22 _font-Montserrat font-italic">Orders</h2>
        </Row>
        <Container fluid className="px-0 mt-3 bg-white rounded-lg">
          <Row className="border p-3 bg-light _font-size-13 _font-Montserrat font-weight-normal mx-0">
            <Col xs={3}>
              <Row>ORDER PLACED</Row>
              <Row className="text-primary">May 30, 2016</Row>
            </Col>
            <Col xs={2}>
              <Row>TOTAL</Row>
              <Row className="text-primary">$66.98</Row>
            </Col>
            <Col xs={{ span: 3, offset: 4 }}>
              {" "}
              <Row className="justify-content-end">ORDER # 122-4563-6589</Row>
              <Row className="justify-content-end text-primary">
                Order Details
              </Row>
            </Col>
          </Row>
          <Row className="m-0 py-3 border border-top-0">
            <Col xs={2}>
              <Image className="w-100" src={testPicture}></Image>
            </Col>
            <Col xs={6} className="pl-0">
              <Row className="m-0">
                Parfume Da Ost Leviatham , L'Oreal Brand, Exquisite Model
              </Row>
              <Row  className="m-0">Quatity: 4</Row>
              <Row  className="m-0">Price: $26.99</Row>
            </Col>
            <Col xs={4}>
            <Button variant="outline-secondary" size="sm" block>Writte a Review</Button>
            <Button variant="outline-success" size="sm" block>Buy Again</Button>
            </Col>
          </Row>
          <Row className="m-0 py-3 border border-top-0">
            <Col xs={2}>
              <Image className="w-100" src={testPicture}></Image>
            </Col>
            <Col xs={6} className="pl-0">
              <Row className="m-0">
                Parfume Da Ost Leviatham , L'Oreal Brand, Exquisite Model
              </Row>
              <Row  className="m-0">Quatity: 4</Row>
              <Row  className="m-0">Price: $26.99</Row>
            </Col>
            <Col xs={4}>
            <Button variant="outline-secondary" size="sm" block>Writte a Review</Button>
            <Button variant="outline-success" size="sm" block>Buy Again</Button>
            </Col>
          </Row>
        </Container>
        <Row className="mx-0 mt-3">
          <p className="font-weight-bold">
            Here should be an explanation how you could manage you recent orders.
          </p>
          <p>
            It's Kissha is the processing controller of your data. The
            information you provide hereinabove is necessary to manage your
            client account and according to your choice, to send communications
            about Benefit Cosmetics offers, news and events. For more
            information about the processing of your personal data and to know
            your rights, please consult our Privacy Policy.
          </p>
        </Row>
      </StyledDiv>
    </Section>
  )
}

export default OrdersSettings
