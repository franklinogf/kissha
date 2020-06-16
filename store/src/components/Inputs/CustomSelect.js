import React from "react"
import { Form } from "react-bootstrap"

const CustomSelect = props => {
  const controlId = props.id // MUST
  const extraClassName = props.className || "" //OPTIONAL
  const disabled = props.disabled || false
  const size = props.inputSize || 48
  const onBlur = props.onBlur
  const onChange = props.onChange
  const inputRef = props.inputRef
  const onKeyPress = props.onKeyPress
  const inputMargin = props.inputMargin || "my-4"

  return (
    <Form.Group
      controlId={controlId}
      className={`${inputMargin} position-relative ${extraClassName}`}
    >
      <Form.Control
        as="select"
        className={`py-2 _input`}
        onBlur={onBlur && onBlur}
        onChange={onChange && onChange}
        ref={inputRef && inputRef}
        name={controlId}
        onKeyPress={onKeyPress && onKeyPress}
        disabled={disabled}
        style={{height:`${size}px`}}
      >
        {props.options &&
          props.options.map((option, i) => (
            <option key={i} value={option[0]}>
              {option[1]}
            </option>
          ))}
      </Form.Control>
    </Form.Group>
  )
}

export default CustomSelect
