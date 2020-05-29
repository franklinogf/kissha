import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"
import AddToCartButton from "../Buttons/AddToCartButton"

const StyledCard = styled(Card)`
  max-width: 18rem;
`
const CardImage = styled(Card.Img)`
  max-width: 12rem;
`
const ProductCard = props => {
  return (
    <StyledCard className="border-0 text-center mx-auto">
      <CardImage className="rounded-0 mx-auto" src={props.src} />
      <Card.Body>
        <Card.Text className="text-truncate">{props.name}</Card.Text>
        <Card.Title>{props.price && `$${props.price}`}</Card.Title>
        <AddToCartButton icon/>
      </Card.Body>
    </StyledCard>
  )
}

export default ProductCard
