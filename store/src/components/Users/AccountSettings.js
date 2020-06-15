import React from "react"
import Section from "../Layout/Section"
import { Row, Col } from "react-bootstrap"
import Button from "../Buttons/Button"
import CustomInput from "../Inputs/CustomInput"
import styled from "styled-components"

const StyledDiv = styled.div`
  width : 835px;
  margin : 0 auto;
  
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`



const AccountSettings = () => {
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
            <CustomInput
              id="firstName"
              value="Alexa Gonzales"
              input={["text"]}
              label={["First Name*"]}
            />
          </Col>
          <Col sm={12} lg={6}>
            {" "}
            <CustomInput
              id="lastName"
              value="Martinez Martinez"
              input={["text"]}
              label={["Last Name*"]}
            />
          </Col>
          <Col sm={12} lg={6}>
            <CustomInput
              id="email"
              value="voicemail@email.com"
              disabled
              input={["text"]}
              label={["E-mail"]}
            />{" "}
          </Col>
          <Col sm={12} lg={6}>
          <CustomInput
              id="phone"
              value="809-332-2857"
              disabled
              input={["text"]}
              label={["Phone Number"]}
            />{" "}
          </Col>
        </Row>
        <Row className="mx-0 pr-2 justify-content-end">
          <Button size="lg" fontSize={16} padding="px-4 py-2">Save Changes</Button>
        </Row>
        <Row className="mx-0 mt-4">
          <p className="font-weight-bold">Fields marked with an asterisk are compulsory.</p>
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
