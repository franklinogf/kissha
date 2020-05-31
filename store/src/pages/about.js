import React, { Component } from "react"
import PageTitle from "../components/Layout/PageTitle"


export default class about extends Component { 
   render() {
    return (
      <>
        <PageTitle title="About" />
        <h1>{this.props.location.state.greeting}</h1>
      </>
    )
  }
}
