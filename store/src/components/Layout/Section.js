import React from "react"
import { Container } from "react-bootstrap"
import styled, { css } from "styled-components"

const StyledContainer = styled(Container)`
  min-height: ${props => props.height};

  ${props =>
    props.img &&
    css`
   background-image:url(${props.img});
   background-size: cover;
   background-position: center;
  `}
`
const Section = props => {
  const bg = props.bg || "white"
  const height = props.height || 496

  return (
    <StyledContainer
      img={props.img}
      height={`${height}px`}
      fluid
      className={`bg-${bg} p-5`}
    >
      {props.children}
    </StyledContainer>
  )
}

export default Section
