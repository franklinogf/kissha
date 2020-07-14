import React from "react"
import { css } from "@emotion/core"
import DotLoader from "react-spinners/DotLoader"
import Section from "../Layout/Section"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const LoadingSection = (props) => {
    const bg = props.bg || " _color-sweet"
    const height = props.height || 250
    const padding = props.padding || "py-4"
    const spinnerSize = props.spinnerSize || 150
    const spinnerColor = props.spinnerColor || "#FF758C"
    const spinnerLoading = props.spinnerLoading || true
  return (
    <Section bg={bg} height={height} padding={padding}>
      <div className="sweet-loading">
        <DotLoader css={override} size={spinnerSize} color={spinnerColor} loading={spinnerLoading} />
      </div>
    </Section>
  )
}

export default LoadingSection
