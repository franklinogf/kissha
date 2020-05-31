import React, { Fragment, useState } from "react"
import { Row, Col, Carousel, Image } from "react-bootstrap"
/*TEMPORAL*/ 
import sampleImage1 from '../../images/sample-image1.jpg'
import sampleImage2 from '../../images/sample-image2.jpg'
import sampleImage3 from '../../images/sample-image3.jpg'
import sampleImage4 from '../../images/sample-image4.jpg'

const ProductGallery = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = e => {
    console.log(`handle called, it was the col number ${e.target.id}`)
    setIndex(Number(e.target.id));
  };

  return (
    <Fragment>
      <Row className="mb-4">
        <Carousel interval={null} indicators={false} activeIndex={index}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={sampleImage1}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={sampleImage2}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={sampleImage3}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={sampleImage4}
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row xs={4} className="w-100 mt-3 mb-4">
        <Col>
          <Image
           id={0} onMouseDown={handleSelect}
            className="w-100"
            src={sampleImage1}
          />
        </Col>
        <Col>
          <Image
            id={1} onMouseDown={handleSelect}
            className="w-100"
            src={sampleImage2}
          />
        </Col>
        <Col>
          <Image
           id={2} onMouseDown={handleSelect}
            className="w-100"
            src={sampleImage3}
          />
        </Col>
        <Col>
          <Image
           id={3} onMouseDown={handleSelect}
            className="w-100"
            src={sampleImage4}
          />
        </Col>
      </Row>
    </Fragment>
  )
}
export default ProductGallery
