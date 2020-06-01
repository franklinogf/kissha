import React from "react"
import Section from "../Layout/Section"
import { Form, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Btn from "../Buttons/Button"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const Register = () => {
  return (
    <div>
      <Section.Header title="Sign In" fontSize={32} />
      <Form>
        <Form.Group controlId="email">
          <FormInput
            type="email"
            placeholder="Email Address"
            className="_font-Montserrat _font-size-14 py-2"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="password" className="mb-4">
          <FormInput
            type="password"
            placeholder="Password"
            className="_font-Montserrat _font-size-14"
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-4">
          <FormInput
            type="password"
            placeholder="Confirm Password"
            className="_font-Montserrat _font-size-14"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <FormInput
            type="email"
            placeholder="First Name"
            className="_font-Montserrat _font-size-14 py-2"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="email">
          <FormInput
            type="email"
            placeholder="Last Name"
            className="_font-Montserrat _font-size-14 py-2"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Row className="justify-content-between">
          <Col xs={12} lg={4} className="align-self-end">
            <Btn size="lg" fontSize={16}>
              Sign In
            </Btn>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Register
