import React, { useState } from "react"
import { FormControl, Button, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const InputContainer = styled.div`
  width: 7.5rem;
`

const InputSpinner = props => {
  const max = props.max

  const [quantity, setQuantity] = useState(1)

  const handleMoreQuantity = e => {
    if (quantity < max) {
      setQuantity(quantity + 1)
    }
  }

  const handleLessQuantity = e => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleChangeQuantity = e => {
    if (!isNaN(e.target.value)) {
      if (Number(e.target.value) !== 0) {
        if (Number(e.target.value) > max) {
          setQuantity(max)
        } else {
          setQuantity(Number(e.target.value))
        }
      }
    }
  }

  return (
    <InputContainer>
      {max <= 10 && <p className="text-warning">Almost out of stock</p>}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="secondary" onClick={handleLessQuantity}>
            -
          </Button>
        </InputGroup.Prepend>
        <FormControl
          value={quantity}
          onChange={handleChangeQuantity}
          className="text-right"
        />
        <InputGroup.Append>
          <Button variant="secondary" onClick={handleMoreQuantity}>
            +
          </Button>
        </InputGroup.Append>
      </InputGroup>
      
    </InputContainer>
  )
}

export default InputSpinner
