import React from "react"
import { Col, Image } from "react-bootstrap"
import styled from "styled-components"

const StyledImage = styled(Image)`
width: 100%;
`
const SCol = styled(Col)`
position: relative;

&:after {
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

${({ active }) => !active && `
&:hover:after {
    opacity: 1;
`}
`

const ProductThumbnail = ({ active, index, onClick, handleSelect, image }) => {
  return (
    <SCol
      active={active}
      id={index}
      onClick={onClick}
      className={active && "selected-thumb"}
    >
      <StyledImage src={image} />
    </SCol>
  )
}

export default ProductThumbnail
