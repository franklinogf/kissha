import React, { Fragment, useState } from "react"
import { Row, Carousel, Image } from "react-bootstrap"
import ProductThumbnail from "./ProductThumbnail"


//--------------------------------------------------------

const ProductGallery = ({ productImages }) => {
  const [index, setIndex] = useState(0)
  //-------------------------------------------------------------------

  return (
    <Fragment>
      <Row className="mb-4">
        <Carousel interval={null} indicators={false} activeIndex={index}>
          {productImages.map((productImage, i) => (
            <Carousel.Item key={i}>
              <Image src={productImage.url} className="w-100" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row xs={4} className="w-100 mt-3 mb-4">
        {productImages.map((productImage, i) => (
          <ProductThumbnail
            key={i}
            index={i}
            active={i === index ? 1 : 0}
            onClick={() => setIndex(i)}
            image={productImage.url}
          />
        ))}
      </Row>
    </Fragment>
  )
}
export default ProductGallery
