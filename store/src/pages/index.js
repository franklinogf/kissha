import React, { Component } from "react"
import Layout from "../components/Layout/Layout"
import { Row, Col, Card, Container } from "react-bootstrap"
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import Logo from "../components/Logo/logo.png"
import ImageCard from "../components/ImageCard/ImageCard"

export default class index extends Component {
     
  render() {
    return (
      <div>
        <Layout.Main>
          <Container>
          <Row className="text-center d-flex row-cols-1 row-cols-lg-3 pb-5 mt-5">
            <Col className="mt-3">
              <ImageCard src={image1}/>
            </Col>
            <Col className="mt-3">
            <ImageCard src={image2}/>
            </Col>
            <Col className="mt-3">
            <ImageCard src={image3}/>
            </Col>
          </Row>
          </Container>

          <Card className="bg-light text-dark" style={{ height: 496 }}>
            <Card.Img src={Logo} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Container fluid className="bg-info p-5" style={{ height: 496 }}>
            <h1>Space 1</h1>
            <p>
              Qui ipsum enim labore aliqua fugiat laboris nisi pariatur tempor
              deserunt nisi occaecat mollit ipsum.
            </p>
          </Container>
        </Layout.Main>
      </div>
    )
  }
}
