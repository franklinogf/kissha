import React, { useState } from "react"
import Section from "../Layout/Section"
import { Form, Row, Col, Alert, Collapse } from "react-bootstrap"
import PulseLoader from "react-spinners/PulseLoader"
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
    //block part
    setLoginFail({ status: false })

    // if everything ok
    setLoading(true)

    AxiosClient.post("/login", user)
      .then(response => {
        //Login Success
        console.log(response.data)
        UserStore.setUser({ firstName: "Loading..." })
        UserStore.setLogin(response.data.status)
        setLoading(false)
        navigate("/", { replace: true })
      })
      .catch(err => {
        //Login fail
        setLoading(false)
        setLoginFail({
          status: true,
          message: "Wrong Credentials",
        })
      })
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
          <Col xs={12} lg={4} className="d-flex justify-content-center align-self-center">
            {!isLoading ? (
              <Btn onClick={handleLogin} size="lg" fontSize={16}>
                Login
              </Btn>
            ) : (
              <div className="d-block h-100 justify-content-center">
                <PulseLoader size={16} color={"#FF758C"} loading />
              </div>
            )}
          </Col>
          <Col xs={12} lg={8} className="pl-0">
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
