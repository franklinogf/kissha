import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { Row, Col, Image } from 'react-bootstrap'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'

export default class index extends Component {
   render() {
      return (
         <div>
            <Layout.Main>
               <Row className="mt-5 text-center">
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ image1 } thumbnail /></Col>
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ image2 } thumbnail /></Col>
                  <Col className="mt-3" xs={ 12 } md={ 4 }><Image style={ { height: '400px' } } src={ image3 } thumbnail /></Col>
               </Row>
            </Layout.Main>
         </div>
      )
   }
}
