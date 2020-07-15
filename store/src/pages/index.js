import React, { Component } from "react"
import Section from "../components/Layout/Section"
import { Row, Col, Container, Carousel } from "react-bootstrap"
import styled, { css } from "styled-components"
import ImageCard from "../components/ImageCard/ImageCard"
import ProductRow from "../components/Products/ProductRow"
import DeliveryCard from "../components/Delivery/DeliveryCard"
import ReviewCard from "../components/Users/ReviewCard"
import CustomButton from "../components/Buttons/Button"
import PageTitle from "../components/Layout/PageTitle"
import { Parallax } from "react-parallax"
import { sortByDate } from "../helpers/functions"
import { API_URL } from "../helpers/config"

//temp images
import slider1 from "../images/index-slider-1.jpg"
import slider2 from "../images/index-slider-2.jpg"
import slider3 from "../images/index-slider-3.jpg"
import homePic from '../images/home-pic.jpg'

const StyledSliderImage = styled.div`
  min-height: ${props => props.height};

  ${props =>
    props.img &&
    css`
      background-image: url(${props.img});
      background-size: cover;
      background-position: center;
    `}
`

export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      cart: 0,
    }
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }
  componentDidMount() {
    fetch(`${API_URL}/products`)
      .then(data => data.json())
      .then(products => {
        const sortedProducts = sortByDate(products.data)
        this.setState({ products: sortedProducts.slice(0, 4) })
      })
  }
  handleAddToCart(e) {
    this.setState({
      cart: this.state.cart + 1,
    })
  }

  render() {
    return (
      <>
        {/* page title */}
        <PageTitle title="Home" />

        <Carousel className="position-relative" fade>
          <Carousel.Item>
            <StyledSliderImage img={slider1} height={`500px`} />

            <Carousel.Caption className="_slider-caption">
              <Row>
                <Col xs={12} className="_slider-caption-title">
                  Have to Deal With
                </Col>

                <Col xs={12} className="_slider-caption-title">
                  a Sensitive Skin?
                </Col>
                <Col xs={12} className="text-left py-4">
                  <hr className="_hr-divisor"></hr>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  className="_slider-caption-subtitle text-justify"
                >
                  {" "}
                  Taking good care of your hair wellness is essential for any
                  gal. Try the items on sale to make that care both effective &
                  affordable!
                </Col>
                <Col xs={12} className="pt-3 pb-4">
                  <CustomButton
                    fontSize="16"
                    size="lg"
                    padding="p-3 px-4"
                    id="collections2"
                  >
                    View All Collections
                  </CustomButton>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StyledSliderImage img={slider2} height={`500px`} />

            <Carousel.Caption className="_slider-caption">
              <Row>
                <Col xs={12} className="_slider-caption-title">
                  Have to Deal With
                </Col>

                <Col xs={12} className="_slider-caption-title">
                  a Sensitive Skin?
                </Col>
                <Col xs={12} className="text-left py-4">
                  <hr className="_hr-divisor"></hr>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  className="_slider-caption-subtitle text-justify"
                >
                  {" "}
                  Taking good care of your hair wellness is essential for any
                  gal. Try the items on sale to make that care both effective &
                  affordable!
                </Col>
                <Col xs={12} className="pt-3 pb-4">
                  <CustomButton
                    fontSize="16"
                    size="lg"
                    padding="p-3 px-4"
                    id="collections2"
                  >
                    View All Collections
                  </CustomButton>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StyledSliderImage img={slider3} height={`500px`} />

            <Carousel.Caption className="_slider-caption">
              <Row>
                <Col xs={12} className="_slider-caption-title">
                  Have to Deal With
                </Col>

                <Col xs={12} className="_slider-caption-title">
                  a Sensitive Skin?
                </Col>
                <Col xs={12} className="text-left py-4">
                  <hr className="_hr-divisor"></hr>
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  className="_slider-caption-subtitle text-justify"
                >
                  {" "}
                  Taking good care of your hair wellness is essential for any
                  gal. Try the items on sale to make that care both effective &
                  affordable!
                </Col>
                <Col xs={12} className="pt-3 pb-4">
                  <CustomButton
                    fontSize="16"
                    size="lg"
                    padding="p-3 px-4"
                    id="collections2"
                  >
                    View All Collections
                  </CustomButton>
                </Col>
              </Row>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Section padding="p-3">
          <Container className="mb-5">
            <Row className="d-flex row-cols-1 row-cols-lg-3">
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

        <Section padding="p-0">
          <Parallax
            className=""
            bgImage={homePic}
            strength={600}
          >
            <p
              style={{ maxWidth: "40rem" }}
              className="_parallax-title display-4"
            >
              Natural Skin Powder by L'omeal d'Orange
            </p>
            <div className="py-5 px-5">
              <CustomButton
                fontSize="32"
                size="lg"
                padding="p-4 px-5"
                id="collections2"
              >
                Buy Now
              </CustomButton>
            </div>

            <div style={{ height: "350px" }}></div>
          </Parallax>
        </Section>
        <Section>
          <Container>
            <Section.Header
              title="New Arrivals"
              subTitle="There’s never too many accessories, especially when these are so
            good and stylish!"
              hr
            />
            <ProductRow
              handleAddToCart={this.handleAddToCart}
              products={this.state.products}
            />
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
            <Section.Header
              title="Happy Customers"
              subTitle="When millions of people visit your online store every year, you’ve
              got to expect thousands of nice reviews!"
              hr
            />
            <Row className="mb-4">
              <Col xs={12} lg={6}>
                <ReviewCard
                  userName="Miguel Angel"
                  userComment='"I was always a big shopper, especially when it comes to either apparel or even accessories.
                   Are these sunglasses, jewelry or purses – I need it all!"'
                  userPic="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  userRank="WEB Developer"
                />{" "}
              </Col>
              <Col xs={12} lg={6}>
                <ReviewCard
                  userName="Franklin Gonzalez"
                  userComment='"I have a thing for sunglasses, like I do indeed collect these and I
                                have a real big range of it at home. Luckily, stores like this one let
                                me indulge in this hobby furthermore!"'
                  userPic="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  userRank="WEB Developer"
                />{" "}
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}
