import React, { Component, createRef } from 'react'
import styled, { css } from 'styled-components'
import { Button, Text } from '..'
import { ReactComponent as PlusIcon } from '@assets/icons/Plus.svg'

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
`

const AccordionItem = styled.div`
  background: #FFFFFF;
  padding: 24px 20px;
  box-shadow: 0px 4px 6px rgba(112, 112, 112, 0.14);
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  & > span {
    cursor: pointer;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid #E7E7E7;
    margin-top: 20px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    font-size: 30px;
    color: var(--blue1)
  }
  & > button path:first-child {
    stroke: ${({ opened }) => opened && 'none'};
  }
`

const AccordionTitle = styled.h3`
  margin: 0;
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
`

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`

const AccordionContent = styled(Text)`
  padding-top: 12px;
  margin: 0;
  height: auto;
  font-size: 18px;
  line-height: calc(100% + 5px);
`

const AccordionIcon = styled.div`
  margin-bottom: 32px;
`

class ExpandCard extends Component {
  state = {
    opened: false,
    currentAccordion: -1,
    bodyHeight: 0,
  }

  render() {
    const { bodyHeight, opened } = this.state
    const { icon, title, text } = this.props
    const ref = createRef()

    return (
      <div>
        <AccordionInner>
          <AccordionItem opened={opened}>
            { icon && <AccordionIcon>{icon}</AccordionIcon> }
            <AccordionTitle
              onClick={() => {
                this.setState({ opened: !opened })
                this.setState({ bodyHeight: ref.current.clientHeight })
              }}
            >
              {title}
            </AccordionTitle>
            <AccordionBody
              active={opened}
              bodyHeight={bodyHeight}
            >
              <AccordionContent ref={ref}>{text}</AccordionContent>
            </AccordionBody>
            <Button
              color="#E7E7E7"
              borderWidth="1px"
              outlined
              icon
              width="40px"
              margin="20px 0 0"
              onClick={() => {
                this.setState({ opened: !opened })
                this.setState({ bodyHeight: ref.current.clientHeight })
              }}
            ><PlusIcon/></Button>
          </AccordionItem>
        </AccordionInner>
      </div>
    )
  }

}

export default ExpandCard
