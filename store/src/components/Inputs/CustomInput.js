import React from "react"
import { Form, Collapse } from "react-bootstrap"

const CustomInput = props => {
  const controlId = props.id
  const extraClassName = props.className || ""
  const [
    inputType,
    inputState,
    onBlur,
    onChange,
    inputPlaceholder = "",
    inputRef = "",
  ] = props.input
  const [labelText, labelEffect = "inside-to-outside"] = props.label

  return (
    <Form.Group
      controlId={controlId}
      className={`my-4 position-relative ${extraClassName}`}
    >
      <FormInput
        type={inputType}
        placeholder={inputPlaceholder}
        className={`py-2 _input 
            ${
              inputState && inputState === "invalid"
                ? "border-danger"
                : inputState === "ok"
                ? "border-success"
                : ""
            }
            `}
        onBlur={onBlur || ""}
        onChange={onChange || ""}
        ref={inputRef || ""}
      />
      {props.label && (
        <Form.Label className={`_label-${labelEffect}`}>{labelText}</Form.Label>
      )}
      {props.collapse &&
        props.collapses.map(collapse => (
          <Collapse in={collapse[1]}>
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
