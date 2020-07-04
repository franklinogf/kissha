import React, { Component } from "react"
import Section from "../Layout/Section"
import PageTitle from "../Layout/PageTitle"
import Login from "../Users/Login"
import wallpaper from "../../images/login-wallpaper.jpg"

export default class LoginPage extends Component {
  state = {}

  render() {
    return (
      <>
        <PageTitle title="Login" />
        <Section img={wallpaper}>
          <div className="d-flex">
            <Login />
          </div>
        </Section>
      </>
    )
  }
}
