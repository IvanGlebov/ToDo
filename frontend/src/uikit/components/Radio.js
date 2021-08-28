import styled from 'styled-components'
import React, { Component } from 'react'

const RadioButton = styled.div `
  input {
    border: none;
    padding: 0;
    display: none;
  }
  label {
    position: relative;
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    &:after {
      display: flex;
      top: 2px;
      left: 2px;
      width: 21px;
      height: 21px;
      box-sizing: border-box;
      border-radius: 50%;
      content: '';
      position: absolute;
      border: 2px solid ${props => props.color || '#fff'};
      background-color: ${props => props.color || '#fff'};
    }
    &:before {
      display: flex;
      top: -1px;
      left: -1px;
      width: 27px;
      height: 27px;
      border-radius: 50%;
      content: '';
      position: absolute;
      z-index: 0;
      background-color: ${props => props.color || 'transparent'};
    }
  }
  input:checked + label:after {
    border: 3px solid #fff;
  }
  input:checked + label::before {
    background-color: ${props => props.color || '#fff'};
    opacity: 0.5;
  }
`

class Radio extends Component {
  render() {
    const { color, name, id } = this.props
    return (
      <RadioButton color={color} >
        <input
          id={'radio_' + color + '_' + id}
          name={name}
          type="radio"
        />
        <label htmlFor={'radio_' + color + '_' + id} />
      </RadioButton>
    )
  }
}
export default  Radio
