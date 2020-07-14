import React, { useEffect, Fragment } from "react"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Header from "./Header"
import useSticky from "../../hooks/useSticky"
import useStores from "../../hooks/useStores"
import AxiosClient from "../../config/axios"
import { observer } from "mobx-react"

export const MainLayout = observer(({ children }) => {
  const { UserStore } = useStores()
  const { isSticky, element } = useSticky()

  //useEffect
  useEffect(() => {
    //function
    const fetchData = async () => {
      AxiosClient.get(`/isLogged`).then(response => {
        if (response.data.status) {
          UserStore.setLogin(true)
          UserStore.setUser(response.data.data)
        } else { 
          UserStore.setLogin(false)
          UserStore.setUser({
            id:0,
            firstName:"",
            lastName:"",
            phone:"",
            email:"",
            lastVisit:"",
            addresses: []
          })
        }
      })
    }

    for (let i = 0; i < 1; i++) {
      fetchData()
    }

    if (UserStore.loginStatus) {
      fetchData()
    } else {
      UserStore.setUser({
        id:0,
        firstName:"",
        lastName:"",
        phone:"", 
        email:"",
        lastVisit:"",
        addresses: []
      })
    }
  }, [UserStore.loginStatus, UserStore])

  return (
    <div>
      {UserStore.loginStatus !== null && (
        <Fragment>
          <Container className="pt-3">
            <Header sticky={isSticky} />
          </Container>
          <Container ref={element} fluid className="p-0">
            {children}
          </Container>
          <Footer />
        </Fragment>
      )}
    </div>
  )
})

export default MainLayout
