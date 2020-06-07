import React, { Component } from "react"
import PageTitle from "../components/Layout/PageTitle"
import { Row, Col, Container } from "react-bootstrap"
import ProductRow from "../components/Products/ProductRow"
import { sortByDate } from "../helpers/functions"
import { API_URL } from "../helpers/config"

export default class products extends Component {
  state = {
    products: [],
  }

  componentDidMount = () => {
    fetch(`${API_URL}/products`)
      .then(data => data.json())
      .then(products => {
        const sortedProducts = sortByDate(products.data)
        this.setState({ products: sortedProducts.slice(0,9) })
      })
  }

  render() {
    return (
      <>
      <PageTitle title={this.props.location.state.option.toUpperCase()}/>
      <Container className="mt-5">
        <Row>
          <Col xs={4}></Col>
          <Col xs={8}>
            <ProductRow icon={false} cols={3} products={this.state.products} />
          </Col>
        </Row>
      </Container>
      </>
    )
  }
}
