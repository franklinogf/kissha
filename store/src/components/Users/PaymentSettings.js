import React from "react"
import Section from "../Layout/Section"
import { Row } from "react-bootstrap"
import styled from "styled-components"

const StyledDiv = styled.div`
  width : 835px;
  margin : 0 auto;
  
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const PaymentSettings = () => {

    return(
        <Section bg=" _color-candy-blue" height={300}>
        <StyledDiv>
           <Row className="mx-0 my-1 justify-content-center">
             <h2 className="_font-size-22 _font-Montserrat font-italic">
               Payment Methods
             </h2>
           </Row>
           <Row className="mx-0 justify-content-center">
        COMING SOON...
           </Row>
          
         </StyledDiv>
           </Section>
    )
}

export default PaymentSettings