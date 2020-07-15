import React, { useState, useEffect, Fragment } from "react"
import { Row, Col, Container, Form, ButtonGroup } from "react-bootstrap"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import AxiosClient from "../config/axios"
import Section from "../components/Layout/Section"
import ProductRow from "../components/Products/ProductRow"
import PageTitle from "../components/Layout/PageTitle"
import { observer } from "mobx-react"

const products = observer(() => {

  //common states
  const [listOfProducts, setListOfProducts] = useState([])

  //effects
  useEffect(() => {
    AxiosClient.get("/products").then(response => {
      console.log(response.data.data)
      setListOfProducts(response.data.data.splice(0, 6))
    })
  })

  return (
    <Fragment>
      <PageTitle title="Products" />
      <Section>
        <Container fluid>
          <Row>
            <Col xs={12} sm={3}>
              <Row className="mb-4">
                <Col xs={12}>
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    CATEGORIES
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        New Arrivals
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Make Up
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Skin Care
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Lips
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Face
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Eyes
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    FILTER BY
                  </p>
                </Col>
                <Col xs={12}>
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control placeholder="Min" />
                      </Col>
                      -
                      <Col>
                        <Form.Control placeholder="Max" />
                      </Col>
                    </Form.Row>
                    <Form.Row className="m-0 mt-4">
                      <Form.Control as="select" defaultValue="Brands...">
                        <option>Brands...</option>
                        <option>L'Oreal</option>
                        <option>Maqnifique</option>
                        <option>Avon</option>
                      </Form.Control>
                    </Form.Row>

                    <Form.Row className="justify-content-between m-0 mt-4 ">
                      <Button type="submit">APPLY</Button>
                      <Button type="submit">CLEAN</Button>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mt-3">
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    INFORMATION
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        About
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Contact
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/products" className="text-dark">
                        Privacy Policy
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={9}>
              {" "}
              <Row className="_font-size-28 _font-Montserrat m-0 mb-4">
                Skin Care
              </Row>
              <Row className="m-0 mb-4">
                <Col xs={12} sm={4}>
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Show</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="6"
                        size="sm"
                        className="rounded-pill"
                      >
                        <option>6</option>
                        <option>12</option>
                        <option>24</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col xs={12} sm={4}>
                  {" "}
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Sorted By</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Oldest First"
                        size="sm"
                        className="rounded-pill"
                      >
                        <option>Oldest First</option>
                        <option>Newest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Name: A-Z</option>
                        <option>Name: Z-A</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex justify-content-center align-self-center pt-2"
                >
                  <ButtonGroup aria-label="Basic example">
                    <Button size="lg" shape="square" variant="primary">
                      1
                    </Button>
                    <Button size="lg" shape="square" variant="disabled">
                      2
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row className="m-0 mb-4">
                <ProductRow cols={3} products={listOfProducts} />
              </Row>
              <Row className="m-0 mb-4">
                <Col xs={12} sm={4}>
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Show</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="6"
                        size="sm"
                        className="rounded-pill"
                      >
                        <option>6</option>
                        <option>12</option>
                        <option>24</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col xs={12} sm={4}>
                  {" "}
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Sorted By</Form.Label>
                      <Form.Control
                        as="select"
                        defaultValue="Oldest First"
                        size="sm"
                        className="rounded-pill"
                      >
                        <option>Oldest First</option>
                        <option>Newest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Name: A-Z</option>
                        <option>Name: Z-A</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex justify-content-center align-self-center pt-2"
                >
                  <ButtonGroup aria-label="Basic example">
                    <Button size="lg" shape="square" variant="primary">
                      1
                    </Button>
                    <Button size="lg" shape="square" variant="disabled">
                      2
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  )
})

export default products
