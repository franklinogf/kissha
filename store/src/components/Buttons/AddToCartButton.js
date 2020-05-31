import React from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AddToCartButton = ({
  size = "",
  variant = "primary",
  fontSize = "14",
  icon,
  handleClick
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      className={`text-white rounded-pill _font-size-${fontSize} _font-Montserrat`}
      onClick={handleClick}
    >
      {icon && (
        <FontAwesomeIcon
          className="mr-1"
          icon={["fas", "shopping-cart"]}
          size="1x"
        />
      )}
      Add to cart
    </Button>
  )
}

export default AddToCartButton
