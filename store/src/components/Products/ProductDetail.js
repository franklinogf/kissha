import React from "react"
import { Card, ListGroup, Form, Row, Col } from "react-bootstrap"
import InputSpinner from "../Products/InputSpinner"
import SocialIcons from "../Layout/SocialIcons"
import AddToCartButton from "../Buttons/AddToCartButton"

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
    }
    this.handleIncrementQuantity = this.handleIncrementQuantity.bind(this)
    this.handleDecrementQuantity = this.handleDecrementQuantity.bind(this)
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
    
    
  }
  handleIncrementQuantity() {
    if (this.state.quantity < this.props.product.stock) {
      this.setState({ quantity: this.state.quantity + 1 })
    }
  }

  handleDecrementQuantity() {
    const { quantity } = this.state
    if (quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 })
    }
  }
  handleChangeQuantity(quantity) {
    if (!isNaN(quantity)) {
      if (Number(quantity) !== 0) {
        if (Number(quantity) > this.props.product.stock) {
          this.setState({ quantity: this.props.product.stock })
        } else {
          this.setState({ quantity: Number(quantity) })
        }
      }
    }
  }

  render() {
    const { name, brand, model, price, description, stock, id } = this.props.product
    return (
      <Card className="border-0">
        <Card.Title className="_section-title font-weight-normal _font-size-32 mb-3">
          {name}
        </Card.Title>
        <ListGroup
          horizontal
          className="_font-Montserrat _font-size-16 mb-2  border-0"
        >
          <ListGroup.Item className="pl-0  border-0">Brand:</ListGroup.Item>
          <ListGroup.Item className="text-primary  border-0">
            {brand}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup
          horizontal
          className="_font-Montserrat _font-size-16 mb-2  border-0"
        >
          <ListGroup.Item className="pl-0  border-0">Model:</ListGroup.Item>
          <ListGroup.Item className="text-primary  border-0">
            {model}
          </ListGroup.Item>
        </ListGroup>
        <Card.Text className="_font-Montserrat _font-size-28 my-2">
          ${price}
        </Card.Text>
        <Card.Text className="_font-Montserrat _font-size-16 mt-2 mb-3">
          {description}
        </Card.Text>
        <Form>
          <Form.Group controlId="variant" className="mb-3">
            <Form.Label>SIZE</Form.Label>
            <Form.Control as="select">
              <option>4.2 oz</option>
              <option>7 oz</option>
              <option>8 oz</option>
            </Form.Control>
          </Form.Group>
          <p>QUANTITY</p>
          <InputSpinner
            quantity={this.state.quantity}
            handleIncrement={this.handleIncrementQuantity}
            handleDecrement={this.handleDecrementQuantity}
            onChangeQuantity={this.handleChangeQuantity}
            max={stock}
          />
        </Form>
        <Card.Body className="pl-0 mb-3">
          <AddToCartButton icon producId={id} amount={this.state.quantity}/>
        </Card.Body>
        <Row>
          <Col xs={3}>
            <SocialIcons email={false} baseColor="text-black-50" />
          </Col>
        </Row>
      </Card>
    )
  }
}

export default ProductDetail
