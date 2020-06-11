import React, {useState} from "react"
import Section from "../Layout/Section"
import { Form, Row, Col, Spinner } from "react-bootstrap"
import Btn from "../Buttons/Button"
import { Link } from "gatsby"
import CustomInput from '../Inputs/CustomInput'

const Login = () => {

  const [isLoading,setIsLoading] = useState(false)

  //handlers
  const handleSubmit = e =>{
    setIsLoading(true)
  }

  return (
    <div className="bg-light p-3 rounded-lg" style={{ width: "23rem" }}>
      <Section.Header title="Login" fontSize={32} />
      <Form>
        <CustomInput id="emailOrPhone" input={["text"]} label={["Enter Email or Phone Number"]} />
        <CustomInput id="password" input={["password"]} label={["Password"]} />

        <Row className="justify-content-between">
          <Col xs={12} lg={2} className="align-self-end">
            <Btn onClick={handleSubmit} size="lg" fontSize={16}>
            {!isLoading ? (
              "Login"
            ) : (
              <Spinner animation="border" size="sm" />
            )}
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
