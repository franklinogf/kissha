import React, { useState } from "react"
import Section from "../Layout/Section"
import { Form, Row, Col, Spinner, Alert, Collapse } from "react-bootstrap"
import Btn from "../Buttons/Button"
import { Link, navigate } from "gatsby"
import CustomInput from "../Inputs/CustomInput"
import AxiosClient from "../../config/axios"
import useStores from "../../hooks/useStores"
import { observer } from "mobx-react"

const Login = observer(() => {
  //globalState
  const { UserStore } = useStores()

  //states
  const [isLoading, setLoading] = useState(false)
  const [loginFail, setLoginFail] = useState({
    status: false,
    message: "",
  })
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  //lifecyle

  //handlers
  const handleUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = e => {
    // if everything ok

    setLoading(true)
    //POST REQUEST
    AxiosClient.post("/login", user).then(response => {
      if (response.data.isLoggedIn) {
        //Correctly logged, proceed to store info
        UserStore.setLogin(response.data)
        //redirect to userProfile or home
        navigate("/")
      } else {
        //Wrong Login, show collapse
        setLoginFail({
          status: true,
          message: response.data.message,
        })
      }
    })
    setLoading(false)
  }

  return (
    <div className="bg-light p-3 rounded-lg" style={{ width: "23rem" }}>
      <Section.Header title="Login" fontSize={32} />
      <Form>
        <CustomInput
          id="email"
          input={["text", null, null, handleUser]}
          label={["Enter Email or Phone Number"]}
        />
        <CustomInput
          id="password"
          input={["password", null, null, handleUser]}
          label={["Password"]}
        />

        <Row className="justify-content-between">
          <Col xs={12} lg={2} className="align-self-end">
            <Btn onClick={handleLogin} size="lg" fontSize={16}>
              {!isLoading ? "Login" : <Spinner animation="border" size="sm" />}
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
        <Collapse in={loginFail.status} className="mt-2">
          <div id="example-collapse-text">
            <Alert
              variant="danger"
              onClose={() =>
                setLoginFail({
                  ...loginFail,
                  status: false,
                })
              }
              dismissible
            >
              <Alert.Heading>Ops!</Alert.Heading>
              <p>{loginFail.message}</p>
            </Alert>
          </div>
        </Collapse>
      </Form>
    </div>
  )
})

export default Login
