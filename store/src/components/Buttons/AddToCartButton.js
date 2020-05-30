import React from 'react'
import Button from './Button'

const AddToCartButton = ({variant,icon}) => {
   return (
      <>
         <Button          
          variant={variant || "primary"}
          fontSize="20"
          text="Add to cart"
          icon={icon && ["fas", "shopping-cart"]}
        />
      </>
   )
}

export default AddToCartButton
