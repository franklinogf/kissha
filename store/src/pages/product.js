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
        <Section height={1200} padding="py-5 px-0">
          <Container>
            <Row>
              <Col xs={12} md={6} className="border border-secondary">
                <ProductGallery></ProductGallery>
              </Col>
              <Col xs={12} md={6}>
                <ProductDetail></ProductDetail>
              </Col>
            </Row>
          </Container>
        </Section>
      </MainLayout>
    )
  }
}
