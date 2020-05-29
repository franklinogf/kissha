import React from "react"
import { Card, ListGroup, Form } from "react-bootstrap"
import { InputSpinner } from "../Products/InputSpinner"
import Button  from "../Buttons/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 const ProductDetail = props => {
  return (
    <Card className="border-0">
      <Card.Title className="_section-title font-weight-normal _font-size-32 mb-3">
        Borghese Effetto Immediato Spa Soothing Tonic
      </Card.Title>
      <ListGroup horizontal className="_font-Montserrat _font-size-16 mb-2  border-0">
        <ListGroup.Item className="pl-0  border-0">Brand:</ListGroup.Item>
        <ListGroup.Item className="text-primary  border-0">Loreal</ListGroup.Item>
      </ListGroup>
      <ListGroup horizontal className="_font-Montserrat _font-size-16 mb-2  border-0">
        <ListGroup.Item className="pl-0  border-0">Model:</ListGroup.Item>
        <ListGroup.Item className="text-primary  border-0">Active</ListGroup.Item>
      </ListGroup>
      <Card.Text className="_font-Montserrat _font-size-28 my-2">
        $50.00
      </Card.Text>
      <Card.Text className="_font-Montserrat _font-size-16 mt-2 mb-3">
        Even though it may seem like there are too many choices for your night
        regiment skincare out there, in reality there are only a few good ones –
        with this one leading the way.
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
        <InputSpinner></InputSpinner>
      </Form>
      <Card.Text className="_font-Montserrat _font-size-16 mt-2 mb-1">
        AVAILABLE QUANTITY
      </Card.Text>
      <Card.Text className="_font-Montserrat _font-size-16 mt-1 mb-4 text-primary">
        250
      </Card.Text>
      <Card.Body className="pl-0 mb-3">
        <Button
          size="lg"
          variant="primary"
          fontSize="18"
          text="Add to cart"
          icon
        ></Button>
      </Card.Body>
      <ListGroup horizontal>
        <ListGroup.Item  className="px-1 border-0">
          <FontAwesomeIcon
            className="facebook text-facebook"
            icon={["fab", "facebook"]}
            size="2x"
          />
        </ListGroup.Item>
        <ListGroup.Item className="px-2 border-0">
          <FontAwesomeIcon
            className="twitter text-twitter"
            icon={["fab", "twitter"]}
            size="2x"
          />
        </ListGroup.Item>
        <ListGroup.Item className="px-1 border-0">
          <FontAwesomeIcon
            className="instagram text-instagram"
            icon={["fab", "instagram"]}
            size="2x"
          />
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}

export default ProductDetail
