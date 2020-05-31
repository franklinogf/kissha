import React from "react"
import Button from "./Button"

const AddToCartButton = ({ variant, icon }) => {
  return (
    <>
      <Button
        variant={variant || "primary"}
        fontSize="16"
        icon={icon && ["fas", "shopping-cart"]}
      >
        Add to cart
      </Button>
    </>
  )
}

export default AddToCartButton
