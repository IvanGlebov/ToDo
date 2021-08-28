import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from '..'
import { ReactComponent as CheckIcon } from '@assets/Check.svg'
import PropTypes from 'prop-types'

const StyledCheckbox = styled.label`
  ${({ margin }) => margin && `margin: ${margin};`}
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    background-color: rgba(62, 107, 236, 0.2);
    border: 3px solid rgba(62, 107, 236, 0.2);
    border-radius: 4px;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;  
  }

  &:hover input ~ span {
    background-color: rgba(62, 107, 236, 0.2)
  }

  & input:checked ~ span {
    background-color: var(--blue3);
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    /* background-image: url(CheckIcon); */
  }
`

class Checkbox extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool
  }
  state = {
    value: this.props.checked,
    error: this.props.error
  }

  constructor(props) {
    super(props)
    this.checkboxInput = React.createRef()
  }

  handleOnChange(e) {
    this.setState({ value: e.target.checked }, () => this.props.onChange !== undefined && this.props.onChange())
  }

  val() {
    return this.checkboxInput.current.checked
  }

  setError(error) {
    this.setState({ error })
  }

  render() {
    const { label, margin } = this.props
    const { error } = this.state

    return (
      <StyledCheckbox error={error} margin={margin}>
        { label }
        <input type="checkbox" ref={this.checkboxInput} checked={this.state.value} onChange={(e) => this.handleOnChange(e)} />
        <span><CheckIcon/></span>
        <Text
          size="12px"
          color={(error && 'red1')}
          margin="4px 0 0 0"
        >
          {error || null}
        </Text>
      </StyledCheckbox>
    )
  }
}

export default Checkbox
