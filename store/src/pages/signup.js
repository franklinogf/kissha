import React, { Component } from "react"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
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
            <Register />
          </div>
        </Section>
      </>
    )
  }
}
