import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import AddToCartButton from "../Buttons/AddToCartButton"

const StyledCard = styled(Card)`
  max-width: 16.875rem;
`
const CardImage = styled(Card.Img)`
  max-width: 14.375rem;
`
const ProductCard = props => {
  return (
    <StyledCard className="border-0 text-center mx-auto">
      <Link to="/product" state={{ productId: props.id }}>
        <CardImage className="rounded-0 mx-auto" src={props.src} />
      </Link>
      <Card.Body>
        <Card.Text className="text-truncate _font-Playfair-Display _font-size-22">
          {props.name}
        </Card.Text>
        <Card.Title className="_font-Montserrat _font-size-20 my-4">
          {props.price && `$${props.price}`}
        </Card.Title>
        <AddToCartButton icon />
      </Card.Body>
    </StyledCard>
  )
}

export default ProductCard
