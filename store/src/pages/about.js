import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import { Row, Col } from "react-bootstrap"

import styled from 'styled-components'

const StyledCol = styled(Col)`
border:1px solid;
margin-top:5px;
`

export default class about extends Component { 
  render() {
    return (
      <MainLayout>
        <Row className="row-cols-1 row-cols-lg-2">
          <StyledCol>1</StyledCol>
          <StyledCol>2</StyledCol>
          <StyledCol>3</StyledCol>
          <StyledCol>4</StyledCol>
          <StyledCol>5</StyledCol>
          <StyledCol>6</StyledCol>
          <StyledCol>7</StyledCol>
          <StyledCol>8</StyledCol>
          <StyledCol>9</StyledCol>
        </Row>
      </MainLayout>
    )
  }
}
