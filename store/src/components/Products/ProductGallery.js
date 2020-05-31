import React, { Fragment, useState } from "react"
import { Row, Carousel, Image } from "react-bootstrap"
import ProductThumbnail from "./ProductThumbnail"
import styled from "styled-components"

/*TEMPORAL  REMOVE AFTER GET THE SOURCE OF THE PICS*/
import sampleImage1 from "../../images/sample-image1.jpg"
import sampleImage2 from "../../images/sample-image2.jpg"
import sampleImage3 from "../../images/sample-image3.jpg"
import sampleImage4 from "../../images/sample-image4.jpg"
//--------------------------------------------------------

const StyledImage = styled(Image)`
  width: 100%;
`

const ProductGallery = ({imgaes}) => {
  const [index, setIndex] = useState(0)

  /*TEMPORAL STATES, CHANGE AFTER GET THE SORCES OF THE PICS*/
  const thumbnails = [0, 1, 2, 3]  //Actual count of images
  const images = [sampleImage1, sampleImage2, sampleImage3, sampleImage4] //pass images as a prop
  //-------------------------------------------------------------------

  return (
    <Fragment>
      <Row className="mb-4">
        <Carousel interval={null} indicators={false} activeIndex={index}>
          {thumbnails.map(t => (
            <Carousel.Item>
              <StyledImage src={images[t]} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
      <Row xs={4} className="w-100 mt-3 mb-4">
        {thumbnails.map(t => (
          <ProductThumbnail
            index={t}
            active={t === index}
            onClick={() => setIndex(t)}
            image={images[t]}
          />
        ))}
      </Row>
    </Fragment>
  )
}
export default ProductGallery
