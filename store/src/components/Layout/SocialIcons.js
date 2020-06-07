import React from "react"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"

const SocialIcons = ({ facebook, twitter, instagram, email, baseColor }) => {
  return (
    <Row>
      {facebook !== false && (
        <Col>
          <Link to="/" className={baseColor && baseColor}>
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
          <Link to="/" className={baseColor && baseColor}>
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
          <Link to="/" className={baseColor && baseColor}>
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
          <Link to="/" className={baseColor && baseColor}>
            <FontAwesomeIcon className="email" icon="envelope" size="2x" />
          </Link>
        </Col>
      )}
    </Row>
  )
}

export default SocialIcons
