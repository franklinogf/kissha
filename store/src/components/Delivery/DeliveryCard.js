import React from "react"
import { Row, Col, Card } from "react-bootstrap"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const DeliveryCard = props => {
  return (
    <Col sm={12} md={6}>
      <Row>
        
      </Row>
      <Row>
        <Card.Text>
          <Link to="/">{props.title}</Link>
        </Card.Text>
      </Row>
      <Row>
          <p>Dummy text</p>
      </Row>
      <Row>
          <span>Read More</span>
      </Row>
    </Col>
  )
}
