import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import Section from "../components/Layout/Section"
import ProductGallery from "../components/Products/ProductGallery"
import ProductDetail from "../components/Products/ProductDetail"
import { Container, Row, Col } from "react-bootstrap"
import PageTitle from "../components/Layout/PageTitle"
import ProductRow from "../components/Products/ProductRow"
// import { sortByDate } from "../helpers/functions" /*TEMPORAL, CHANGE FOR OTHER A SORT BY BRAND*/
import {API_URL} from '../helpers/config'
export default class product extends Component {
  state = {
    product: {},
    relatedProducts: [],
  }

  componentDidMount() {
    const productId = this.props.location.state.productId
    fetch(`${API_URL}/products/${productId}`)
      .then(data => data.json())
      .then(product => {
        fetch(`${API_URL}/products`)
          .then(data => data.json())
          .then(products => {
            this.setState({
              product: product.data,
              relatedProducts: products.data.splice(0, 4),
            })
          })
      })
  }

  render() {    
    const {product} = this.state
    return (
      <MainLayout>
        <PageTitle title={`${product.name}`} />
        <Section padding="py-5 px-0">
          <Container>
            <Row>
              <Col xs={12} md={6}>
                <ProductGallery />
              </Col>
              <Col xs={12} md={6}>
                <ProductDetail product={product} />
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
