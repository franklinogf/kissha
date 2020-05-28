import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import Section from "../components/Layout/Section"
import { Row, Col, Container, Button } from "react-bootstrap"
import ImageCard from "../components/ImageCard/ImageCard"
import { ProductRow } from "../components/Products/ProductRow"
import { DeliveryCard } from "../components/Delivery/DeliveryCard"
import { ReviewCard } from "../components/Users/ReviewCard"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTruck, faTag, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "../scss/main-bootstrap.scss"

library.add(fab, faTruck, faTag, faEnvelope)

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/products")
      .then(data => data.json())
      .then(products => this.setState({ products: products.data }))
  }

  render() {
    return (
      <MainLayout>
        <Section>
          <Container>
            <Row className="d-flex row-cols-1 row-cols-lg-3 pb-5 mt-5">
              <Col className="mt-3 d-flex justify-content-center">
                <ImageCard
                  title="Makeup Tools"
                  src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
                />
              </Col>
              <Col className="mt-3 d-flex justify-content-center">
                <ImageCard
                  title="Skin Care"
                  src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </Col>
              <Col className="mt-3 d-flex justify-content-center">
                <ImageCard
                  title="Accesories"
                  src="https://images.unsplash.com/photo-1578083881514-75d7049175bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section img="https://images.unsplash.com/photo-1562516710-38a6fa229b23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1385&q=80">
          <p style={{ maxWidth: "40rem" }} className="display-4">
            This is a wider card with supporting text
          </p>
          <Button variant="primary" className="mt-3">
            Read More
          </Button>
        </Section>

        <Section bg="light">
          <h1>Space 1</h1>
          <p>
            Qui ipsum enim labore aliqua fugiat laboris nisi pariatur tempor
            deserunt nisi occaecat mollit ipsum.
          </p>
        </Section>

        <Section>
          <Container>
            <h2 className="text-center">New Arrivals</h2>
            <p className="text-center text-muted">
              There’s never too many accessories, especially when these are so
              good and stylish!
            </p>
            <hr className="w-25 mb-5 border-primary _border-primary" />
            <ProductRow products={this.state.products} />
          </Container>
        </Section>

        <Section bg="light" height={400}>
          <Container>
            <Row>
              <Col sm={12} md={6}>
                <DeliveryCard
                  title="Free Delivery"
                  icon="truck"
                  text="Covering all 50 US states, we will deliver everything we have in stock completely free of charge!"
                ></DeliveryCard>
              </Col>
              <Col sm={12} md={6} className="mt-5 mt-md-0">
                <DeliveryCard
                  title="Discounts Club"
                  icon="tag"
                  text="Covering all 50 US states, we will deliver everything we have in stock completely free of charge!"
                ></DeliveryCard>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section>
          <Container>
            <Row className="text-center">
              <Col sm={12} className="section-title _font-size-36 text-black">
                Happy Customers
              </Col>
              <Col sm={12} className="text-black-50 mt-1 mb-3 _font-size-20">
                When millions of people visit your online store every year,
                you’ve got to expect thousands of nice reviews!
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={12} md={6}>
                <ReviewCard
                  userName="Matthew Schneider"
                  userComment="'I have a thing for sunglasses, like I do indeed collect these and I
          have a real big range of it at home. Luckily, stores like this one let
          me indulge in this hobby furthermore!'"
                  userPic="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  userRank="WORDPRESS DEVELOPER"
                ></ReviewCard>
              </Col>
              <Col sm={12} md={6}>
                <ReviewCard
                  userName="Anne Harris"
                  userComment="I was always a big shopper, especially when it comes to either apparel or even accessories. Are these sunglasses, jewelry or purses – I need it all!"
                  userPic="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  userRank="WORDPRESS DEVELOPER"
                ></ReviewCard>
              </Col>
            </Row>
          </Container>
        </Section>
      </MainLayout>
    )
  }
}
