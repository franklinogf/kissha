import React, { Component } from "react"
import Section from "../components/Layout/Section"
import PageTitle from "../components/Layout/PageTitle"
import wallpaper from "../images/login-wallpaper.jpg"

export default class dashboard extends Component {

  render() {
    return (
      <>
        <PageTitle title="Dashboard" />
        <Section img={wallpaper}>
          <div className="d-flex">
            
          </div>
        </Section>
      </>
    )
  }
}