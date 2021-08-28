import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@ui'

const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Dots = styled.div`
  display: flex;
  max-width: 205px;
  width: 100%;
  justify-content: space-around;

  & > div {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: var(--blue3);
    display: inline-block;

    &:nth-child(3) {
      opacity: .9;
    }
    &:nth-child(3) {
      opacity: .8;
    }
    &:nth-child(4) {
      opacity: .7;
    }
    &:nth-child(5) {
      opacity: .6;
    }
  }
`

class Stepper extends Component {
  render() {
    const { numOfSteps, current } = this.props

    return (
      <StepperWrapper>
        {[...Array(Number(numOfSteps))].map((step, i, arr) => (
          <Fragment key={`stepper-${i}`}>
            <Button
              size="24px"
              block
              border="4px"
              height="64px"
              width="64px"
              color="blue3"
              gradient="linear-gradient(#3E6BEC50, #3E6BEC50)"
              disabled={i >= current}
              disableHover
            >
              <Text
                size="24px"
                weight="700"
                color="white"
              >
                {i + 1}
              </Text>
            </Button>
            { i < arr.length - 1 && (
              <Dots>
                <div />
                <div />
                <div />
                <div />
                <div />
              </Dots>
            )}
          </Fragment>
        ))}
      </StepperWrapper>
    )
  }
}

export default Stepper
