import React from "react"
import { Form, Col, Button } from "react-bootstrap"

export const InputSpinner = props => {
  const mb = props.marginBottom || "mb-4"
  return (
    <Form.Row className={mb}>
      <Col xs={12}>
      <Form.Label>QUANTITY</Form.Label>
      </Col>
      <Col xs={1} className="m-0 pr-0 d-flex justify-content-end">
        <Button
          variant="dark"
          className="font-weight-bold _font-size-20 py-0 rounded-left w-100"
        >
          -
        </Button>
      </Col>
      <Col xs={1} className="px-0">
        <Form.Control placeholder="1" className="rounded-0 text-right" />
      </Col>
      <Col xs={1} className="pl-0 d-flex justify-content-start">
        <Button
          variant="dark"
          className="font-weight-bold _font-size-20 py-0 rounded-right w-100"
        >
          +
        </Button>
      </Col>
    </Form.Row>
  )
}
