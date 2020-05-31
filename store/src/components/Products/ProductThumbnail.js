import React from "react"
import { Col, Image } from "react-bootstrap"
import styled from "styled-components"

const SCol = styled(Col)`
  position: relative;

  &:after {
    border: 1px solid var(--primary);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    transition: all 0.2s linear;
  }

  &:hover:after {
    opacity: 1;
  }

  &:focus:after {
    opacity: 1;
  }
`
const StyledImage = styled(Image)`
  width: 100%;
`

const ProductThumbnail = ({ active, index, onClick, handleSelect, image }) => {
 
  return (
    <SCol
      id={index}
      onClick={onClick}
      onMouseDown={handleSelect}
      className={active && "active"}
    >
            <StyledImage src={image} />
    </SCol>
  )
}

export default ProductThumbnail
