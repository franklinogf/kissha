import React from "react"
import { Row, Card, Col } from "react-bootstrap"
import "../../scss/main-bootstrap.scss"

import styled from "styled-components"

const StyledCard = styled(Card)`
    height: 9.668rem;
`

export const ReviewCard = props => {
  return (
    <Row className="pt-4">
      <Col xs={12} className="pb-4">
        <StyledCard className="p-4  bg-light font-italic _font-size-20">
            {props.userComment}
        </StyledCard>
      </Col>
      <Col xs={12} md={3} className=" d-flex justify-content-center">
        <Card.Img src={props.userPic} className="w-75 m-0 p-0"/>
      </Col>
      <Col xs={12} md={9} className="pl-0">
        <p className="m-0 pb-2 _section-title _font-size-22 text-center text-md-left">{props.userName}</p>
  <p className="text-center text-md-left">{props.userRank}</p>
      </Col>
    </Row>
  )
}
