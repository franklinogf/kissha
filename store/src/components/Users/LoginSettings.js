import React, { useState } from "react"
import Section from "../Layout/Section"
import {
  Row,
  Col,
  Button as Btn,
  ListGroup,
  Collapse,
  Form,
} from "react-bootstrap"
import Button from "../Buttons/Button"
import styled from "styled-components"
import useStores from "../../hooks/useStores"
import AxiosClient from "../../config/axios"
import EmailInput from "../Inputs/EmailInput"
import CustomInput from "../Inputs/CustomInput"
import PasswordInput from "../Inputs/PasswordInput"
import PulseLoader from "react-spinners/PulseLoader"
import { observer } from "mobx-react"

const StyledDiv = styled.div`
  width: 835px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledRow = styled(Row)`
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`

const LoginSettings = observer(() => {
  //global state
  const { UserStore } = useStores()

  //common state
  const [email, setEmail] = useState("")

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [wrongOldPassword, setWrongOldPassword] = useState(false)
  const [emailStatus, setEmailStatus] = useState("")
  const [passwordStatus, setPasswordStatus] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [collapse, setCollapse] = useState({
    openEmail: false,
    openPassword: false,
  })

  //handlers
  const clearInputs = () => {
    setEmail("")
    setOldPassword("")
    setNewPassword("")
  }

  const handleCollapse = e => {
    const id = e.target.id

    if (e.target.innerText === "X") {
      clearInputs()
      setCollapse({
        ...collapse,
        [id]: false,
      })
    } else {
      if (id === "openEmail") {
        clearInputs()
        setCollapse({
          openEmail: true,
          openPassword: false,
        })
      }
      if (id === "openPassword") {
        clearInputs()
        setCollapse({
          openEmail: false,
          openPassword: true,
        })
      }
    }
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handleOldPassword = e => {
    setOldPassword(e.target.value)
  }

  const handleNewPassword = e => {
    setNewPassword(e.target.value)
  }

  const handleSaveEmail = e => {
    if (emailStatus === "ok") {
      //saving the email
      const emailToSend = { email }

      //loading status
      setIsLoading(true)

      //post data
      AxiosClient.patch(`/users/${UserStore.obtainUser.id}`, emailToSend)
        .then(response => {
          console.log(response)
          //if everything is fine, proceed to change the email
          if (response.data.status) {
            UserStore.setUser({
              ...UserStore.user,
              email: email,
            })
            setCollapse({
              openEmail: false,
              openPassword: false,
            })
            setIsLoading(false)
          } else {
            //email did not change, check why
          }
        })
        .catch(err => {
          //some internal server error, check why
          console.log(err)
        })
    }
  }

  const handleSavePassword = e => {
    if (passwordStatus === "ok") {
      //save the passwords
      const passwordToSend = { oldPassword, newPassword }
      //loading status
      setWrongOldPassword(false)
      setIsLoading(true)

      //post data
      AxiosClient.patch(
        `/users/${UserStore.obtainUser.id}/password`,
        passwordToSend
      )
        .then(response => {
          //if everything is fine, proceed to change the password
          if (response.data.status) {
            setCollapse({
              openEmail: false,
              openPassword: false,
            })
            setIsLoading(false)
          } else {
            //password did not change, check why
            setWrongOldPassword(true)
            setIsLoading(false)
          }
        })
        .catch(err => {
          //some internal server error, check why
          console.log(err)
        })
    }
  }

  return (
    <Section bg=" _color-candy-blue" height={300}>
      <StyledDiv>
        <Row className="mx-0 my-1 justify-content-center">
          <h2 className="_font-size-22 _font-Montserrat font-italic">
            Login & Security
          </h2>
        </Row>

        <ListGroup className="w-75 mx-auto rounded-lg _font-Montserrat _font-size-13 my-4">
          <ListGroup.Item>
            {" "}
            <StyledRow>
              <Col xs={10}>
                <Row className="font-weight-light">E-Mail</Row>
                <Row>{UserStore.obtainUser.email}</Row>
              </Col>
              <Col
                xs={2}
                className="align-self-center d-flex justify-content-center"
              >
                <Btn
                  id="openEmail"
                  onClick={handleCollapse}
                  variant={`outline-${collapse.openEmail ? "danger" : "info"}`}
                  size="sm"
                  className="shadow-none"
                >
                  {collapse.openEmail ? "X" : "Edit"}
                </Btn>
              </Col>
            </StyledRow>
          </ListGroup.Item>
          <Collapse in={collapse.openEmail}>
            <div>
              <ListGroup.Item className="bg-light">
                <Row className="align-items-center">
                  <Col xs={9}>
                    <Form>
                      <EmailInput
                        email={emailStatus}
                        setEmail={setEmailStatus}
                        onChangeHandler={handleEmail}
                        value={email}
                        inputMargin="mt-2 mb-0"
                        inputSize={43}
                        labelEffect="inside"
                      />
                    </Form>
                  </Col>
                  <Col xs={3} className="d-flex justify-content-center">
                    {!isLoading ? (
                      <Btn
                        id="email"
                        variant={`outline-success`}
                        size="md"
                        className="shadow-none"
                        onClick={handleSaveEmail}
                      >
                        Save Email
                      </Btn>
                    ) : (
                      <div className="d-block">
                        <PulseLoader size={16} color={"#28A745"} loading />
                      </div>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            </div>
          </Collapse>
          <ListGroup.Item>
            {" "}
            <StyledRow>
              <Col xs={10}>
                <Row className="font-weight-light">Password</Row>
                <Row>**********</Row>
              </Col>
              <Col
                xs={2}
                className="align-self-center d-flex justify-content-center"
              >
                <Btn
                  id="openPassword"
                  onClick={handleCollapse}
                  variant={`outline-${
                    collapse.openPassword ? "danger" : "info"
                  }`}
                  size="sm"
                  className="shadow-none"
                >
                  {collapse.openPassword ? "X" : "Edit"}
                </Btn>
              </Col>
            </StyledRow>
          </ListGroup.Item>
          <Collapse in={collapse.openPassword}>
            <div>
              <ListGroup.Item className="bg-light">
                <Row className="align-items-center">
                  <Col xs={9}>
                    <Form>
                      <CustomInput
                        id="oldPassword"
                        inputMargin="mt-2 mb-0"
                        inputSize={43}
                        value={oldPassword}
                        input={["password", null, null, handleOldPassword]}
                        label={["Old Password", "inside"]}
                        collapses={[
                          [
                            "Your Actual Password is Incorrect, check it first to change the password",
                            wrongOldPassword,
                          ],
                        ]}
                      />
                      <PasswordInput
                        password={passwordStatus}
                        setPassword={setPasswordStatus}
                        onChangeHandler={handleNewPassword}
                        value={newPassword}
                        passwordPlaceholder="New Password"
                        inputMargin="mt-2 mb-0"
                        inputSize={43}
                        labelEffect="inside"
                      />
                    </Form>
                  </Col>
                  <Col xs={3} className="d-flex justify-content-center">
                    {!isLoading ? (
                      <Btn
                        id="password"
                        variant={`outline-success`}
                        size="sm"
                        className="shadow-none"
                        onClick={handleSavePassword}
                      >
                        Change Password
                      </Btn>
                    ) : (
                      <div className="d-block">
                        <PulseLoader size={16} color={"#28A745"} loading />
                      </div>
                    )}
                  </Col>
                </Row>
              </ListGroup.Item>
            </div>
          </Collapse>
        </ListGroup>

        <Row className="mx-auto pr-2 justify-content-end w-75">
          <Button size="md" fontSize={14} padding=" py-2">
            Save Changes
          </Button>
        </Row>
        <Row className="mx-0 mt-4">
          <p className="font-weight-bold">
            Fields marked with an asterisk are compulsory.
          </p>
          <p>
            It's Kissha is the processing controller of your data. The
            information you provide hereinabove is necessary to manage your
            client account and according to your choice, to send communications
            about Benefit Cosmetics offers, news and events. For more
            information about the processing of your personal data and to know
            your rights, please consult our Privacy Policy.
          </p>
        </Row>
      </StyledDiv>
    </Section>
  )
})

export default LoginSettings
