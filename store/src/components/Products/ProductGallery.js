import React, { Fragment } from "react"
import { Row, Col, Carousel, Image } from "react-bootstrap"

const ProductGallery = () => {
  return (
    <Fragment>
      <Row className="mb-4">
        <Carousel interval={null} indicators={false}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01-1.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01-3.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row xs={4} className="w-100 mt-3">
        <Col>
          <Image
            className="w-100"
            src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01.jpg"
          />
        </Col>
        <Col>
          <Image
            className="w-100"
            src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01-1.jpg"
          />
        </Col>
        <Col>
          <Image
            className="w-100"
            src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01.jpg"
          />
        </Col>
        <Col>
          <Image
            className="w-100"
            src="https://template65588.motopreview.com/mt-demo/65500/65588/mt-content/uploads/2018/02/mt-1349_products_img01-3.jpg"
          />
        </Col>
      </Row>
    </Fragment>
  )
}
export default ProductGallery
