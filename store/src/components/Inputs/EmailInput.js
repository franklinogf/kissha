import React, { useState, useEffect } from "react"
import CustomInput from "./CustomInput"
import AxiosClient from "../../config/axios"

const EmailInput = ({ email, setEmail, onChangeHandler }) => {
  const [invalidText, setInvalidText] = useState()
  const [existText, setExistText] = useState()
  const [compareEmail, setCompareEmail] = useState(false)
  const [fetchEmails, setFetchEmails] = useState([])

  /*initial fetch*/

  useEffect(() => {
    if (compareEmail) {
      const getEmails = () => {
        AxiosClient.get("/emails")
          .then(data => data.data)
          .then(emails => {
            setFetchEmails(emails.data)
            setCompareEmail(false)
          })
      }
      getEmails()
    }
  }, [compareEmail])

  const validationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const handleEmail = e => {
    let tmpEmail = e.target.value

    let count = 0

    if (tmpEmail === "") {
      setEmail("")
      setInvalidText(false)
      setExistText(false)
      return
    }

    if (!validationRegex.test(tmpEmail)) {
      setEmail("invalid")
      setExistText(false)
      setInvalidText(true)
      return
    }

    //exist evaluation
    setCompareEmail(true)
    fetchEmails.forEach(iteratedEmail => {
      tmpEmail === iteratedEmail.email && count++
    })

    if (count > 0) {
      setEmail("exist")
      setInvalidText(false)
      setExistText(true)
      return
    } else {
      setEmail("ok")
      setInvalidText(false)
      setExistText(false)
      return
    }
  }

  return (
    <CustomInput
      id="email"
      input={["email", email, handleEmail, onChangeHandler && onChangeHandler]}
      label={["Email"]}
      collapses={[
        ["Invalid Email", invalidText],
        ["This Email is already used.", existText],
      ]}
    />
  )
}

export default EmailInput
