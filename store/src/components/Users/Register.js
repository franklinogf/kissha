import React from "react"
import Section from "../Layout/Section"
import { Form } from "react-bootstrap"
import styled from "styled-components"
import Btn from "../Buttons/Button"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const Register = () => {
  return (
    <div className="bg-light rounded-lg p-3" style={{ width: "23rem" }}>
      <Section.Header title="Sign Up" fontSize={32} />
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
        <Btn size="lg" fontSize={16}>
          Sign Up
        </Btn>
      </Form>
    </div>
  )
}

export default Register
