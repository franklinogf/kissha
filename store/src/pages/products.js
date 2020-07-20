import React, { useState, useEffect, Fragment } from "react"
import { Row, Col, Container, Form, Image } from "react-bootstrap"
import Button from "../components/Buttons/Button"
import { Link } from "gatsby"
import AxiosClient from "../config/axios"
import Section from "../components/Layout/Section"
import ProductRow from "../components/Products/ProductRow"
import PageTitle from "../components/Layout/PageTitle"
import ProductSortBar from "../components/Products/ProductSortBar"
import DotLoader from "react-spinners/DotLoader"
import noProductImage from "../images/no-products-found.png"
import { observer } from "mobx-react"
import styled from "styled-components"

const StyledCategoryCol = styled(Col)`
  color: ${({ active }) => (active === "true" ? "#ff758c" : "black")};
  cursor: pointer;

  &:hover {
    color: #ff758c;
  }
`

const products = observer(({location}) => {
  //variables
  const numRegex = /^[0-9]+(\.[0-9]{1,2})?$/
  const emptyFilter = { minPrice: "", maxPrice: "", brand: "Brands..." }
  const initialCategory = location.state ? location.state.option : "All"

  //common states
  //set the category filter
  const [fetchProductsTrigger, setFetchProductsTrigger] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [filter, setFilter] = useState(emptyFilter)
  const [listOfProducts, setListOfProducts] = useState([])
  const [showItems, setShowItems] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [sortBy, setSortBy] = useState("...")
  const [loading, setLoading] = useState(false)

  //EEFECT
  useEffect(() => {
    const fetchIt = () => {
      setLoading(true)

      let tempURL = "/products"
      let count = 0

      if (selectedCategory !== "All" && selectedCategory !== "New Arrivals") {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `category=${selectedCategory}`
      }

      if (filter.minPrice !== "") {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `minPrice=${filter.minPrice}`
      }
      if (filter.maxPrice !== "") {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `maxPrice=${filter.maxPrice}`
      }
      if (filter.brand !== "Brands...") {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `brand=${filter.brand}`
      }

      if (showItems !== 0) {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `limit=${showItems}`
      }

      if (sortBy !== "...") {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `sort=${sortBy.split(" ").join("-")}`
      }

      if (currentPage !== 1) {
        if (count === 0) {
          tempURL += `?`
          count++
        } else {
          tempURL += `&`
        }
        tempURL += `page=${currentPage}`
      }

      AxiosClient.get(tempURL).then(response => {
        console.log(response)
        setListOfProducts(response.data.data)
        setTotalPages(response.data.totalPages)
        setCurrentPage(response.data.currentPage)
        setFetchProductsTrigger(false)
        setLoading(false)
      })
    }

    //first time fetch all
    for (let i = 0; i < 1; i++) {
      fetchIt()
    }

    //if
    if (fetchProductsTrigger) {
      fetchIt()
    }
  }, [fetchProductsTrigger,currentPage,filter,selectedCategory,showItems,sortBy])
  //END OF EFFECT

  //handles
  const handleCategory = e => {
    setSelectedCategory(e.target.innerHTML)
    setFetchProductsTrigger(true)
  }

  const handleFilter = e => {
    const { name, value } = e.target
    if (name !== "minPrice" && name !== "maxPrice") {
      setFilter({ ...filter, [name]: value })
    } else {
      if (numRegex.test(value) || value === "") {
        setFilter({ ...filter, [name]: value })
      }
    }
  }

  const handleShowItems = e => {
    setShowItems(e.target.value)
    setFetchProductsTrigger(true)
  }

  const handleSortBy = e => {
    setSortBy(e.target.value)
    setFetchProductsTrigger(true)
  }

  const handlePage = e => {
    setCurrentPage(Number(e.target.innerHTML))
    setFetchProductsTrigger(true)
  }

  const handleFilterApply = () => {
    setFetchProductsTrigger(true)
  }

  const handleFilterClean = () => {
    setFilter(emptyFilter)
    setFetchProductsTrigger(true)
  }

  let buttonListPages = []

  for (let i = 0; i < totalPages; i++) {
    if (i === 0) {
      buttonListPages = []
    }
    let index = i + 1
    console.log(typeof index)
    console.log(typeof currentPage)
    buttonListPages.push(
      <Button
        key={index}
        size="lg"
        shape="square"
        variant={index === currentPage ? "disabled" : "primary"}
        onClick={e => handlePage(e)}
      >
        {index}
      </Button>
    )
  }

  return (
    <Fragment>
      <PageTitle title="Products" />
      <Section>
        <Container fluid>
          <Row>
            <Col xs={12} sm={3}>
              <Row className="mb-4">
                <Col xs={12}>
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    CATEGORIES
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <StyledCategoryCol
                      xs={12}
                      active={selectedCategory === "All" ? "true" : "false"}
                      onClick={e => handleCategory(e)}
                    >
                      All
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={
                        selectedCategory === "New Arrivals" ? "true" : "false"
                      }
                      onClick={e => handleCategory(e)}
                    >
                      New Arrivals
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={selectedCategory === "Make Up" ? "true" : "false"}
                      onClick={e => handleCategory(e)}
                    >
                      Make Up
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={
                        selectedCategory === "Skin Care" ? "true" : "false"
                      }
                      onClick={e => handleCategory(e)}
                    >
                      Skin Care
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={selectedCategory === "Lips" ? "true" : "false"}
                      onClick={e => handleCategory(e)}
                    >
                      Lips
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={selectedCategory === "Face" ? "true" : "false"}
                      onClick={e => handleCategory(e)}
                    >
                      Face
                    </StyledCategoryCol>
                    <StyledCategoryCol
                      xs={12}
                      active={selectedCategory === "Eyes" ? "true" : "false"}
                      onClick={e => handleCategory(e)}
                    >
                      Eyes
                    </StyledCategoryCol>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    FILTER BY
                  </p>
                </Col>
                <Col xs={12}>
                  <Form>
                    <Form.Row>
                      <Col>
                        <Form.Control
                          name="minPrice"
                          placeholder="Min"
                          type="int"
                          onChange={e => handleFilter(e)}
                          value={filter.minPrice}
                        />
                      </Col>
                      -
                      <Col>
                        <Form.Control
                          name="maxPrice"
                          placeholder="Max"
                          onChange={e => handleFilter(e)}
                          value={filter.maxPrice}
                        />
                      </Col>
                    </Form.Row>
                    <Form.Row className="m-0 mt-4">
                      <Form.Control
                        name="brand"
                        onChange={e => handleFilter(e)}
                        as="select"
                        value={filter.brand}
                      >
                        <option>Brands...</option>
                        <option>Loreal</option>
                        <option>Nivea</option>
                        <option>Olay</option>
                      </Form.Control>
                    </Form.Row>

                    <Form.Row className="justify-content-between m-0 mt-4 ">
                      <Button onClick={handleFilterApply}>APPLY</Button>
                      <Button onClick={handleFilterClean}>CLEAN</Button>
                    </Form.Row>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mt-3">
                  <p className="title pb-1 _font-size-16 d-inline-block">
                    INFORMATION
                  </p>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col xs={12}>
                      <Link to="/about" className="text-dark">
                        About
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/contact-us" className="text-dark">
                        Contact
                      </Link>
                    </Col>
                    <Col xs={12}>
                      <Link to="/privacy-policy" className="text-dark">
                        Privacy Policy
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={9}>
              {" "}
              <Row className="_font-size-28 _font-Montserrat m-0 mb-4">
                {selectedCategory}
              </Row>
              <ProductSortBar
                sortBy={sortBy}
                showItems={showItems}
                handleShowItems={handleShowItems}
                handleSortBy={handleSortBy}
                buttonListPages={buttonListPages}
              />
              {!loading ? (
                listOfProducts.length !== 0 ? (
                  <ProductRow cols={3} products={listOfProducts} />
                ) : (
                  <Row className="m-0 mb-5 mb-4 justify-content-center">
                    <Image src={noProductImage}></Image>
                  </Row>
                )
              ) : (
                <Row className="m-0 my-5 py-5 justify-content-center">
                  <DotLoader size={200} color={"#FF758C"} loading />
                </Row>
              )}
              <ProductSortBar
                sortBy={sortBy}
                showItems={showItems}
                handleShowItems={handleShowItems}
                handleSortBy={handleSortBy}
                buttonListPages={buttonListPages}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  )
})

export default products
