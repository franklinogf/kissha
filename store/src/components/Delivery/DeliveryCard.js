import React from "react"
import { Row, Card, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import "../../scss/main-bootstrap.scss"

const StyleCardTitle = styled(Card.Text)`
  font-size: 22px;
  font-family: Montserrat;
  font-weight: 400;
`

const StyledSpan = styled.span`
letter-spacing: 0px !important;
`

 const DeliveryCard = props => {
  return (
    <Row className="text-center">
      <Col xs={12} className="justify-content-center py-3">
        <FontAwesomeIcon size='4x' icon={props.icon} className="text-primary" />
      </Col>
      <Col xs={12} className="py-3">
        <StyleCardTitle>
          <Link to="/" className="text-dark text-decoration-none">
            {props.title}
          </Link>
        </StyleCardTitle>
      </Col>
      <Col xs={12}>
        <p className="text-center pt-2 text-black-50">{props.text}</p>
      </Col>
      <Col xs={12} className="py-2">
        <StyledSpan className="pt-2 pb-1 title">READ MORE</StyledSpan>
      </Col>
    </Row>
  )
}
export default DeliveryCard