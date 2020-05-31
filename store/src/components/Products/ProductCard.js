import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import AddToCartButton from "../Buttons/AddToCartButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const StyledCard = styled(Card)`
  max-width: 16.875rem;
`
const CardImage = styled(Card.Img)`
  max-width: 14.375rem;
`
const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }

  &:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: var(--primary);
    opacity: 0.2;
    filter: blur(1px);
  }
`
const IconContainer = styled.div`
position: absolute;
z-index: 2;
top: 50%;
left: 41%;
width: 2.5rem;
height: 2rem;
background-color: var(--primary);

display: none;
// transform: translate(-50%,-50%);
transition: .5s ease-in-out;

${StyledLink}:hover & { 
  display:block;
}

`
const ProductCard = props => {
  return (
    <StyledCard className="border-0 text-center mx-auto">
      <StyledLink to="/product" state={{ productId: props.id }}>
        <CardImage className="rounded-0 mx-auto" src={props.src} />
        <IconContainer>
          <FontAwesomeIcon className="text-white" icon={["fas", "eye"]} size="2x" />
        </IconContainer>
      </StyledLink>
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
