import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "../../css/footer.css"

const Footer = () => {
  return (
    <>
      <Container fluid className="fTop px-5">
        <Row className="justify-content-center text-white  px-5">
          <Col className="mt-5 mt-lg-0 px-3" md={6} lg={3}>
            <Row>
              <Col xs={12}>
                <p className="title pb-1 d-inline-block">About Us</p>
              </Col>
              <Col xs={12}>
                <p className="text-muted">
                  Creating an online store that has everything a girl might need
                  for the daily skincare routine is not an easy feat. First
                  thing, you'll need to have a great team to accomplish that,
                  just as well as awesome pricing policy & huge range of
                  top-quality items!
                </p>
              </Col>
            </Row>
          </Col>
          <Col
            className="mt-5 mt-lg-0 px-3"
            md={{ span: 4, offset: 2 }}
            lg={{ span: 2, offset: 1 }}
          >
            <Row>
              <Col xs={12}>
                <p className="title pb-1 d-inline-block">Categories</p>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Body Care
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Brows
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Eyes
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Face
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Lips
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Skin Care
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mt-5 mt-lg-0 px-3" md={6} lg={3}>
            <Row>
              <Col xs={12}>
                <p className="title pb-1 d-inline-block">Information</p>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      About
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Contact
                    </Link>
                  </Col>
                  <Col xs={12}>
                    <Link to="/" className="text-white py-1 h-p">
                      Privacy Policy
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="mt-5 mt-lg-0 px-3" md={6} lg={3}>
            <Row>
              <Col xs={12}>
                <p className="title pb-1 d-inline-block">Social & Contact</p>
              </Col>
              <Col xs={12}>
                <Row>
                  <Col>
                    <Link to="/" className="h-p">
                      <FontAwesomeIcon
                        className="facebook"
                        icon={faFacebookSquare}
                        size="2x"
                      />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/" className="h-p">
                      <FontAwesomeIcon
                        className="twitter"
                        icon={faTwitterSquare}
                        size="2x"
                      />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/" className="h-p">
                      <FontAwesomeIcon
                        className="instagram"
                        icon={faInstagramSquare}
                        size="2x"
                      />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/" className="h-p">
                      <FontAwesomeIcon
                        className="email"
                        icon={faEnvelope}
                        size="2x"
                      />
                    </Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="fBottom px-5">
        <Row className="px-2 justify-content-between ">
          <Col className="mt-3">
            <p className="ml-3">© 2020&nbsp;KISSHA. ALL RIGHT RESERVED.</p>
          </Col>
          <Col className="mt-3">
            <p className="text-right mr-3">
              Website made by Franklin Gonzales & Miguel Angel
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
