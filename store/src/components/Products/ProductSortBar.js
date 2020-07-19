import React from 'react'
import {Row,Col, Form, ButtonGroup} from 'react-bootstrap'


const ProductSortBar = ({showItems, handleShowItems,sortBy,handleSortBy,buttonListPages})=>{
return(
    <Row className="m-0 mb-4">
                <Col xs={12} sm={4}>
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Show</Form.Label>
                      <Form.Control
                        size="sm"
                        className="rounded-pill"
                        onChange={e => handleShowItems(e)}
                        as="select"
                        value={showItems}
                      >
                        <option>6</option>
                        <option>12</option>
                        <option>24</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col xs={12} sm={4}>
                  {" "}
                  <Form>
                    <Form.Row className="m-0">
                      <Form.Label className="mb-0 ml-2">Sorted By</Form.Label>
                      <Form.Control
                        as="select"
                        value={sortBy}
                        size="sm"
                        className="rounded-pill"
                        onChange={handleSortBy}
                      >
                        <option>...</option>
                        <option>Oldest First</option>
                        <option>Newest First</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Name: A-Z</option>
                        <option>Name: Z-A</option>
                      </Form.Control>
                    </Form.Row>
                  </Form>
                </Col>
                <Col
                  xs={12}
                  sm={4}
                  className="d-flex justify-content-center align-self-center pt-2"
                >
                  <ButtonGroup aria-label="Basic example">
                    {buttonListPages}
                  </ButtonGroup>
                </Col>
              </Row>
)
}

export default ProductSortBar

