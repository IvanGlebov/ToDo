import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.fluid ? '100%' : '1280px'};
  margin: 0 auto;
  padding: 20px ${props => props.nogutters ? '0' : '20px'};;
  height: 100%;
  position: relative;
`

export default Container
