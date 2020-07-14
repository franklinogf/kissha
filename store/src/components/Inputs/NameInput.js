import React, { useState } from "react"
import CustomInput from "./CustomInput"

const NameInput = ({
  idName,
  labelName,
  labelEffect,
  nameStatus,
  setNameStatus,
  onChangeHandler,
  defaultValue,
  disabled
}) => {
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
      defValue={defaultValue ? defaultValue : ""}
      disabled={disabled && disabled}
      input={[
        "text",
        nameStatus,
        handleName,
        onChangeHandler && onChangeHandler,
      ]}
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
