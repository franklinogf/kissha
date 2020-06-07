import React from "react"
import { Button as Btn } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = props => {
  const size = props.size || ""
  const variant = props.variant || "primary"
  const fontSize = props.fontSize || "14"  
  const icon = props.icon
  const onClick = props.onClick || null
  return (
    <Btn size={size} variant={variant} className={`text-white rounded-pill _font-size-${fontSize} _font-Montserrat`} onClick={onClick && onClick}>
      {icon && 
        <FontAwesomeIcon
          className="mr-1"
          icon={icon}
          size="1x"
        />}
      {props.children}
    </Btn>
  )
}

export default Button
