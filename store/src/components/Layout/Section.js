import React from "react"
import { Container } from "react-bootstrap"
import styled, { css } from "styled-components"

const StyledContainer = styled(Container)`
  min-height: ${props => props.height};

  ${props =>
    props.img &&
    css`
      background-image: url(${props.img});
      background-size: cover;
      background-position: center;
    `}
`
export const SectionHeader = props => {
  return (
    <div className="mb-5">
      <h2 className={`section-title _font-size-${props.fontSize ? props.fontSize : 36 } text-center _font-Montserrat font-weight-${props.fontWeight ? props.fontWeight : "normal"}`}>{props.title}</h2>
      {props.subTitle &&
        <p className="text-center text-muted _font-size-20 _font-Playfair-Display">{props.subTitle}</p>
      }
      {props.hr && <hr className="w-25 border-primary _border-primary" />}
    </div>
  )
}

export default class Section extends React.Component {
  static Header = SectionHeader;

  render() {
    const bg = this.props.bg || "white"
    const height = this.props.height || 496
    const padding = this.props.padding || 'p-5'
    const margin = this.props.margin
    const bgPosition = this.props.bgPosition || "center"
    return (
      <StyledContainer
        img={this.props.img}
        height={`${height}px`}
        bgPosition={`${bgPosition}`}
        fluid
        className={`bg-${bg} ${padding} ${margin && margin}`}
      >
        {this.props.children}
      </StyledContainer>
    )
  }
}
