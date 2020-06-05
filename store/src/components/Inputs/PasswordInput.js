import React ,{useState} from "react"
import { Form, Collapse } from "react-bootstrap"
import styled from "styled-components"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const PasswordInput = ()=> {

  const [invalidPass,setInvalidPass] = useState()
  const [invalidConfirmPass,setInvalidConfirmPass] = useState()

  return (
   <></>
  )
}

export default PasswordInput
