import React, { Component } from "react"
import MainLayout from "../components/Layout/MainLayout"


export default class product extends Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }

    render(){
        return(
            <MainLayout>
                <h1>This is the Product Page!</h1>
            </MainLayout>
            
        )
    }
}