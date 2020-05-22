import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { Row, Col, Image } from 'react-bootstrap'
import Logo from '../components/Logo/logo.png'

export default class index extends Component {
   render() {
      return (
         <div>
            <Layout.Main>
               <Row className="mt-5 text-center">
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ Logo } thumbnail /></Col>
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ Logo } thumbnail /></Col>
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ Logo } thumbnail /></Col>
               </Row>
            </Layout.Main>
         </div>
      )
   }
}
