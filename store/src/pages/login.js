import React, { Component } from "react"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
import { Row, Col } from "react-bootstrap"
import Login from "../components/Users/Login"
import wallpaper from '../images/login-wallpaper.jpg'

export default class login extends Component {
  state = {}

  render() {
    return (
      <>
        <PageTitle title="Login" />
        <Section img={wallpaper}>
          
            <Row className="pb-3 pt-2 pl-0 m-0">
              
              <Col xs={12} sm={4} className="py-4 pl-0">
                <Login />
              </Col>
              <Col xs={12} sm={7} className=""></Col>
              
            </Row>
          
        </Section>
      </>
    )
  }
}
