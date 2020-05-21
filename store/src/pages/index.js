import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Layout/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
export default class index extends Component {
   render() {
      return (
         <div>
            <Container bg="primary" className="p-5">
               <Header />
            </Container>
         </div>
      )
   }
}
