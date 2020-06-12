import React, { useState } from "react"
import Section from "../Layout/Section"
import { Form, Spinner, Alert,Collapse } from "react-bootstrap"
import Btn from "../Buttons/Button"
import EmailInput from "../Inputs/EmailInput"
import PasswordInput from "../Inputs/PasswordInput"
import NameInput from "../Inputs/NameInput"
import AxiosClient from "../../config/axios"
import { navigate } from "gatsby"

const Register = () => {
  //stylish states
  const [loeadingBtn, setLoadingBtn] = useState(false)
  const [submitWarning, setSubmitWarning] = useState(false)

  // value states
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
    setLoadingBtn(true)
    //check validations
    if (
      email === "ok" &&
      password === "ok" &&
      firstNameStatus === "ok" &&
      lastNameStatus === "ok"
    ) {
      //POST REQUEST
      AxiosClient.post("/users", newUser)
      .then(response => {
        //Everithig done, redirect
        console.log(response)
        navigate('/')
      })
      .catch(err=>{
        console.log("there was an error in the server, try in another time...")
      })
    } else {
      //GENERATE ALERT WRONG INFO
      setLoadingBtn(false)
      setSubmitWarning(true)
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
        <div className="d-flex justify-content-center mb-3">
          <Btn onClick={handleSubmit} size="lg" fontSize={16}>
            {!loeadingBtn ? (
              "Sign Up"
            ) : (
              <Spinner animation="border" size="sm" />
            )}
          </Btn>
        </div>
        <div>
                <Collapse in={submitWarning}>
                <div id="example-collapse-text">
                <Alert
              variant="danger"
              onClose={() => setSubmitWarning(false)}
              dismissible
            >
              <Alert.Heading>Something 's wrong!</Alert.Heading>
              <p>
                  All the fields needs to be filled.
                  please check it before sign up.
              </p>
            </Alert>
                </div>

              </Collapse>

          
        </div>
      </Form>
    </div>
  )
}

export default Register
