import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"

const InputSpinner = props => {
  const mb = props.marginBottom || "mb-4"
  const max = props.max
  
  const [quantity, setQuantity] = useState("hola")

  const handleMoreQuantity = (e) => {
    console.log(quantity.typeof)
    quantity < max && setQuantity(quantity+1)
  }

  const handleLessQuantity = (e) => {
    quantity > 0 && setQuantity(quantity-1)
  }

  const showQ = () =>{
    return quantity
  }

  return (
    <Form.Row className={mb}>
      <Col xs={12}>
  <Form.Label>QUANTITY {max}</Form.Label>
      </Col>
      <Col xs={1} className="m-0 pr-0 d-flex justify-content-end">
        <Button
          variant="dark"
          className="font-weight-bold _font-size-20 py-0 rounded-left w-100"
          onClick={handleLessQuantity}
        >
          -
        </Button>
      </Col>
      <Col xs={1} className="px-0">
        <Form.Control defaultValue={quantity} value={quantity} onChange={showQ} className="rounded-0 text-right" />
      </Col>
      <Col xs={1} className="pl-0 d-flex justify-content-start">
        <Button
          variant="dark"
          className="font-weight-bold _font-size-20 py-0 rounded-right w-100"
          onClick={handleMoreQuantity}
        >
          +
        </Button>
      </Col>
    </Form.Row>
  )
}

export default InputSpinner