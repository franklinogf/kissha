import React from "react"
import logo from "./logo.png"
import { Image } from "react-bootstrap"

export default function Logo() {
  return (
    <div>
      <Image className="d-block mx-auto" src={logo} alt="logo" />
    </div>
  )
}
