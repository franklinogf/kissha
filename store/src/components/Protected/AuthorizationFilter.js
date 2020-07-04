import React, { useState, useEffect, Fragment } from "react"
import { navigate } from "gatsby"
import AxiosClient from "../../config/axios"
import { css } from "@emotion/core"
import DotLoader from "react-spinners/DotLoader"
import Section from "../Layout/Section"
import { observer } from "mobx-react"

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const AuthorizationFilter = observer(
  ({ component: Component, location, redirectTo, withUser, ...rest }) => {
    const [blockPage, setBlockPage] = useState(false)

    const handleRender = () => {
      AxiosClient.get(`/isLogged`).then(response => {
        const status = response.data.status

        //authorization config
        if (status === withUser) {
          setBlockPage(true)
        } else {
          if (location.pathname !== redirectTo) {
            setBlockPage(false)
            navigate(redirectTo)
          }
        }
      })
    }

    //useEffect didmount
    useEffect(() => {
      handleRender()
    })

    return (
      <Fragment>
        {blockPage === true ? (
          <Component {...rest} />
        ) : (
          <Section bg=" _color-sweet" height={250} padding="py-4">
            <div className="sweet-loading">
              <DotLoader css={override} size={150} color={"#FF758C"} loading />
            </div>
          </Section>
        )}
      </Fragment>
    )
  }
)

export default AuthorizationFilter
