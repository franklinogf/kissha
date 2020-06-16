import React, { useState } from "react"
import Section from "../Layout/Section"
import { Row, Card, Collapse, Col, Button, Form } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CustomInput from "../Inputs/CustomInput"
import CustomSelect from "../Inputs/CustomSelect"
import styled from "styled-components"

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

const StyledCard = styled(Card)`
  border-radius: 13px;
  width: 17rem;
  height: 235px;

  &:last-of-type {
    border: 2px dashed var(--primary);
    background-color: #e7f7f4;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--primary);
  }
  &:hover:last-of-type {
    border: 2px dashed var(--success);
    color: var(--success);
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const AddressSettings = () => {
  const [showAddress, setShowAddress] = useState(true)
  const [addAddress, setAddAddress] = useState(false)

  const handleAddress = e => {
    let id = e.target.id

    if (id === "cancel" || id === "save") {
      setAddAddress(false)
      setTimeout(() => {
        setShowAddress(true)
      }, 300)
    } else {
      setShowAddress(false)
      setTimeout(() => {
        setAddAddress(true)
      }, 300)
    }
  }

  return (
    <Section bg=" _color-candy-blue" height={300}>
      <StyledDiv>
        <Row className="mx-0 my-1 justify-content-center">
          <h2 className="_font-size-22 _font-Montserrat font-italic">
            Address Settings
          </h2>
        </Row>
        <Collapse in={showAddress} className="mt-2">
          <div>
            <Row className="mx-0">
              <StyledCard>
                <Card.Body>
                  <Card.Title className="text-center">
                    Alexa Martinez
                  </Card.Title>
                  <Card.Text>
                    Apt. 4, las rositas Street <br />
                    Miami <br />
                    Florida, FL <br />
                    USA <br />
                    Billing Address <br />
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Remove</Card.Link>
                </Card.Body>
              </StyledCard>
              <StyledCard
                id="add"
                className="justify-content-center pt-4"
                onClick={handleAddress}
              >
                <Card.Body className="text-center pt-5">
                  <FontAwesomeIcon size="3x" icon={["fas", "plus"]} /> <br />{" "}
                  Add Address
                </Card.Body>
              </StyledCard>
            </Row>
          </div>
        </Collapse>
        <Collapse in={addAddress} className="mt-2" unmountOnExit>
          <div>
            <Row className="mx-auto w-75">
              <Col sm={12}>
                {" "}
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="fullName"
                  input={["text"]}
                  label={["Full Name*"]}
                />
              </Col>
              <Col sm={12} lg={6}>
                {" "}
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="apartment"
                  input={["text"]}
                  label={["Apartment*"]}
                />
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="street"
                  input={["text"]}
                  label={["Street*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="city"
                  input={["text"]}
                  label={["City*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="state"
                  input={["text"]}
                  label={["State*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomSelect
                  id="country"
                  options={[
                    ["USA", "United States"],
                    ["MX", "Mexico"],
                  ]}
                  inputMargin="my-3"
                />
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="my-3"
                  id="type"
                  input={["text"]}
                  label={["Type*"]}
                />{" "}
              </Col>
              <Col xs={6}>
                <Button
                  id="save"
                  onClick={handleAddress}
                  size="lg"
                  fontSize={16}
                  padding="px-4 py-2"
                >
                  Add
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  id="cancel"
                  onClick={handleAddress}
                  size="lg"
                  fontSize={16}
                  padding="px-4 py-2"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </div>
        </Collapse>
      </StyledDiv>
    </Section>
  )
}

export default AddressSettings
