import styled from 'styled-components'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@ui'
import { withTranslation } from 'react-i18next'

const StyledProgress = styled.progress`
    display: block;
    background: ${props =>  props.background? `var(${props.background})`: '#1c40ac60'};
    height: 10px;
    position: relative;
    color: #1C3FAC;
    overflow: hidden;
    width: ${props => props.max || '100%'};
    border-radius: 5px;
    ::-webkit-progress-bar {
        background: ${props =>  props.background? `var(${props.background})`: '#1c40ac60'};
    }
    ::-webkit-progress-value {
        background: ${props => props.color? `var(${props.color})`: 'var(--gradient)'};;
    }
    ::-moz-progress-bar {
        background: ${props => props.color? `var(${props.color})`: 'var(--gradient)'};;
    }
    /* &::after {
        content: '';
        position: absolute;
        background: ${props => props.color? `var(${props.color})`: 'var(--gradient)'};
        top: 0;
        left: 0;
        height: 100%;
        width: ${props => props.width || '20%'};
    } */
`
const Description = styled.p `
  font-size: 14px;
  margin-top: 4px;
  color: var(--light);
`
export default withTranslation()(class Progress extends Component {
  static propTypes = {
    value: PropTypes.any,
    showDescription: PropTypes.bool
  }
  render() {
    const { value, width, margin, time } = this.props
    const { t } = this.props
    return (
      <Flex
        direction="column"
        width={width}
        margin={margin}
      >
        <StyledProgress value={value}  />
        {this.props.showDescription !== false && (
          <Description>{t('ProgressRemaining', { time: time })}</Description>
        )}
      </Flex>
    )

  }
})


