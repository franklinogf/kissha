import React from "react"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const SocialIcons = ({ facebook, twitter, instagram, email }) => {
  console.log(facebook)
  return (
    <Row>
      {facebook !== false && (
        <Col>
          <Link to="/" className="h-p">
            <FontAwesomeIcon
              className="facebook"
              icon={["fab", "facebook"]}
              size="2x"
            />
          </Link>
        </Col>
      )}
      {twitter !== false && (
        <Col>
          <Link to="/" className="h-p">
            <FontAwesomeIcon
              className="twitter"
              icon={["fab", "twitter"]}
              size="2x"
            />
          </Link>
        </Col>
      )}
      {instagram !== false && (
        <Col>
          <Link to="/" className="h-p">
            <FontAwesomeIcon
              className="instagram"
              icon={["fab", "instagram"]}
              size="2x"
            />
          </Link>
        </Col>
      )}
      {email !== false && (
        <Col>
          <Link to="/" className="h-p">
            <FontAwesomeIcon className="email" icon="envelope" size="2x" />
          </Link>
        </Col>
      )}
    </Row>
  )
}

export default SocialIcons
