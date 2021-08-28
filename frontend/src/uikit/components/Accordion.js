import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { ReactComponent as PlusIcon } from '@assets/icons/Plus.svg'
import { Button } from '..'
import ScrollAnimation from 'react-animate-on-scroll'

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
`

const AccordionItem = styled.div`
  background: #FFFFFF;
  padding: 16px 40px;
  box-shadow: 0px 4px 6px rgba(112, 112, 112, 0.14);
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const AccordionTitle = styled.h3`
  margin: 0;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;

  /* & > button path:first-child {
    stroke: ${({ opened }) => opened && 'none'};
  } */

  & > button {
    &.active {
      & path:first-child {
        stroke: none;
      }
    }

    & svg {
      padding: 4px;
      
    }
  }
`

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.6s;

  ${({ active, bodyHeight }) =>
    active && `
      height: ${bodyHeight};
      max-height: 300px;
    `}
`

const AccordionContent = styled.p`
  padding-top: 8px;
  margin: 0;
  height: auto;
  opacity: 0.5;
  font-size: 18px;
  line-height: calc(100% + 5px);
`
const StyledScrollAnimation = styled(ScrollAnimation)`
    &:not(:last-child) {
      margin-bottom: 12px;
    }
`
class Accordion extends Component {
  state = {
    currentAccordion: [],
    bodyHeight: 0,
    refs: []
  }

  componentDidMount() {
    let refs = this.props.data.map(() => createRef())
    this.setState({ refs })
  }

  render() {
    const { refs, currentAccordion, bodyHeight } = this.state

    return (
      <div>
        <AccordionInner>
          {this.props.data.map(({ title, content }, i) => (
            <StyledScrollAnimation
              animateOnce
              animateIn="fadeIn"
              animateOut="fadeOutLeft"
              style={{ 'transform': 'translateX(-100px)' }}
              key={`accordion-item-${i}`}
            >
              <AccordionItem >
                <AccordionTitle
                  onClick={() => {
                    this.setState(prev => ({ currentAccordion: currentAccordion.includes(i) ? prev.currentAccordion.filter((ac) => ac !== i) : prev.currentAccordion.concat(i) }))
                    this.setState({ bodyHeight: '100%' })
                  }}
                >
                  <Button
                    className={currentAccordion.includes(i) && 'active'}
                    icon
                    color="#E7E7E7"
                    borderWidth="1px"
                    outlined
                    width="20px"
                    margin="0 10px 0 0"
                  ><PlusIcon /></Button>
                  {title}
                </AccordionTitle>
                <AccordionBody
                  active={currentAccordion.includes(i)}
                  bodyHeight={bodyHeight}
                >
                  <AccordionContent ref={refs[i]}>{content}</AccordionContent>
                </AccordionBody>
              </AccordionItem>
            </StyledScrollAnimation>
          ))}
        </AccordionInner>
      </div>
    )
  }

}

export default Accordion
