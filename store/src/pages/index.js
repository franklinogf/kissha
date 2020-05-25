import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import Section from "../components/Layout/Section"
import { Row, Col, Container, Button } from "react-bootstrap"
import ImageCard from "../components/ImageCard/ImageCard"
import { ProductRow } from "../components/Products/ProductRow"

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount(){
    fetch("http://localhost:5000/products")
    .then(data => data.json())
    .then(products => this.setState({products: products.data}))
  }

  render() {
    return (
      <MainLayout>
        <Section>
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
            <ProductRow products={this.state.products}/>
          </Container>
        </Section>
      </MainLayout>
    )
  }
}
