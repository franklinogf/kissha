import React, { useState, Fragment } from "react"
import useStores from "../../hooks/useStores"
import AxiosClient from "../../config/axios"
import Section from "../Layout/Section"
import PageTitle from "../Layout/PageTitle"
import DashboardNavbar from "../Users/DashboardNavbar"
import AccountSettings from "../Users/AccountSettings"
import AddressSettings from "../Users/AddressSettings"
import OrdersSettings from "../Users/OrdersSettings"
import LoginSettings from "../Users/LoginSettings"
import PaymentSettings from "../Users/PaymentSettings"
import LoadingSection from "../Layout/LoadingSection"
import { observer } from "mobx-react"

const Dashboard = observer(() => {
  const { UserStore } = useStores()

  //states
  const [selectedSettings, setSelectedSettings] = useState("account")

  //handlers
  const handleSelectedOption = eventKey => {
    //prepare the view
    setSelectedSettings("loading")

    //before load the component, fetch the info to fill the data
    AxiosClient.get(`/users/${UserStore.obtainUser.id}/limited`).then(
      response => {
        UserStore.setUser(response.data.data)
        setSelectedSettings(eventKey)
      }
    )
  }

  return (
    <Fragment>
      <PageTitle title="Dashboard" />
      <Section bg=" _color-sweet" height={185} padding="pt-3 pb-0 px-0">
        <div className="d-flex justify-content-center">
          <span className=" _logo-text text-primary _font-size-36">K </span>
        </div>

        <div className="d-flex justify-content-center mb-4 mt-2 _font-size-30 _font-Montserrat font-italic">
          <h1 className="font-weight-light">
            Welcome {UserStore.obtainUser.firstName}!
          </h1>
        </div>
        <DashboardNavbar
          selectedLink={selectedSettings}
          setSelectedLink={handleSelectedOption}
        />
      </Section>
      {selectedSettings === "loading" && (
        <LoadingSection bg=" _color-candy-blue" />
      )}
      {selectedSettings === "account" && <AccountSettings />}
      {selectedSettings === "address" && <AddressSettings />}
      {selectedSettings === "orders" && <OrdersSettings />}
      {selectedSettings === "security" && <LoginSettings />}
      {selectedSettings === "payment" && <PaymentSettings />}
    </Fragment>
  )
})

export default Dashboard
