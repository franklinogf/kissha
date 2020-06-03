import React, { Component } from "react"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
import { Row, Col } from "react-bootstrap"
import Register from "../components/Users/Register"
import wallpaper from "../images/register-wallpaper.jpg"

export default class register extends Component {
  state = {}

  render() {
    return (
      <>
        <PageTitle title="Register" />
        <Section img={wallpaper}>
        <div className="d-flex justify-content-end">
          <Register/>
          </div>
          {/* <Row className="pb-3 pt-2 pl-0 m-0">
            <Col xs={12} md={4} className="py-4 offset-md-8 bg-light rounded-lg">
              <Register />
            </Col>

          </Row> */}
        </Section>
      </>
    )
  }
}
