import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import Section from "../components/Layout/Section"
import ProductGallery from "../components/Products/ProductGallery"
import ProductDetail from "../components/Products/ProductDetail"
import { Container, Row, Col } from "react-bootstrap"
import PageTitle from "../components/Layout/PageTitle"
import ProductRow from "../components/Products/ProductRow"
import { sortByDate } from "../helpers/functions" /*TEMPORAL, CHANGE FOR OTHER A SORT BY BRAND*/

export default class product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      product: {},
      relatedProducts: [],
    }
  }

  async componentDidMount() {
    /*Fetch By id*/
    const singleResponse = await fetch("http://localhost:5000/products/51")
    const singleProduct = await singleResponse.json()
    this.setState({ product: singleProduct.data })
    /*Fetch By Brand-Model-anything related with the fetched product*/
    const relatedResponse = await fetch("http://localhost:5000/products/")
    const products = await relatedResponse.json()
    this.setState({ relatedProducts: products.data.slice(0, 4) })
  }

  render() {
    return (
      <MainLayout>
        <PageTitle title="Products" />
        <Section padding="py-5 px-0">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <ProductGallery />
              </Col>
              <Col xs={12} md={6}>
                <ProductDetail product={this.state.product} />
              </Col>
            </Row>
            <Row className="pt-2 pb-4 mt-4 mb-0 border-top border-bottom border-primary">
              <Col
                xs={12}
                className="_font-Montserrat _font-size-20 font-weight-bold mb-2"
              >
                Also
              </Col>
              <Col
                xs={12}
                className="_font-Montserrat _font-size-18 font-weight-light"
              >
                When we talk about keeping your skin soothed, moisturized and
                taken care of – we must mention the night regiment that is
                absolutely necessary for achieving all these ultimate goals.
                Also keep in mind that not all creams are just as acclaimed as
                this one is. Made by the legendary & trustworthy Allan’s French
                brand.
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Section.Header title="Related Products" />
            <ProductRow products={this.state.relatedProducts} />
          </Container>
        </Section>
      </MainLayout>
    )
  }
}
