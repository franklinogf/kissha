import React, { useState, useEffect, Fragment } from "react"
import { navigate } from "gatsby"
import AxiosClient from "../../config/axios"
import LoadingSection from "../Layout/LoadingSection"
import { observer } from "mobx-react"

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
        {blockPage === true ? <Component {...rest} /> : <LoadingSection />}
      </Fragment>
    )
  }
)

export default AuthorizationFilter
