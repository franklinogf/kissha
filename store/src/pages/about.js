import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import PageTitle from "../components/Layout/PageTitle"


export default class about extends Component { 
  render() {
    return (
      <MainLayout>
        <PageTitle title="About" />
        <h1>{this.props.location.state.greeting}</h1>
      </MainLayout>
    )
  }
}
