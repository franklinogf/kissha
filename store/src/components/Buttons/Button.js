import React from "react"
import { Button as Btn } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = props => {
  const id = props.id
  const size = props.size || ""
  const variant = props.variant || "primary"
  const fontSize = props.fontSize || "14"
  const padding = props.padding || ""  
  const icon = props.icon
  const onClick = props.onClick || null
  const disabled = props.disabled || false
  const shape = props.shape || "rounded-pill"
  const fullWidth = props.fullWidth
  return (
    <Btn id={id && id} disabled={disabled} size={size} variant={variant} className={`text-white ${shape} _font-size-${fontSize} _font-Montserrat ${padding} ${fullWidth && 'w-100'}`} onClick={onClick && onClick}>
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
