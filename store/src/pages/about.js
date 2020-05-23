import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { Row, Col } from 'react-bootstrap'
// import '../css/main-bootstrap.css'
export default class about extends Component {
   render() {
      return (
         <div>
            <Layout.Main>
               <Row>
                  <Col className="border" lg={3}>1</Col>
                  <Col className="border">2</Col>
                  <Col className="border">3</Col>
                  <Col className="border">4</Col>
                  <Col className="border">5</Col>
                  <Col className="border">6</Col>
                  <Col className="border">7</Col>
                  <Col className="border">8</Col>
                  <Col className="border">9</Col>
                  <Col className="border">10</Col>
                  <Col className="border">11</Col>
                  <Col className="border">12</Col>
               </Row>
           </Layout.Main>
         </div>
      )
   }
}