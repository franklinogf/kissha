import React, { Component } from "react"
import Section from "../Layout/Section"
import PageTitle from "../Layout/PageTitle"
import Register from "../Users/Register"
import wallpaper from "../../images/register-wallpaper.jpg"

export default class SignUpPage extends Component {
  state = {}

  render() { 
    return (
      <>
        <PageTitle title="Register" />
        <Section img={wallpaper}>
          <div className="d-flex justify-content-end">
            <Register />
          </div>
        </Section>
      </>
    )
  }
}
