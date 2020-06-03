import React, { Component } from "react"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
import { Row, Col, Container } from "react-bootstrap"
import Login from "../components/Users/Login"
import wallpaper from '../images/login-wallpaper.jpg'

export default class login extends Component {
  state = {}

  render() {
    return (
      <>
        <PageTitle title="Login" />
        <Section img={wallpaper}>
          <div className="d-flex">
          <Login/>
          </div>
        </Section>
      </>
    )
  }
}
