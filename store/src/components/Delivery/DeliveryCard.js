import React from "react"
import { Row, Card, Container } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import "../../scss/main-bootstrap.scss"

const StyleRowIcon = styled(Row)`
  font-size: 76px;
  margin: 0px;
`
const StyleRow = styled(Row)`
  margin: 0px;
  justify-content: center;
  text-align-center;
`

const StyleCardTitle = styled(Card.Text)`
  font-size: 22px;
  font-family: Montserrat;
  font-weight: 400;
`

const StyledSpan = styled.span`
letter-spacing: 0px !important;
`

export const DeliveryCard = props => {
  return (
    <Container fluid>
      <StyleRowIcon className="justify-content-center py-3">
        <FontAwesomeIcon icon={props.icon} className="text-primary" />
      </StyleRowIcon>
      <StyleRow className="py-3">
        <StyleCardTitle>
          <Link to="/" className="text-dark text-decoration-none">
            {props.title}
          </Link>
        </StyleCardTitle>
      </StyleRow>
      <StyleRow>
        <p className="text-center pt-2 text-black-50">{props.text}</p>
      </StyleRow>
      <StyleRow className="py-2">
        <StyledSpan className="pt-2 pb-1 title">READ MORE</StyledSpan>
      </StyleRow>
    </Container>
  )
}
