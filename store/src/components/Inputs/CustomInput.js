import React from "react"
import { Form, Collapse } from "react-bootstrap"
import styled from "styled-components"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const CustomInput = props => {
  const controlId = props.id // MUST
  const extraClassName = props.className || "" //OPTIONAL
  const [
    inputType, //1st parameter MUST
    inputState, //2nd parameter OPTIONAL
    onBlur, //3rd parameter OPTIONAL
    onChange, //4th parameter OPTIONAL
    inputPlaceholder, //5th parameter OPTIONAL
    inputRef, //6th parameter OPTIONAL
  ] = props.input
  const [
    labelText, //1st parameter MUST if you invoke this prop
    labelEffect, //2nd parameter OPTIONAL if you invoke this prop
  ] = props.label

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
        <Form.Label
          className={`_label-${
            labelEffect ? labelEffect : "inside-to-outside"
          }`}
        >
          {labelText}
        </Form.Label>
      )}

      {
        //COLLAPSES
        // you can put as many collapses as you want, in the component declaration you need to insert each collapse as an array in another array [[collapse1],[collapse2],etc...]
        // 1st parameter (TEXT) a MUST if you invoke this prop
        // 2nd parameter (IN) OPTIONAL if you invoke this prop
        // 3rd parameter (TEXT COLOR) OPTIONAL if you invoke this prop
      }

      {props.collapses &&
        props.collapses.map((collapse, i) => (
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
