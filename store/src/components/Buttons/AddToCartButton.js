import React from "react"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useStores from "../../hooks/useStores"
import { observer } from "mobx-react"

const AddToCartButton = observer(
  ({ size = "", variant = "primary", fontSize = "14", icon,producId,amount = 1}) => {
    const { ShoppingCartStore } = useStores()
    return (
      <Button
        size={size}
        variant={variant}
        className={`text-white rounded-pill _font-size-${fontSize} _font-Montserrat`}
        onClick={() => ShoppingCartStore.addProduct(producId,amount)}
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
)

export default AddToCartButton
