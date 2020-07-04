import React, { Component, Fragment } from "react"
import Section from "../Layout/Section"
import PageTitle from "../Layout/PageTitle"
import DashboardNavbar from "../Users/DashboardNavbar"
import AccountSettings from "../Users/AccountSettings"
import AddressSettings from "../Users/AddressSettings"
import InfoUser from "../Users/InfoUser"
import OrdersSettings from "../Users/OrdersSettings"
import LoginSettings from "../Users/LoginSettings"
import PaymentSettings from "../Users/PaymentSettings"

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSettings: "info",
    }
    this.handleSelectedOption = this.handleSelectedOption.bind(this)
  }
  handleSelectedOption(eventKey) {
    this.setState({
      selectedSettings: eventKey,
    })
  }

  render() {
    const selected = this.state.selectedSettings
    return (
      <Fragment>
        <PageTitle title="Dashboard" />
        <Section bg=" _color-sweet" height={185} padding="pt-3 pb-0 px-0">
          <div className="d-flex justify-content-center">
            <span className=" _logo-text text-primary _font-size-36">K </span>
          </div>

          <div className="d-flex justify-content-center mb-4 mt-2 _font-size-30 _font-Montserrat font-italic">
            <h1 className="font-weight-light">Welcome Alexa!</h1>
          </div>
          <DashboardNavbar
            selectedLink={selected}
            setSelectedLink={this.handleSelectedOption}
          />
        </Section>
        {selected === "info" && <InfoUser />}
        {selected === "account" && <AccountSettings />}
        {selected === "address" && <AddressSettings />}
        {selected === "orders" && <OrdersSettings />}
        {selected === "security" && <LoginSettings />}
        {selected === "payment" && <PaymentSettings />}
      </Fragment>
    )
  }
}
