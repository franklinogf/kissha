import React, { useState, useEffect } from "react"
import CustomInput from "./CustomInput"
import AxiosClient from "../../config/axios"

const PhoneInput = ({
  phone,
  setPhone,
  onChangeHandler,
  defaultValue,
  userId,
}) => {
  const [invalidText, setInvalidText] = useState()
  const [existText, setExistText] = useState()
  const [comparePhone, setComparePhone] = useState(true)
  const [fetchPhones, setFetchPhones] = useState([])

  /*initial fetch*/

  useEffect(() => {
    if (comparePhone) {
      const getPhones = () => {
        AxiosClient.get("/phones")
          .then(data => data.data)
          .then(phones => {
            setFetchPhones(phones.data)
            setComparePhone(false)
          })
      }
      getPhones()
    }
  }, [comparePhone])

  const validationRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/

  const handlePhone = e => {
    let tmpPhone = e.target.value

    let count = 0

    if (tmpPhone === "") {
      setPhone("")
      setInvalidText(false)
      setExistText(false)
      return
    }

    if (!validationRegex.test(tmpPhone)) {
      setPhone("invalid")
      setExistText(false)
      setInvalidText(true)
      return
    }

    //exist evaluation
    setComparePhone(true)
    fetchPhones.forEach(iteratedPhone => {
      if (tmpPhone === iteratedPhone.phone) {
        if (userId === iteratedPhone.id) {
          setPhone("")
          setInvalidText(false)
          setExistText(false)
        } else {
          count++
        }
      }
    })

    if (count > 0) {
      setPhone("exist")
      setInvalidText(false)
      setExistText(true)
      return
    } else {
      setPhone("ok")
      setInvalidText(false)
      setExistText(false)
      return
    }
  }

  return (
    <CustomInput
      id="phone"
      defValue={defaultValue ? defaultValue : ""}
      input={["phone", phone, handlePhone, onChangeHandler && onChangeHandler]}
      label={["Phone Number"]}
      collapses={[
        ["Invalid Phone Number", invalidText],
        ["This Phone Number belongs to an account.", existText],
      ]}
    />
  )
}

export default PhoneInput
