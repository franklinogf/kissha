import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"

const ProductRow = ({ cols = 4, products, icon, handleAddToCart }) => {
  return (
    <Row
      className={`justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-${cols}`}
    >
      {products.map((product, i) => (
        <Col className="mb-sm-4" key={i}>
          <ProductCard
            icon={icon}
            handleAddToCart={handleAddToCart}
            product={product}
          />
        </Col>
      ))}
    </Row>
  )
}

export default ProductRow
