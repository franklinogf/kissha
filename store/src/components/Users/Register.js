import React, { useState, useRef } from "react"
import Section from "../Layout/Section"
import { Form } from "react-bootstrap"
import styled from "styled-components"
import Btn from "../Buttons/Button"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const Register = () => {
  /*temporal data*/
  const emailVault = ["1@emai.com", "2@email.com"]

  //STATES
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [nameStatus, setNameStatus] = useState("")
  const [lastNameStatus, setLastNameStatus] = useState("")

  //REFS
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  //HANDLERS
  const handleEmail = e => {
    let tmpEmail = e.target.value
    let count = 0

    if (tmpEmail === "") {
      setEmail("")
      return
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tmpEmail)) {
      setEmail("invalid")
      return
    }
    //do the fetch here

    //exist evaluation
    emailVault.map(iteratedEmail => tmpEmail === iteratedEmail && count++)
    if (count > 0) {
      setEmail("exist")
      return
    } else {
      setEmail("ok")
      return
    }
  }

  const handlePassword = () => {
    //taking refs
    let tmpPass = passwordRef.current.value
    let tmpConfirmPass = confirmPasswordRef.current.value

    //empty and invalid evaluation for PASSWORD
    tmpPass === ""
      ? setPassword("")
      : !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(tmpPass)
      ? setPassword("invalid")
      : setPassword("ok")

    //match evaluation CONFIRM PASSWORD
    tmpPass !== "" && tmpConfirmPass !== ""
      ? tmpPass !== tmpConfirmPass
        ? setConfirmPassword("invalid")
        : setConfirmPassword("ok")
      : setConfirmPassword("")
  }

  const onChangePassword = () => {
    const tmpPass = passwordRef.current.value 
    let tmpConfirmPass = confirmPasswordRef.current.value
    
    password === "invalid" &&
     (tmpPass !== "")
      ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(tmpPass) &&
        setPassword("ok")
      : setPassword("")

      confirmPassword === "invalid" &&
      (tmpConfirmPass !== "")
       ? tmpPass === tmpConfirmPass &&
         setConfirmPassword("ok")
       : setConfirmPassword("")
  }

  const handleName = e => {
    const tmpInput = e.target.value

    if (tmpInput === "") {
      setNameStatus("")
      return
    }

    if (!/^[a-zA-Z ]+$/.test(tmpInput)) {
      setNameStatus("invalid")
      return
    }else{
      setNameStatus("ok")
    }
  }

  const handleLastName = e => {
    const tmpInput = e.target.value

    if (tmpInput === "") {
      setNameStatus("")
      return
    }

    if (!/^[a-zA-Z ]+$/.test(tmpInput)) {
      setLastNameStatus("invalid")
      return
    }else{
      setLastNameStatus("ok")
    }
  }

  return (
    <div className="bg-light rounded-lg p-3" style={{ width: "23rem" }}>
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
          <Form.Label className="_label-inside-to-outside">
            Email Address
          </Form.Label>
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
            className={`py-2 _input 
            ${
              password == "invalid"
                ? "border-danger"
                : password == "ok"
                ? "border-success"
                : ""
            }
            `}
            onBlur={handlePassword}
            onChange={onChangePassword}
            ref={passwordRef}
          />
          <Form.Label className="_label-inside-to-outside">Password</Form.Label>
          {password == "invalid" && (
            <Form.Text className="text-danger">Invalid Password. </Form.Text>
          )}
        </Form.Group>
        <Form.Group
          controlId="confirmPassword"
          className="mb-4 position-relative"
        >
          <FormInput
            type="password"
            placeholder="Confirm Password"
            className={`py-2 _input 
            ${
              confirmPassword === "invalid"
                ? "border-danger"
                : confirmPassword === "ok"
                ? "border-success"
                : ""
            }
            `}
            onBlur={handlePassword}
            onChange={onChangePassword}
            ref={confirmPasswordRef}
          />
          <Form.Label className="_label-inside">Confirm Password</Form.Label>
          {confirmPassword == "invalid" && (
            <Form.Text className="text-danger">
              Password doesn't match.{" "}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="firstName" className=" my-4 position-relative">
          <FormInput
            type="text"
            placeholder="First Name"
            className={`py-2 _input 
            ${
              nameStatus == "invalid"
                ? "border-danger"
                : nameStatus == "ok"
                ? "border-success"
                : ""
            }
            `}
            onBlur={handleName}
          />
          <Form.Label className="_label-inside-to-outside">
            First Name
          </Form.Label>
          {nameStatus == "invalid" && (
            <Form.Text className="text-danger">Invalid Name, don't use Numbers or special characters </Form.Text>
          )}
        </Form.Group>
        <Form.Group controlId="lastName" className="my-4 position-relative">
          <FormInput
            type="email"
            placeholder="Last Name"
            className={`py-2 _input 
            ${
              lastNameStatus == "invalid"
                ? "border-danger"
                : lastNameStatus == "ok"
                ? "border-success"
                : ""
            }
            `}
            onBlur={handleLastName}
          />
          <Form.Label className="_label-inside-to-outside">
            Last Name
          </Form.Label>
          {lastNameStatus == "invalid" && (
            <Form.Text className="text-danger">Invalid Last Name, don't use Numbers or special characters </Form.Text>
          )}
        </Form.Group>
        <Btn size="lg" fontSize={16}>
          Sign Up
        </Btn>
      </Form>
    </div>
  )
}

export default Register
