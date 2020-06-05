import React, { useState } from "react"
import { Form } from "react-bootstrap"
import styled from "styled-components"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const EmailInput = ({ email, setEmail , fetchEmails }) => {
  const handleEmail = e => {
    let tmpEmail = e.target.value
    let count = 0

    if (tmpEmail === "") {
      setEmail("")
      return
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(tmpEmail)) {
      setEmail("invalid")
      return
    }
    //do the fetch here

    //exist evaluation
    fetchEmails.map(iteratedEmail => tmpEmail === iteratedEmail && count++)
    if (count > 0) {
      setEmail("exist")
      return
    } else {
      setEmail("ok")
      return
    }
  }

  return (
    <Form.Group controlId="email" className="position-relative">
      <FormInput
        type="email"
        placeholder="Email Address"
        className={`py-2 _input 
            ${
              email === "invalid" || email === "exist"
                ? "border-danger"
                : email === "ok"
                ? "border-success"
                : ""
            }
            `}
        onBlur={handleEmail}
      />
      <Form.Label className="_label-inside-to-outside">
        Email Address
      </Form.Label>
      {email === "invalid" && (
        <Form.Text className="text-danger">Invalid email.</Form.Text>
      )}
      {email === "exist" && (
        <Form.Text className="text-danger">
          This email is already in use.
        </Form.Text>
      )}
    </Form.Group>
  )
}

export default EmailInput
