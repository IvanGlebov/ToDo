import Select from 'react-select'
import React, { Component } from 'react'

class CustomSelect extends Component {
  render() {
    const { value, options } = this.props
    return (
      <Select
        value={value}
        className="select"
        classNamePrefix="select"
        options={options}
      />
    )
  }
}
export default  CustomSelect
