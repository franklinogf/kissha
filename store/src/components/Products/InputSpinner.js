import React, { useState } from "react"
import { Form, Col, Button } from "react-bootstrap"
import styled from "styled-components"

const Btn = styled(Button)`
  border-radius: 0;
`

const Input = styled(Form.Control)`
  width:3rem;
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
    setQuantity(Number(e.target.value))
  }

  return (
    <>
      {max  <= 10 && <p className="text-warning">Almost out of stock</p>}
      <div className="d-flex">
        <Btn
          variant="dark"
          className="rounded-left"
          onClick={handleLessQuantity}
        >
          -
        </Btn>
        <Input
          value={quantity}
          onChange={handleChangeQuantity}
          className="rounded-0 text-right p-1"
        />
        <Btn
          variant="dark"
          className="rounded-right"
          onClick={handleMoreQuantity}
        >
          +
        </Btn>
      </div>
    </>    
  )
}

export default InputSpinner
