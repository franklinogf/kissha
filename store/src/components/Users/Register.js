import React, { Fragment, useState } from "react"
import Section from "../Layout/Section"
import { Form, Row, Col, FormLabel } from "react-bootstrap"
import styled from "styled-components"
import Btn from "../Buttons/Button"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const Register = () => {
  /*temporal data*/
  const emailVault = ["1@emai.com", "2@email.com"]

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [nameStatus, setNameStatus] = useState()

  const handleEmail = e => {
    //temp variable of the state (u cant setState multiple times in a call)
    let tmpEmail = e.target.value
    let count = 0

    //empty evaluation
    if(tmpEmail === ""){
      setEmail("")
      return
    }

    //invalid evaluation
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tmpEmail)) {
      setEmail("invalid")
      return
    }
    //do the fetch here

    //exist evaluation
    emailVault.map(
      iteratedEmail => tmpEmail === iteratedEmail && (count++)
    )
    if (count>0) {
     setEmail("exist")
      return
    } else {
      setEmail("ok")
      return
    }
  }

  const handlePassword = e => {
    let tmpPass = e.target.value

    //empty and invalid evaluation
    if(tmpPass === ""){
      setPassword("")
      return
    }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(tmpPass)){
      setPassword("invalid")
      return
    }else{
      setPassword("ok")
    }
  }

  const handleName = e => {}

  return (
    <Fragment>
      <Section.Header title="Sign In" fontSize={32} />
      <Form>
        <Form.Group controlId="email" className="position-relative">
          <FormInput
            type="email"
            placeholder="Email Address"
            className={`py-2 _input 
            ${
              email == "invalid" || email == "exist"
                ? "border-danger"
                : email == "ok"
                ? "border-success"
                : ""
            }
            `}
            onBlur={handleEmail}
          />
          <Form.Label className="_label">Email Address</Form.Label>
          {email == "invalid" && (
            <Form.Text className="text-danger">Invalid email.</Form.Text>
          )}
          {email == "exist" && (
            <Form.Text className="text-danger">
              This email is already in use.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="password" className="my-4 position-relative">
          <FormInput
            type="password"
            placeholder="Password"
            className="_input"
          />
          <Form.Label className="_label">Password</Form.Label>
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-4">
          <FormInput
            type="password"
            placeholder="Confirm Password"
            className="_font-Montserrat _font-size-14"
          />
        </Form.Group>
        <Form.Group controlId="firstName" className=" my-4 position-relative">
          <FormInput
            type="text"
            placeholder="First Name"
            className="py-2 _input"
          />
          <Form.Label className="_label">First Name</Form.Label>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="lastName" className="my-4 position-relative">
          <FormInput
            type="email"
            placeholder="Last Name"
            className="py-2 _input"
          />
          <Form.Label className="_label">Last Name</Form.Label>
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
    </Fragment>
  )
}

export default Register
