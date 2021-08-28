import React, { Component } from 'react'
import styled from 'styled-components'

const BadgeWrapper = styled.div`
  position: relative;
  display: inline-block;
  & > span {
    display: block;
    content: ${({ value }) => value || ' '};
    border-radius: 8px;
    position: absolute;
    top: -4px;
    right: -2px;
    background-color: ${({ color }) => color ? `var(--${color})` : color};
    color: #fff;
    text-align: center;
    font-size: 10px;
    line-height: 15px;
    padding: 0px 4px;
  }
`

class Badge extends Component {

  render() {
    const { children, value, ...props } = this.props

    return (
      <BadgeWrapper { ...props }>
        {children}
        <span>{value}</span>
      </BadgeWrapper>
    )
  }

}

export default Badge
