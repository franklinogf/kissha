import React from "react"
import Section from "../Layout/Section"
import { Form, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import Btn from "../Buttons/Button"
import { Link } from "gatsby"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const Login = () => {
  return (
    <div>
      <Section.Header title="Login" fontSize={32} />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <FormInput
            type="email"
            placeholder="Enter email or number phone"
            className="_font-Montserrat _font-size-14 py-2"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-4">
          <FormInput
            type="password"
            placeholder="Password"
            className="_font-Montserrat _font-size-14"
          />
        </Form.Group>
        <Row className="justify-content-between">
          <Col xs={12} lg={2} className="align-self-end">
            <Btn size="lg" fontSize={16}>
              Login
            </Btn>
          </Col>
          <Col xs={12} lg={9}>
            {" "}
            <Link
              to=""
              className="float-right _font-size-16 _font-Montserrat text-decoration-none mb-1"
            >
              Forgot your password?
            </Link>
            <Link
              to=""
              className="float-right _font-size-16 _font-Montserrat text-decoration-none"
            >
              Don't have an account yet?
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default Login
