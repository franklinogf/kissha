import React from "react"
import { Row, Col } from "react-bootstrap"
import ProductCard from "./ProductCard"
import sampleImage from "../../images/sample-image1.jpg"

export const ProductRow = props => {
  const cols = props.cols || 4
  return (
    <Row className={`justify-content-center row-cols-1 row-cols-md-${cols}`}>
      {props.products.map((product,i) => (
        <Col key={i}>
          <ProductCard name={product.name} price={product.price} src={sampleImage} />
        </Col>
      ))}
    </Row>
  )
}
