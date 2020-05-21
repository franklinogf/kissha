import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Header from '../components/Layout/Header'
import '../css/bootstrap.min.css'
export default class about extends Component {
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