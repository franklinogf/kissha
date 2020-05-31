import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import AddToCartButton from "../Buttons/AddToCartButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import sampleImage from "../../images/sample-image1.jpg"

const StyledCard = styled(Card)`
  max-width: 16.875rem;
`
const CardImage = styled(Card.Img)`
  max-width: 14.375rem;
`
const StyledLink = styled(Link)`
  display: inline-block;
  position: relative;
  transition: transform 0.3s linear;

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
  left: 50%;
  width: 2rem;
  height: 1.5rem;
  background-color: var(--primary);
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.4s linear;
  transform: translate(-50%,-50%);

  ${StyledLink}:hover & {
    visibility: visible;
    opacity: 1;
  }
`

const StyledSale = styled.p`
  position: absolute;
  z-index: 0;  
  top:.5rem;
  left: .8rem;
  width: fit-content;
  height: fit-content;
  padding: 0 .15rem;
  margin-bottom: 0;
  font-size: .8rem;
  color:white;
  background-color: var(--primary);
`
const ProductCard = ({product}) => {
  console.log('product: ', product);
  return (
    <StyledCard className="border-0 text-center mx-auto">
      <StyledLink to="/product" state={{ productId: product.id }}>
        {!!product.discountStatus && <StyledSale>SALE</StyledSale>}
        <CardImage className="rounded-0 mx-auto" src={sampleImage} />
        <IconContainer>
          <FontAwesomeIcon
            className="text-white"
            icon={["fas", "eye"]}
            size="lg"
          />
        </IconContainer>
      </StyledLink>
      <Card.Body>
        <Card.Text className="text-truncate _font-Playfair-Display _font-size-22">
          {product.name}
        </Card.Text>
        <Card.Title className="_font-Montserrat _font-size-20 my-4">
          {product.price && `$${product.price}`}
        </Card.Title>
        <AddToCartButton icon />
      </Card.Body>
    </StyledCard>
  )
}

export default ProductCard
