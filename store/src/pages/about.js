import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import PageTitle from "../components/Layout/PageTitle"
import Section from "../components/Layout/Section"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class about extends Component {
  render() {
    return (
      <>
        <PageTitle title="About" />
        <Section bg="white">
          <Container fluid="sm">
            <Row className="justify-content-center mb-5">
              <Col xs={12}>
                <h1 className="_font-size-36 _font-Montserrat text-center font-weight-normal">
                  About
                </h1>
              </Col>
              <Col xs={12}>
                <h4 className="_font-size-20 _font-Playfair-Display text-center text-disabled">
                  Creating an online store that has everything a girl might need
                  for hre daily skincare routine is not an easy feat. First
                  thing, you’ll need to have a great team to accomplish that,
                  just as well as awesome pricing policy & huge range of
                  top-quality items!
                </h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "search"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Free Samples
                </Row>
                <Row className="m-0 _font-size-16 _font-Playfair-Display text-center text-disabled">
                  With thousands of creams, lotions and other skincare goodies
                  in store, we are always glad to hand you some free samples!
                </Row>
              </Col>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "box-open"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Free Delivery!
                </Row>
                <Row className="m-0 _font-size-16 _font-Playfair-Display text-center text-disabled">
                  Covering all the contiguous United States + Alaska and Hawaii,
                  we deliver it to your doorstep, anywhere and anytime!
                </Row>
              </Col>
              <Col xs={12} sm={4}>
                <Row className="m-0 justify-content-center my-4">
                  <FontAwesomeIcon
                    className="mr-1 text-primary"
                    icon={["fas", "bookmark"]}
                    size="5x"
                  />
                </Row>
                <Row className="m-0 mb-3 _font-size-22 _font-Montserrat justify-content-center font-weight-normal">
                  Free Samples
                </Row>
                <Row className="m-0 _font-size-16 _font-Playfair-Display text-center text-disabled">
                  With so many different needs for our website visitors, to
                  cover it all we purchase thousands of items by dozens of best
                  global & US brands!
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid="sm" className="bg-dark my-5 py-5">
            <Row className="m-0 py-5 text-white text-center">
              <Col xs={12} sm={4}>
                <p className="_font-size-72 _font-Playfair-Display">15000</p>
                <span className="_font-size-22 _font-Montserrat">
                  Items in Stock
                </span>
              </Col>
              <Col xs={12} sm={4}>
                <p className="_font-size-72 _font-Playfair-Display">99%</p>
                <span className="_font-size-22 _font-Montserrat">
                  Returning Customers
                </span>
              </Col>
              <Col xs={12} sm={4}>
                <p className="_font-size-72 _font-Playfair-Display">10</p>
                <span className="_font-size-22 _font-Montserrat">
                  All Time Visitors
                </span>
              </Col>
            </Row>
          </Container>
          <Container fluid="sm">
            <Row className="m-0 my-5 justify-content-center text-center">
              <Col xs={12} sm={6}>
                <Row className="m-0 mt-2 mb-5 justify-content-center">
                  <Image
                    width={200}
                    height={200}
                    className="align-self-center mr-3"
                    src="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  />
                </Row>
                <Row className="m-0 mt-3 justify-content-center _font-size-24 _font-Montserrat">
                  Miguel Angel Peña Santos
                </Row>
                <Row className="m-0 mb-4 justify-content-center _font-size-16 _font-Montserrat text-primary text-weight-bold">
                  WEB DEVELOPER
                </Row>
                <Row className="m-0 justify-content-center _font-size-18 _font-Montserrat text-disabled">
                  Nulla hendrerit nunc ligula, vitae porta arcu commodo eget.
                  Donec euismod, neque id ornare fermentum, nisl dolor malesuada
                  magna, sed pellentesque turpis justo vitae quam. Integer nibh
                  lacus, tempor sed velit id, congue rutrum magna. Aenean ac
                  nulla sodales, aliquet nisl id, aliquet ante. Ut sit amet
                  commodo felis, vitae luctus magna.
                </Row>
              </Col>
              <Col xs={12} sm={6}>
                <Row className="m-0 mt-2 mb-5 justify-content-center">
                  <Image
                    width={200}
                    height={200}
                    className="align-self-center mr-3"
                    src="https://pngimage.net/wp-content/uploads/2018/06/profile-png-icon-2.png"
                  />
                </Row>
                <Row className="m-0 mt-3 justify-content-center _font-size-24 _font-Montserrat">
                  Franklin Gonzalez
                </Row>
                <Row className="m-0 mb-4 justify-content-center _font-size-16 _font-Montserrat text-primary text-weight-bold">
                  WEB DEVELOPER
                </Row>
                <Row className="m-0 justify-content-center _font-size-18 _font-Montserrat text-disabled">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas dapibus rhoncus tincidunt. Cras porta nisi et nisl
                  laoreet, et egestas elit congue. Pellentesque habitant morbi
                  tristique senectus et netus et malesuada fames ac turpis
                  egestas. Nam efficitur tellus lorem, vitae dapibus lacus
                  tincidunt volutpat. Nulla hendrerit nunc ligula, vitae porta
                  arcu commodo eget.
                </Row>
              </Col>
            </Row>
          </Container>
        </Section>
      </>
    )
  }
}
