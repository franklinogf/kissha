import React from "react"
import { Link } from "gatsby"
import { Row, Col, Card } from "react-bootstrap"
import "../../css/main.css"

const Footer = () => {
  return (
    <div>
      <Row className="justify-content-center fTop">
        <Col className="px-3 fCard" md={3}>
          <Card.Title className="text-white f-card-title">
            <span className="position-relative">
              About Us
              <div className="position-absolute w-100 mt-1 f-card-br "></div>
            </span>
          </Card.Title>
          <Card.Text className="text-white mt-3">
            Creating an online store that has everything a girl might need for
            the daily skincare routine is not an easy feat. First thing, you'll
            need to have a great team to accomplish that, just as well as
            awesome pricing policy & huge range of top-quality items!
          </Card.Text>
        </Col>
        <Col className="px-3 fCard" md={3}>
          <Card.Title className="text-white f-card-title">
            <span className="position-relative">
              Categories
              <div className="position-absolute w-100 mt-1 f-card-br "></div>
            </span>
          </Card.Title>
          <Col>
            <Row>
              <Link className="text-white py-1 h-p">Body Care</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Brows</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Eyes</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Face</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Lips</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Skin Care</Link>
            </Row>
          </Col>
        </Col>
        <Col className="px-3 fCard" md={3}>
          <Card.Title className="text-white f-card-title">
            <span className="position-relative">
              Information
              <div className="position-absolute w-100 mt-1 f-card-br "></div>
            </span>
          </Card.Title>
          <Col>
            <Row>
              <Link className="text-white py-1 h-p">About</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Contact</Link>
            </Row>
            <Row>
              <Link className="text-white py-1 h-p">Privacy Policy</Link>
            </Row>
          </Col>
        </Col>
        <Col className="px-3 fCard" md={3}>
          <Card.Title className="text-white f-card-title">
            <span className="position-relative">
              Social & Contact
              <div className="position-absolute w-100 mt-1 f-card-br "></div>
            </span>
          </Card.Title>
          <div>
            <Row>
              <Link className="text-white h-p">
                <span class="social-icon facebook b-block">f</span>
              </Link>
            </Row>
            <Row>
              <Link className="text-white h-p">
                <span class="social-icon twitter">t</span>
              </Link>
            </Row>
            <Row>
              <Link className="text-white h-p">
                <span class="social-icon instagram">c</span>
              </Link>
            </Row>
            <Row>
              <Link className="text-white h-p">
                <span class="social-icon email">E</span>
              </Link>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="px-2 justify-content-center fBottom">
        <Col className="mt-3 f-rights" md={6}>
          © 2020&nbsp;KISSHA. ALL RIGHT RESERVED.
        </Col>
        <Col className="mt-3 f-rights text-right" md={3}>
          Website made by Franklin Gonzales & Miguel Angel
        </Col>
      </Row>
    </div>
  )
}

export default Footer
