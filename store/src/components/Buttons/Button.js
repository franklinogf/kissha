import React from "react"
import { Button as Btn } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = props => {
  const size = props.size || ""
  const variant = props.variant || "primary"
  const fontSize = props.fontSize || "14"
  const text = props.text || "Insert Text"
  const icon = props.icon
  return (
    <Btn size={size} variant={variant} className={`text-white rounded-pill _font-size-${fontSize} _font-Montserrat`}>
      {icon && 
        <FontAwesomeIcon
          className="mr-1"
          icon={icon}
          size="1x"
        />}
      {text}
    </Btn>
  )
}

export default Button
