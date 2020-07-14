import React, { useState, useEffect, useRef } from "react"
import Section from "../Layout/Section"
import { Row, Card, Collapse, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CustomInput from "../Inputs/CustomInput"
import CustomSelect from "../Inputs/CustomSelect"
import NameInput from "../Inputs/NameInput"
import Button from "../Buttons/Button"
import styled from "styled-components"
import useStores from "../../hooks/useStores"
import AxiosClient from "../../config/axios"
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
  width: 75%;

  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 426px) {
    width: 100%;
  }
`

const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;
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

const StyledSpinner = styled.div`
position:absolute;
width:100%;
height:100%;
background-color: rgba(255,255,255,0.8);
display: flex;
align-items: center; 
justify-content: center;
z-index


`

const AddressSettings = observer(() => {
  //global user call
  const { UserStore } = useStores()

  //empty address field
  const emptyAddress = {
    fullName: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    country: "",
    type: "",
    userId: UserStore.obtainUser.id,
  }

  //STATES
  //status for username, to prevent bad names
  const [fullNameStatus, setFullNameStatus] = useState("")
  //disable the add button to prevent empty values
  const [addAddressBtn, setAddAddressBtn] = useState(true)
  //array with the addresses
  const [addresses, setAddresses] = useState([])
  //collapse the addresses
  const [showAddress, setShowAddress] = useState(false)
  //collapse the address form
  const [addAddress, setAddAddress] = useState(false)
  //fills the data for the address form
  const [addressFields, setAddressFields] = useState(emptyAddress)
  //manage the spinner status
  const [isLoading, setIsLoading] = useState(false)
  //set the address in a load state to delete or something else by the ID
  const [loadingCardById, setLoadingCardById] = useState(0)

  //effect : everytime addAddres change, it gona fetch the info
  useEffect(() => {
    if (!addAddress) {
      AxiosClient.get(`/users/${UserStore.obtainUser.id}/limited`).then(
        response => {
          setAddresses(response.data.data.addresses)
          setShowAddress(true)
        }
      )
    }
  }, [addAddress,UserStore.obtainUser.id])

  //effect : if fullName of addAddress is correct, enable ADD button
  useEffect(() => {
    if (
      fullNameStatus === "ok" &&
      addressFields.apartment !== "" &&
      addressFields.street !== "" &&
      addressFields.city !== "" &&
      addressFields.state !== ""
    ) {
      setAddAddressBtn(false)
    } else {
      setAddAddressBtn(true)
    }
  }, [fullNameStatus, addressFields])

  //refs
  const countryRef = useRef(null)
  const typeOfAddressRef = useRef(null)

  //handlers
  const handleNewAddress = e => {
    setAddressFields(emptyAddress)
    setShowAddress(false)
    setTimeout(() => {
      setAddAddress(true)
    }, 500)
  }

  const handleEditAddress = (address, e) => {
    e.preventDefault()
    setAddressFields(address)

    setShowAddress(false)
    //stylish way to collapse components
    setTimeout(() => {
      setAddAddress(true)
    }, 500)
  }

  const handleDeleteAddress = (id, e) => {
    //set the loading state
    e.preventDefault()
    const loadingTarget = Number(e.target.id.slice(3))
    setLoadingCardById(loadingTarget)
    //get the element of the array
    const newAddresses = []
    const removeIndex = addresses
      .map(item => {
        newAddresses.push(item)
        return item.id
      })
      .indexOf(loadingTarget)
    //delete request
    AxiosClient.delete(`/address/${id}`)
      .then(response => {
        //address delete, procced to refresh the list
        setLoadingCardById(0)
        newAddresses.splice(removeIndex, 1)
        setAddresses(newAddresses)
      })
      .catch(err => {
        //something s wrong, check it
        console.log(err)
      })
  }

  const handleAddressFields = e => {
    setAddressFields({
      ...addressFields,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddress = async e => {
    e.preventDefault()
    let id = e.target.id

    if (id === "save") {
      //set a loading component while is checking
      setIsLoading(true)
      //retrieve the country and type
      addressFields.country = countryRef.current.value
      addressFields.type = typeOfAddressRef.current.value
      //post the data
      if (addressFields.id) {
        //this address exists, lets update
        AxiosClient.patch(`/address/${addressFields.id}`, addressFields)
          .then(response => {
            //if everithing ok, show success msg and go back to addresses
            setIsLoading(false)
            setAddressFields(emptyAddress)
            setAddAddress(false)
          })
          .catch(err => {
            //something was wrong, send a error msg
          })
      } else {
        //this is a new address, lets post
        AxiosClient.post("/address/", addressFields)
          .then(response => {
            //if everithing ok, show success msg and go back to addresses
            setAddAddress(false)
            setIsLoading(false)
            setAddressFields(emptyAddress)
          })
          .catch(err => {
            //something was wrong, send a error msg
          })
      }
    } else if (id === "cancel") {
      //clean fields, back to addresses
      setAddressFields(emptyAddress)
      setAddAddress(false)
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
              {addresses.map(address => (
                <StyledCard key={address.id}>
                  {loadingCardById === address.id && (
                    <StyledSpinner>
                      <PulseLoader size={16} color={"#FF758C"} loading />
                    </StyledSpinner>
                  )}
                  <Card.Body>
                    <Card.Title className="text-center">
                      {address.fullName}
                    </Card.Title>
                    <Card.Text>
                      Apt. {address.apartment}, {address.street} Street <br />
                      {address.city} <br />
                      {address.state}
                      <br />
                      {address.country} <br />
                      {address.type} Address <br />
                    </Card.Text>
                    <Card.Link
                      href="#"
                      onClick={e => handleEditAddress(address, e)}
                    >
                      Edit
                    </Card.Link>
                    <Card.Link
                      id={`RA-${address.id}`}
                      href="#"
                      onClick={e => handleDeleteAddress(address.id, e)}
                    >
                      Remove
                    </Card.Link>
                  </Card.Body>
                </StyledCard>
              ))}
              <StyledCard
                id="add"
                className="justify-content-center pt-4"
                onClick={handleNewAddress}
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
            <StyledRow>
              <Col sm={12}>
                {" "}
                <NameInput
                  idName="fullName"
                  labelName="Full Name"
                  defaultValue={addressFields.fullName}
                  nameStatus={fullNameStatus}
                  setNameStatus={setFullNameStatus}
                  onChangeHandler={handleAddressFields}
                />
              </Col>
              <Col sm={12} lg={6}>
                {" "}
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="apartment"
                  defValue={addressFields.apartment}
                  input={[
                    "text",
                    addressFields.apartment,
                    null,
                    handleAddressFields,
                  ]}
                  label={["Apartment*"]}
                />
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="street"
                  defValue={addressFields.street}
                  input={[
                    "text",
                    addressFields.street,
                    null,
                    handleAddressFields,
                  ]}
                  label={["Street*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="city"
                  defValue={addressFields.city}
                  input={[
                    "text",
                    addressFields.city,
                    null,
                    handleAddressFields,
                  ]}
                  label={["City*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomInput
                  inputMargin="mt-3 mb-1"
                  id="state"
                  defValue={addressFields.state}
                  input={[
                    "text",
                    addressFields.state,
                    null,
                    handleAddressFields,
                  ]}
                  label={["State*"]}
                />{" "}
              </Col>
              <Col sm={12} lg={6}>
                <CustomSelect
                  id="country"
                  defaultValue={addressFields.country}
                  inputRef={countryRef}
                  onChange={handleAddressFields}
                  options={[
                    ["USA", "United States"],
                    ["MX", "Mexico"],
                    ["DR", "Dominican Republic"],
                    ["PR", "Puerto Rico"],
                    ["CO", "Colombia"],
                  ]}
                  inputMargin="my-3"
                />
              </Col>
              <Col sm={12} lg={6}>
                <CustomSelect
                  id="type"
                  defaultValue={addressFields.type}
                  inputRef={typeOfAddressRef}
                  onChange={handleAddressFields}
                  options={[
                    ["shipping", "Shipping"],
                    ["billing", "Billing"],
                  ]}
                  inputMargin="my-3"
                />{" "}
              </Col>
              <Col xs={6} className="my-auto">
                {!isLoading ? (
                  <Button
                    id="save"
                    onClick={handleAddress}
                    size="lg"
                    fontSize={16}
                    padding="px-4 py-2"
                    disabled={addAddressBtn}
                  >
                    {addressFields.id ? "Save" : "Add"}
                  </Button>
                ) : (
                  <div className="d-block">
                    <PulseLoader size={16} color={"#FF758C"} loading />
                  </div>
                )}
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
            </StyledRow>
          </div>
        </Collapse>
      </StyledDiv>
    </Section>
  )
})

export default AddressSettings
