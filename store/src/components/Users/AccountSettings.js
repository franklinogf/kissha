import React, { useState, useEffect } from "react"
import Section from "../Layout/Section"
import { Row, Col, Collapse } from "react-bootstrap"
import Button from "../Buttons/Button"
import CustomInput from "../Inputs/CustomInput"
import styled from "styled-components"
import useStores from "../../hooks/useStores"
import NameInput from "../Inputs/NameInput"
import PhoneInput from "../Inputs/PhoneInput"
import PulseLoader from "react-spinners/PulseLoader"
import AxiosClient from "../../config/axios"

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

const AccountSettings = () => {
  //global state
  const { UserStore } = useStores()

  //obtain the user, delete address to prevent mistakes
  const takeInitialUser = () => {
    const tempUser = UserStore.obtainUser
    return tempUser
  }

  //state
  const [firstNameStatus, setFirstNameStatus] = useState("")
  const [lastNameStatus, setLastNameStatus] = useState("")
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)
  const [disableBtn, setDisableBtn] = useState(true)
  const [successMessage, setSuccessMessage] = useState(false)
  const [user, setUser] = useState(takeInitialUser)

  //effects
  useEffect(() => {
    if (firstNameStatus === "ok" && lastNameStatus === "ok" && phone === "ok") {
      setDisableBtn(false)
    } else {
      setDisableBtn(true)
    }
  }, [firstNameStatus, lastNameStatus, phone])

  //handlers
  const handleUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const saveChangesHandler = e => {
    //check a last validation
    //loading state
    setLoading(true)
    //patch user
    AxiosClient.patch(`/users/${user.id}`, {
      firstName:user.firstName,
      lastName:user.lastName,
      phone:user.phone
    })
      .then(response => {
        //everything ok
        UserStore.setUser(user)
        setLoading(false)
        setSuccessMessage(true)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <Section bg=" _color-candy-blue" height={300}>
      <StyledDiv>
        <Row className="mx-0 my-1 justify-content-center">
          <h2 className="_font-size-22 _font-Montserrat font-italic">
            Account Details
          </h2>
        </Row>
        <Row className="mx-0">
          <Col sm={12} lg={6}>
            {" "}
            <NameInput
              idName="firstName"
              labelName="First Name"
              defaultValue={user.firstName}
              nameStatus={firstNameStatus}
              setNameStatus={setFirstNameStatus}
              onChangeHandler={handleUser}
            />
          </Col>
          <Col sm={12} lg={6}>
            {" "}
            <NameInput
              idName="lastName"
              labelName="Last Name"
              defaultValue={user.lastName}
              nameStatus={lastNameStatus}
              setNameStatus={setLastNameStatus}
              onChangeHandler={handleUser}
            />
          </Col>
          <Col sm={12} lg={6}>
            <CustomInput
              id="email"
              defValue={UserStore.obtainUser.email}
              disabled
              input={["text", null, null, handleUser]}
              label={["E-mail"]}
            />{" "}
          </Col>
          <Col sm={12} lg={6}>
            <PhoneInput
              userId={UserStore.obtainUser.id}
              phone={phone}
              setPhone={setPhone}
              defaultValue={UserStore.obtainUser.phone}
              onChangeHandler={handleUser}
            />{" "}
          </Col>
        </Row>
        <Row className="mx-0 pr-2 justify-content-end">
          {!loading ? (
            <Button
              disabled={disableBtn}
              size="lg"
              fontSize={16}
              padding="px-4 py-2"
              onClick={saveChangesHandler}
            >
              Save Changes
            </Button>
          ) : (
            <div className="d-block h-100 justify-content-center">
              <PulseLoader size={16} color={"#FF758C"} loading />
            </div>
          )}
        </Row>
        <Row className="mx-0 pr-3 pt-2 justify-content-end _font-size-14 text-success">
          <div>
            <Collapse in={successMessage}>
              <div id="collapse-text">Account Info Saved Successfully</div>
            </Collapse>
          </div>
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
}

export default AccountSettings
