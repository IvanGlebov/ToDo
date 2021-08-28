import styled from 'styled-components'
import React, { Component } from 'react'

const StyledInputGroup = styled.div`
  display: flex;
  input {
    ${({ prepend }) => prepend && `
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    `}
    ${({ append }) => append && `
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      width: calc(100% + 14px)
    `}
  }
  button {
    z-index: 1;
  }

`

class InputGroup extends Component {

  state = { value: this.props.value || '' }

  render() {
    const { prepend, append, children } = this.props
    return (
      <StyledInputGroup
        prepend={prepend}
        append={append}
      >
        {children}
      </StyledInputGroup>
    )
  }
}
export default InputGroup
