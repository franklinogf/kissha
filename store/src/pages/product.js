import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import Section from "../components/Layout/Section"
import { ProductGallery } from "../components/Products/ProductGallery"
import { ProductDetail } from "../components/Products/ProductDetail"
import { Container, Row, Col } from "react-bootstrap"

export default class product extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <MainLayout>
        <h1>This is the Product Page!</h1>
        <Section height={1200} padding="py-5 px-0">
          <Container className="border border-primary">
            <Row className="no-gutter">
              <Col xs={12} md={6} className="border border-secondary no-gutter">
                <ProductGallery></ProductGallery>
              </Col>
              <Col xs={12} md={6} className="border border-secondary">
                <ProductDetail></ProductDetail>
              </Col>
            </Row>
          </Container>
        </Section>
      </MainLayout>
    )
  }
}
