import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  width: ${props => props.width};
  margin: ${props => props.margin};
  height: ${props => props.height};
`

export default Flex
