import React from "react"
import { Card, Media, Image } from "react-bootstrap"
import "../../scss/main-bootstrap.scss"

export const ReviewCard = props => {
  return (
    <Card className="border-0 h-100">
      <Card.Body className="border bg-light font-italic _font-size-20">
        <Card.Text>{props.userComment}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white">
        <Media>
          <Image
            width={64}
            height={64}
            className="align-self-center mr-3"
            src={props.userPic}
          />
          <Media.Body>
            <h5 className="_section-title _font-size-22">{props.userName}</h5>
            <p>{props.userRank}</p>
          </Media.Body>
        </Media>
      </Card.Footer>
    </Card>
  )
}
