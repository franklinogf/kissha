import React from 'react'
import { Card,Button } from 'react-bootstrap'

import styled from 'styled-components'

const StyledCard = styled(Card)`
max-width:18rem;
`
const CardImage = styled(Card.Img)`
max-width: 12rem;
`
 const ProductCard = (props) => {
   return (
        <StyledCard className="border-0 text-center mx-auto">
          <CardImage className="rounded-0 mx-auto" src={props.src} />
          <Card.Body>
            <Card.Text className="text-truncate">
              {props.name}
            </Card.Text>
            <Card.Title>{props.price && `$${props.price}`}</Card.Title>
            <Button size='sm' variant="primary" className="text-white rounded-pill _font-size-14 _font-Montserrat">Add to cart</Button>
          </Card.Body>
        </StyledCard>
   )
}

export default ProductCard