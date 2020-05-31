import React, { Fragment, useState } from "react"
import { Row, Col, Carousel, Card, Image } from "react-bootstrap"
import ProductThumbnail from "./ProductThumbnail"
import styled from "styled-components"

/*TEMPORAL*/
import sampleImage1 from "../../images/sample-image1.jpg"
import sampleImage2 from "../../images/sample-image2.jpg"
import sampleImage3 from "../../images/sample-image3.jpg"
import sampleImage4 from "../../images/sample-image4.jpg"

const StyledImage = styled(Image)`
  width: 100%;
`

const ProductGallery = () => {
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState()
  const thumbnails = [0, 1, 2, 3]
  const images = [sampleImage1,sampleImage2,sampleImage3,sampleImage4]

  const handleSelect = e => {
    console.log(`handle called, it was the col number ${e.target.id}`)
    setIndex(Number(e.target.id))
  }

  return (
    <Fragment>
      <Row className="mb-4">
        <Carousel interval={null} indicators={false} activeIndex={index}>
          <Carousel.Item>
            <StyledImage src={sampleImage1} />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={sampleImage2} />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={sampleImage3} />
          </Carousel.Item>
          <Carousel.Item>
            <StyledImage src={sampleImage4} />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row xs={4} className="w-100 mt-3 mb-4">
        {thumbnails.map(t => (
          <ProductThumbnail 
            index={t}
            handleSelect={handleSelect}
            active={t === chosen}
            onClick={() => setChosen(t)}
            image={images[t]}
          />
        ))}
      </Row>
    </Fragment>
  )
}
export default ProductGallery
