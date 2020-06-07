import React, { useState } from "react"
import Section from "../Layout/Section"
import { Form } from "react-bootstrap"
import Btn from "../Buttons/Button"
import EmailInput from "../Inputs/EmailInput"
import PasswordInput from "../Inputs/PasswordInput"
import NameInput from "../Inputs/NameInput"
import AxiosClient from "../../config/axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstNameStatus, setFirstNameStatus] = useState("")
  const [lastNameStatus, setLastNameStatus] = useState("")
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  })

  //
  const handleNewUser = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    //check validations
    if (
      email === "ok" &&
      password === "ok" &&
      firstNameStatus === "ok" &&
      lastNameStatus === "ok"
    ) {
      //POST REQUEST
      AxiosClient.post('/users',newUser)
        .then(response=>{
          console.log(response)
        })
    } else {
      //GENERATE ALERT WRONG INFO
    }
  }

  return (
    <div className="bg-light rounded-lg p-3" style={{ width: "23rem" }}>
      <Section.Header title="Sign Up" fontSize={32} />
      <Form>
        <EmailInput
          email={email}
          setEmail={setEmail}
          onChangeHandler={handleNewUser}
        />
        <PasswordInput
          password={password}
          setPassword={setPassword}
          onChangeHandler={handleNewUser}
          enableConfirm
        />
        <NameInput
          idName="firstName"
          labelName="First Name"
          nameStatus={firstNameStatus}
          setNameStatus={setFirstNameStatus}
          onChangeHandler={handleNewUser}
        />
        <NameInput
          idName="lastName"
          labelName="Last Name"
          nameStatus={lastNameStatus}
          setNameStatus={setLastNameStatus}
          onChangeHandler={handleNewUser}
        />
        <Btn onClick={handleSubmit} size="lg" fontSize={16}>
          Sign Up
        </Btn>
      </Form>
    </div>
  )
}

export default Register
