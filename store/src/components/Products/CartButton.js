import React from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const CartButton = props => {
  const size = props.size || "sm"
  const variant = props.variant || "primary"
  const fontSize = props.fontSize || "14"
  const text = props.text || "Insert Text"
  const icon = props.icon
  const className = `text-white rounded-pill _font-size-${fontSize} _font-Montserrat px-4 py-2`
  return (
    <Button size={size} variant={variant} className={className}>
      {icon ? (
        <FontAwesomeIcon
          className="shopping-cart"
          icon={["fas", "shopping-cart"]}
          size="1x"
        />
      ) : (
        ""
      )}
      {icon ? `  ${text}` : text}
    </Button>
  )
}
