import React from "react"
import { Form, Collapse } from "react-bootstrap"
import styled from "styled-components"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const CustomInput = props => {
  const controlId = props.id
  const extraClassName = props.className || ""
  const [
    inputType,
    inputState,
    onBlur,
    onChange,
    inputPlaceholder,
    inputRef,
  ] = props.input
  const [labelText, labelEffect = "inside-to-outside"] = props.label

  return (
    <Form.Group
      controlId={controlId}
      className={`my-4 position-relative ${extraClassName}`}
    >
      <FormInput
        type={inputType}
        placeholder={inputPlaceholder ? inputPlaceholder : "placeholder"}
        className={`py-2 _input 
            ${
              inputState && inputState === "invalid"
                ? "border-danger"
                : inputState === "ok"
                ? "border-success"
                : ""
            }
            `}
        onBlur={onBlur && onBlur}
        onChange={onChange && onChange}
        ref={inputRef && inputRef}
      />
      {props.label && (
        <Form.Label className={`_label-${labelEffect}`}>{labelText}</Form.Label>
      )}
      {props.collapses &&
        props.collapses.map((collapse,i) => (
          <Collapse key={i} in={collapse[1] && collapse[1]}>
            <div
              className={`_font-size-13 text-${
                collapse[2] ? collapse[2] : `danger`
              }`}
            >
              {collapse[0]}
            </div>
          </Collapse>
        ))}
    </Form.Group>
  )
}

export default CustomInput
