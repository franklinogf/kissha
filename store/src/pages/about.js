import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"
import PageTitle from "../components/Layout/PageTitle"


export default class about extends Component { 
  constructor(props){
    super(props)
    this.state ={
      cart:this.props.location.state.cart
    }
  }
  render() {
    return (
      <MainLayout cart={this.state.cart}>
        <PageTitle title="About" />
        <h1>{this.props.location.state.greeting}</h1>
      </MainLayout>
    )
  }
}
