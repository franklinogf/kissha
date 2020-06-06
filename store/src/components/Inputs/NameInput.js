import React, { Fragment, useState, useRef } from "react"
import CustomInput from "./CustomInput"

const NameInput = ({ idName, labelName, labelEffect }) => {
  const [nameStatus, setNameStatus] = useState("")
  const [collapseText, setCollapseText] = useState(false)

  const handleName = e => {
    const tmpInput = e.target.value

    if (tmpInput === "") {
      setNameStatus("")
      setCollapseText(false)
      return
    }

    if (!/^[a-zA-Z ]+$/.test(tmpInput)) {
      setNameStatus("invalid")
      setCollapseText(true)
      return
    } else {
      setNameStatus("ok")
      setCollapseText(false)
    }
  }

  return (
    <CustomInput
      id={idName}
      input={["text", nameStatus, handleName]}
      label={[labelName ? labelName : null, labelEffect ? labelEffect : null]}
      collapses={[
        [
          `Invalid ${
            labelName ? labelName : "input"
          }, don't use Numbers or special chars`,
          collapseText,
        ],
      ]}
    />
  )
}

export default NameInput
