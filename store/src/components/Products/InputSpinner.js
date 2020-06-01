import React from "react"
import { FormControl, Button, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const InputContainer = styled.div`
  width: 7.5rem;
`

const InputSpinner = props => {

  return (
    <InputContainer>
      {props.max <= 10 && <p className="text-warning">Almost out of stock</p>}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="secondary" onClick={props.handleDecrement}>
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl
          value={props.quantity}
          onChange={(e) => props.onChangeQuantity(e.target.value)}
          className="text-right"
        />
        <InputGroup.Append>
          <Button variant="secondary" onClick={props.handleIncrement}>
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </InputContainer>
  )
}

export default InputSpinner
