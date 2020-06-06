import React from "react"
import Section from "../Layout/Section"
import { Form } from "react-bootstrap"
import Btn from "../Buttons/Button"
import EmailInput from "../Inputs/EmailInput"
import PasswordInput from "../Inputs/PasswordInput"
import NameInput from "../Inputs/NameInput"

const Register = () => {
  return (
    <div className="bg-light rounded-lg p-3" style={{ width: "23rem" }}>
      <Section.Header title="Sign Un" fontSize={32} />
      <Form>
        <EmailInput/>
        <PasswordInput enableConfirm/>
        <NameInput idName="firstName" labelName="First Name"/>
        <NameInput idName="lastName" labelName="Last Name"/>
        <Btn size="lg" fontSize={16}>
          Sign Up
        </Btn>
      </Form>
    </div>
  )
}

export default Register
