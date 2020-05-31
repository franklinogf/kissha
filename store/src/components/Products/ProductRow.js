import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"

const ProductRow = props => {
  const cols = props.cols || 4
  return (
    <Row className={`justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-${cols}`}>
      {props.products.map((product,i) => (
        <Col className="mb-sm-4" key={i}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default ProductRow